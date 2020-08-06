::: slot title-index
### 实现promise
:::

::: slot code-method1
```js
class Promise {
    constructor(executor) {
        this.status = PENDING
        this.value = undefined
        this.reason = undefined
        this.onResolveCallbacks = []
        this.onRejectedCallbacks = []
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
            executor(resolve, reject)
        } catch (e) {
            reject(e)
        }
        // executor(resolve, reject)
    }

    then(onFullfilled, onRejected) {
        let promise2 = new Promise((resolve, reject) => {
            if (this.status === RESOLVED) {
                setTimeout(() => {
                    try {
                        let x = onFullfilled(this.value)
                        resolvePromise(promise2, x, resolve, reject)
                    }catch {

                    }
                    
                }, 0);
            }
            if (this.status === REJECTED) {
                setTimeout(() => {
                    let x = onRejected(this.reason)
                    resolvePromise(promise2, x, resolve, reject)
                }, 0)
            }
            if (this.status === PENDING) {
                this.onResolveCallbacks.push(() => {
                    setTimeout(() => {
                        let x = onFullfilled(this.value)
                        resolvePromise(promise2, x, resolve, reject)
                    }, 0)
                })
                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        let x = onRejected(this.reason)
                        resolvePromise(promise2, x, resolve, reject)
                    }, 0)
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

const RESOLVED = 'RESOLVED'
const REJECTED = 'REJECTED'
const PENDING = 'PENDING'
```
:::

<es6-promise/>