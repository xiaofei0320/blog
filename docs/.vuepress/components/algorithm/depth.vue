<template>
    <div>
        <Content slot-key="title-index"/>
        <h4>给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。</h4>
        <h4>你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。</h4>
        <p>示例：给定 nums = [2, 7, 11, 15], target = 9因为 nums[0] + nums[1] = 2 + 7 = 9所以返回 [0, 1]</p>
        <p>方法一：暴力遍历法（for循环嵌套，时间复杂度O(n^2)， 空间复杂度O(1)）</p>
        <Content slot-key="code-method1"/>
        <p>方法一：空间换时间（时间复杂度O(n)，空间复杂度O(n)）</p>
        <Content slot-key="code-method2"/>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>