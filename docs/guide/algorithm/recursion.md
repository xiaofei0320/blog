::: slot climbing-stairs
## 爬楼梯
:::

::: slot fibonacci
## 斐波那契额
:::

::: slot reverse-linked
## 反转链表
:::

::: slot swap-nodes
## 两两交换链表中的节点
:::

::: slot climbing-stairs1
```js
var climbStairs = function(n) {
    const sqrt_5 = Math.sqrt(5);
    const fib_n = Math.pow((1 + sqrt_5) / 2, n + 1) - Math.pow((1 - sqrt_5) / 2,n + 1);
    return Math.round(fib_n / sqrt_5);
};
```
:::

::: slot climbing-stairs2
```js
var climbStairs = function(n) {
    const dp = [];
    dp[0] = 1;
    dp[1] = 1;
    for(let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};
```
:::


::: slot fibonacci1
```js
let fib = function(N) {
    if(N == 1 || N == 0) {
        return N
    }
    return fib(N - 1) + fib(N - 2)
};
```
:::
::: slot fibonacci2
```js
let fib = function(N) {
    let cache = []
    for (let i = 0; i <= N; i++){
        if (i == 0 || i == 1) {
            cache[i] = i
        } else {
            cache[i] = cache[i - 1] + cache[i - 2]
        }
    }
    return cache[N]
};
```
:::
::: slot fibonacci3
```js
let fib = function(N) {
    if (N == 0) return 0;
    if(N == 2 || N == 1) return 1;
    let prev = 1;
    let curry = 1;
    for (let i = 3; i <= N; i++) {
        let sum = prev + curry;
        prev = curry;
        curry = sum;
    }
    return curry;
};
```
:::


::: slot reverse-linked1
```js
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while(curr != null){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};
```
:::

::: slot reverse-linked2
```js
var reverseList = function(head) {
    let reverse = (prev,curr) => {
        if(!curr)return prev;
        let next = curr.next;
        curr.next = prev;
        return reverse(curr,next);
    }
    return reverse(null,head);
};
```
:::

::: slot reverse-linked3
```js
var reverseList = function(head) {
    // 如果测试用例只有一个节点 或者 递归到了尾节点，返回当前节点 
    if(!head || !head.next) return head;
    // 存储当前节点的下一个节点
    let next = head.next;
    let reverseHead = reverseList(next);
    // 断开 head ，如图闪电⚡️标记处
    head.next = null;
    // 反转，后一个节点连接当前节点
    next.next = head;
    return reverseHead;
};
```
:::

::: slot swap-nodes1
```js
var swapPairs = function(head) {
    // 1. 确认 head 大于等于两个，否则返回;
    if (!head || !head.next) return head;
    // 2. 新建链表哨兵头并创建指针curr；
    let res = new ListNode(null);
    res.next = head;
    let prev = res;
    // 3. 循环开始
    //    3.1 走两步，存为fst, snd;
    //    3.2 哨兵->snd, fst->snd.next, snd->fst;
    //    3.3 推进 curr = curr.next.next;
    while (prev.next && prev.next.next) {
        let [fst, snd] = [prev.next, prev.next.next];
        [prev.next, fst.next, snd.next] = [snd, snd.next, fst];
        prev = prev.next.next;
    }
    // 4. 返回res.next;
    return res.next;
};
```
:::

::: slot swap-nodes2
```js
var swapPairs = function(head) {
    if(head == null || head.next == null){
        return head;
    }
    // 获得第 2 个节点
    let next = head.next;
    // next.next = head.next.next
    // 第1个节点指向第 3 个节点，并从第3个节点开始递归
    head.next = swapPairs(next.next);
    // 第2个节点指向第 1 个节点
    next.next = head;
    // 或者 [head.next,next.next] = [swapPairs(next.next),head]
    return next;
}
```
:::

<algorithm-recursion/>