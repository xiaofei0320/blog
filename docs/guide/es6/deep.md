::: slot title-performance
## 执行上下文栈 作用域链
:::

::: slot title-prototype
## Js原型链 new操作符
:::

::: slot title-detail
## Js细节
:::

::: slot code-performance1
```js
let globalObject = {  // 伪代码
    Math: {},
    String: {},
    Date: {},
    document: {},  // DOM操作
    window: this  // 让window属性指向自身
    ...
}
```
:::

::: slot code-performance2
```js
let ECStack = []  // 伪代码,定义一个执行环境栈，类似于数组
let EC = {} // 创建一个执行空间，可以理解为内存中分配的块空间
ECStack.push(EC) // 进入函数，压入执行环境
ECStack.pop(EC) // 函数返回，删除执行环境
```
:::

::: slot code-performance3
```js
ECStack = [  // 执行环境栈
    EC(G) = {  // 全局执行环境
        VO(G): {  // 定义全局变量对象
            ...  // 包含全局对象原有的属性
            x = 1 // 定义变量x
            A = function () {}  // 定义函数A
            A[[scope]] = this //定义A的scope，并赋值VO本身
        }
    }
]
```
:::

::: slot code-performance4
```js
ECStack = [  // 执行环境栈
    EC(A) = {  // A的执行环境
        [scope]: VO(G), // VO的全局变量对象
        AO(A): {  // 创建函数A的活动对象
            y = 1 // 定义局部变量
            B = function () {}  // 定义函数B
            B[[scope]] = this //this指代AO本身，而AO位于scopeChain顶端，因此B[[scope]]指向整个作用域链
            arguments: [] // 函数中访问的arguments对象就是AO中的arguments
            this: window  // 函数中this指向调用者window对象
        }
    }
    EC(G) = {  // 全局执行环境
        VO(G): {  // 定义全局变量对象
            ...  // 包含全局对象原有的属性
            x = 1 // 定义变量x
            A = function () {}  // 定义函数A
            A[[scope]] = this //定义A的scope，A[[scope]]=VO(G)
        }
    }
]
```
:::

::: slot code-performance5
```js
ECStack = [  // 执行环境栈
    EC(B) = {  // B的执行环境，并处于作用域链的顶端
        [scope]: AO(A), // 指向A的作用域链AO(A) --> VO(G)
        AO(B): {  // 创建函数B的活动对象
            y = 1 // 定义局部变量
            B = function () {}  // 定义函数B
            B[[scope]] = this //this指代AO本身，而AO位于scopeChain顶端，因此B[[scope]]指向整个作用域链
            arguments: [] // 函数中访问的arguments对象就是AO中的arguments
            this: window  // 函数中this指向调用者window对象
        }
        scopeChain: <AO(B), B[[scope]]> //链表初始化为B[[scope]]，再将AO(B)加入链表表头
    },
    EC(A),  // A的执行环境已经从栈顶被删除
    EC(G) = {  // 全局执行环境
        VO(G): {  // 定义全局变量对象
            ...  // 包含全局对象原有的属性
            x = 1 // 定义变量x
            A = function () {}  // 定义函数A
            A[[scope]] = this //定义A的scope，A[[scope]]=VO(G)
        }
    }
]
```
:::
<es6-deep/>