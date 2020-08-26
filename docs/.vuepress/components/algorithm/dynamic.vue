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
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>