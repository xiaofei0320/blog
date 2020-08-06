<template>
  <div>
    <Content slot-key="largest-rectangle" />
    <h4>
      给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
      求在该柱状图中，能够勾勒出来的矩形的最大面积。
    </h4>
    <p>方法：栈</p>
    <ul>
      <li>维护一个 stack 栈。遍历 heights 数组的每一个 bar</li>
      <li>当前 bar 比栈顶的 bar 高，直接入栈</li>
      <li>当前 bar 比栈顶的 bar 矮：</li>
      <ul>
        <li>栈顶元素（索引）出栈，暂存给 stackTopIndex 变量</li>
        <li>计算以 heights[stackTopIndex] 为高的长方形的面积，宽度 = 当前 bar 的索引 i - 新的栈顶索引 - 1 ，与全局的最大比较</li>
      </ul>
      <li>当前 bar 继续和新的栈顶比较，重复上面过程，直到当前 bar 不再比栈顶的 bar 矮，入栈</li>
    </ul>
    <p>边界情况分析</p>
    <ul>
      <li>求长方形的宽度，需要新的栈顶，如果没有呢？当栈只有一个元素，栈顶出栈，栈就空了</li>
      <li>我们再思考另一个问题：让 heights 数组的索引 0 入栈，依据是什么？</li>
      <li>入栈的依据是当前 bar 比栈顶 bar 高。问题是现在没有栈顶可以比较</li>
      <li>我们可以设立一个高为 0 的虚拟 bar ，放在 heights 的 0 位置，它不影响结果，却可以让第一条 bar 的索引，名正言顺地入栈</li>
      <li>同时解决了第一个问题：不会有别的 bar 比它更矮了，因此该 bar 永不出栈</li>
      <li>最后一个 bar 不会遇到新 bar 了，如果它在栈中，那就没有机会出栈了，意味着，没有机会计算栈中的长方形面积了</li>
      <li>我们设立一个虚拟的高为 0 的 bar，放在 heights 数组的最右，栈中的 bar 都比它高，能一一出栈，得到解救</li>
    </ul>
    <Content slot-key="largest-rectangle1" />
    <Content slot-key="sliding-window" />
    <h4>
      给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
      返回滑动窗口中的最大值。
    </h4>
    <p>方法1：暴力法</p>
    <Content slot-key="sliding-window1" />
    <p>方法二：滑动窗口+双端队列，时间复杂度：O(N)每个元素被处理两次- 其索引被添加到双向队列中和被双向队列删除</p>
    <Content slot-key="sliding-window2" />
    <p>方法1：动态规划</p>
    <Content slot-key="sliding-window3" />
    <Content slot-key="trapping-rain" />
    <h4>给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。</h4>
    <Content slot-key="trapping-rain1" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>