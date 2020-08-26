<template>
  <div>
    <Content slot-key="Pow" />
    <h4>实现 pow(x, n) ，即计算 x 的 n 次幂函数。</h4>
    <p>方法一：分治</p>
    <Content slot-key="code-Pow1" />
    <p>方法二：迭代</p>
    <Content slot-key="code-Pow2" />
    <p>方法一：递归</p>

    <Content slot-key="code-Pow3" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>