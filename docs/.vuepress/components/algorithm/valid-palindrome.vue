<template>
    <div>
        <Content slot-key="title-index"/>
        <h4>给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
说明：本题中，我们将空字符串定义为有效的回文串。</h4>
        <p>正则加双指针：
它只要 数字 和 字母 (大小不论) , 所以首先 肯定要处理一下这个字符串

我们可以用正则去掉不是字母和数字的 : \W：匹配非 字母、数字、下划线。等价于 '[^A-Za-z0-9_]'

可以直接用[^A-Za-z0-9], 测试用例没有下划线, 用\W 可以通过, 然后跑去提交了条下划线的测试用例

再转换为小写或大写都可以


"A man, a plan, a canal: Panama"  => amanaplanacanalpanama
接下来就简单了, 用双指针就能搞定, 就是首尾字符挨个对比, 一旦有一个不相等的就说明不是回文了
</p>
        <Content slot-key="code-method1"/>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>