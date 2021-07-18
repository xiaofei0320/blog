::: slot title-standard
## Promise标准解读
:::


::: slot title-index
### 实现promise
:::

::: slot code-method1
```js
// Promise构造函数接收一个executor函数，executor函数执行完同步或异步操作后，调用它的两个参数resolve和reject

const RESOLVED = 'RESOLVED'
const REJECTED = 'REJECTED'
const PENDING = 'PENDING'
class Promise {
    constructor(executor) {
        this.status = PENDING  // promise当前的状态
        this.value = undefined  // promise的值
        this.reason = undefined // promise失败原因
        this.onResolveCallbacks = []  // Promise resolve时的回调函数集，因为在Promise结束之前有可能有多个then回调添加到它上面
        this.onRejectedCallbacks = []  //Promise reject时的回调函数集，因为在Promise结束之前有可能有多个then回调添加到它上面
        let resolve = (value) => {
            if (this.status === PENDING) {
                this.value = value
                this.status = RESOLVED
                this.onResolveCallbacks.forEach(fn => fn())
            }
        }
        let reject = (reason) => {
            if (this.status === PENDING) {
                this.reason = reason
                this.status = REJECTED
                this.onRejectedCallbacks.forEach(fn => fn())
            }
        }
        try {
            executor(resolve, reject)  // 执行executor并传入相应的参数提供给用户
        } catch (e) {
            reject(e)
        }
    }

    //Promise/A标准中，明确规定了then要返回一个新的对象，目前的Promise实现中then几乎都是返回一个新的Promise(详情)对象，所以在我们的实现中，也让then返回一个新的Promise对象。
    then(onFullfilled, onRejected) {
        let promise2 = new Promise((resolve, reject) => {
            if (this.status === RESOLVED) {
                setTimeout(() => {
                    try {
                        let x = onFullfilled(this.value)
                        resolvePromise(promise2, x, resolve, reject)
                    }catch(reason) {
                        reject(reason)
                    }
                }, 0);
            }
            if (this.status === REJECTED) {
                setTimeout(() => {
                    try {
                        let x = onRejected(this.reason)
                    resolvePromise(promise2, x, resolve, reject)
                    }catch(reason) {
                        reject(reason)
                    }
                }, 0)
            }
            // 如果当前的Promise还处于pending状态，我们并不能确定调用onResolved还是onRejected，
            // 只能等到Promise的状态确定后，才能确实如何处理。
            // 所以我们需要把我们的**两种情况**的处理逻辑做为callback放入promise1(此处即this/self)的回调数组里
            // 这里之所以没有异步执行，是因为这些函数必然会被resolve或reject调用，而resolve或reject函数里的内容已是异步执行，构造函数里的定义
            if (this.status === PENDING) {
                this.onResolveCallbacks.push(() => {
                    try {
                        let x = onFullfilled(this.value)
                        resolvePromise(promise2, x, resolve, reject)
                    }catch(reason) {
                        reject(reason)
                    }
                        
                })
                this.onRejectedCallbacks.push(() => {
                    try {
                        let x = onRejected(this.reason)
                    resolvePromise(promise2, x, resolve, reject)
                    }catch(reason) {
                        reject(reason)
                    }
                })
            }
        })
        return promise2
    }
}

const resolvePromise = (promise2, x, resolve, reject) => {
    if (promise2 === x) { //自己等待自己完成，抛出类型错误
        return reject(new TypeError())
    }
    if (typeof x === 'object' && x !== null || typeof x === 'function') {
        try {
            let then = x.then
            if (typeof then === 'function') {
                then.call(x, y => {
                    resolvePromise(promise2, y, resolve, reject)
                }, err => {
                    reject(err)
                })
            } else {
                resolve(x)
            }
        }catch(e) {
            reject(e)
        }
    } else {
        resolve(x)
    }
}
const isPromise = value => typeof value.then === 'function'
Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
        let arr = []
        let index = 0
        const processData = (key, data) => {
            arr[key] = data
            if (++index == promises.length) {
                resolve(arr)
            }
         }
        for (let i = 0; i < promises.length; i++) {
            let result = promises[i]
            if (isPromise(result)) {
                result.then((data) => {
                    processData(i, data)
                }, reject)
            } else {
                processData(i, result)
            }
        }
    })
}

Promise.race = function(promises) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            let result = promises[i]
            if (isPromise(result)) {
                result.then(resolve, reject)
            } else {
                resolve(result)
            }
        }
    })
}
```
:::

<es6-promise/>