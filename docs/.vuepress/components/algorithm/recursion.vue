<template>
  <div>
    <Content slot-key="climbing-stairs" />
    <h4>
      假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
      每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
      注意：给定 n 是一个正整数。
    </h4>
    <p>如果观察数学规律，可知本题是斐波那契数列，那么用斐波那契数列的公式即可解决问题，时间复杂度：O(logn)</p>
    <Content slot-key="climbing-stairs1" />
    <p>
      动态规划
      本问题其实常规解法可以分成多个子问题，爬第n阶楼梯的方法数量，等于 2 部分之和
      爬上 n-1n−1 阶楼梯的方法数量。因为再爬1阶就能到第n阶
      爬上 n-2n−2 阶楼梯的方法数量，因为再爬2阶就能到第n阶
      所以我们得到公式 dp[n] = dp[n-1] + dp[n-2]dp[n]=dp[n−1]+dp[n−2]
      同时需要初始化 dp[0]=1dp[0]=1 和 dp[1]=1dp[1]=1
      时间复杂度：O(n)
    </p>
    <Content slot-key="climbing-stairs2" />
    <Content slot-key="fibonacci" />
    <h4>斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和</h4>
    <p>F(0) = 0, F(1) = 1</p>
    <p>F(N) = F(N - 1) + F(N - 2), 其中 N > 1.</p>
    <p>给定 N，计算 F(N)。</p>
    <p>输入：2输出：1解释：F(2) = F(1) + F(0) = 1 + 0 = 1.</p>
    <p>方法一：递归</p>
    <Content slot-key="fibonacci1" />
    <p>方法二：递推</p>
    <Content slot-key="fibonacci2" />
    <p>方法三：递推优化</p>
    <Content slot-key="fibonacci3" />
    <Content slot-key="reverse-linked" />
    <h4>
      反转一个单链表。
      示例:
      输入: 1->2->3->4->5->NULL
      输出: 5->4->3->2->1->NULL
    </h4>
    <p>
      方法一：双指针迭代思路
      关键
      将当前节点的指针指向上一个节点
      然后更新当前节点和下一个节点的值即顺移
      技巧
      设置哨兵节点 null，初始化时将head节点指向null，下一步将next指向head
      重复以上动作直到当前节点为尾节点的节点null
      时间: O(n). 逐个推进故 O(n).
    </p>
    <Content slot-key="reverse-linked1" />
    <p>
      方法二：尾递归思路
      其实就是解法一的简化版
      prev = curr;
      curr = next;
      此解法将 上面放在递归里返回
      同理都是做将当前节点指向前一个节点的操作之后，来顺移更新前一个、当前、和下一个节点的操作时间复杂度为 O(n).
    </p>
    <Content slot-key="reverse-linked2" />
    <p>
      方法三：递归思路
      关键是反转操作
      当前节点 head，下一个节点 head.next
      head.next.next = head
      此处将原 head.next 指向head，即是反转
      head.next = null
      此处将原 head 指向head.next的指针断开
      递归
      由编译器函数调用执行栈原理可知
      最先调用的函数会在递归过程中最后被执行，而最后调用的会最先执行
      因此此题，最先返回最后两个节点开始反转操作
      依次从后面两两节点开始反转时间复杂度为 O(n).
    </p>
    <Content slot-key="reverse-linked3" />
    <Content slot-key="swap-nodes" />
    <h4>
      给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
      你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
      示例:
      给定 1->2->3->4, 你应该返回 2->1->4->3.
    </h4>
    <p>
      方法一：双指针迭代思路
      我们把链表分为两部分，即奇数节点为一部分，偶数节点为一部分，A 指的是交换节点中的前面的节点，B 指的是要交换节点中的后面的节点。在完成它们的交换，我们还得用 prevNode 记录 A 的前驱节点。
      算法：
      firstNode（即 A） 和 secondNode（即 B） 分别遍历偶数节点和奇数节点，即两步看作一步。
      交换两个节点：
      firstNode.next = secondNode.next
      secondNode.next = firstNode
      还需要更新 prevNode.next 指向交换后的头。
      prevNode.next = secondNode
      迭代完成后得到最终的交换结果。
    </p>
    <Content slot-key="swap-nodes1" />
    <p>
      方法二：递归思路
      从链表的头节点 head 开始递归。
      每次递归都负责交换一对节点。由 firstNode 和 secondNode 表示要交换的两个节点。
      下一次递归则是传递的是下一对需要交换的节点。若链表中还有节点，则继续递归。
      交换了两个节点以后，返回 secondNode，因为它是交换后的新头。
      在所有节点交换完成以后，我们返回交换后的头，实际上是原始链表的第二个节点。
    </p>
    <Content slot-key="swap-nodes2" />
  
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>