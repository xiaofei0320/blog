::: slot title-add-two-numbers
### 两数相加  
:::

::: slot title-swap-nodes
### 两两交换链表中的节点
:::

::: slot code-add-two-numbers1
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let List = new ListNode(0)
    let head = List
    let sum = 0
    let carry = 0
    while (l1 !== null || l2 !== null || sum > 0) {
        if (l1 !== null) {
            sum = sum + l1.val
            l1 = l1.next
        }
        if (l2 !== null) {
            sum = sum + l2.val
            l2 = l2.next
        }
        if (sum >= 10) {
            sum = sum - 10
            carry = 1
        }
        head.next = new ListNode(sum)
        head = head.next
        sum = carry
        carry = 0
    }
    return List.next
  };
```
:::

::: slot code-swap-nodes1
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
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

::: slot code-add-two-numbers1
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let List = new ListNode(0)
    let head = List
    let sum = 0
    let carry = 0
    while (l1 !== null || l2 !== null || sum > 0) {
        if (l1 !== null) {
            sum = sum + l1.val
            l1 = l1.next
        }
        if (l2 !== null) {
            sum = sum + l2.val
            l2 = l2.next
        }
        if (sum >= 10) {
            sum = sum - 10
            carry = 1
        }
        head.next = new ListNode(sum)
        head = head.next
        sum = carry
        carry = 0
    }
    return List.next
  };
```
:::


::: slot code-add-two-numbers1
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let List = new ListNode(0)
    let head = List
    let sum = 0
    let carry = 0
    while (l1 !== null || l2 !== null || sum > 0) {
        if (l1 !== null) {
            sum = sum + l1.val
            l1 = l1.next
        }
        if (l2 !== null) {
            sum = sum + l2.val
            l2 = l2.next
        }
        if (sum >= 10) {
            sum = sum - 10
            carry = 1
        }
        head.next = new ListNode(sum)
        head = head.next
        sum = carry
        carry = 0
    }
    return List.next
  };
```
:::


::: slot code-add-two-numbers1
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let List = new ListNode(0)
    let head = List
    let sum = 0
    let carry = 0
    while (l1 !== null || l2 !== null || sum > 0) {
        if (l1 !== null) {
            sum = sum + l1.val
            l1 = l1.next
        }
        if (l2 !== null) {
            sum = sum + l2.val
            l2 = l2.next
        }
        if (sum >= 10) {
            sum = sum - 10
            carry = 1
        }
        head.next = new ListNode(sum)
        head = head.next
        sum = carry
        carry = 0
    }
    return List.next
  };
```
:::


::: slot code-add-two-numbers1
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let List = new ListNode(0)
    let head = List
    let sum = 0
    let carry = 0
    while (l1 !== null || l2 !== null || sum > 0) {
        if (l1 !== null) {
            sum = sum + l1.val
            l1 = l1.next
        }
        if (l2 !== null) {
            sum = sum + l2.val
            l2 = l2.next
        }
        if (sum >= 10) {
            sum = sum - 10
            carry = 1
        }
        head.next = new ListNode(sum)
        head = head.next
        sum = carry
        carry = 0
    }
    return List.next
  };
```
:::

<algorithm-valid-palindrome/>