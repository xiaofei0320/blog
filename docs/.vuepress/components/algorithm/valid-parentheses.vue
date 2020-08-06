<template>
    <div>
        <Content slot-key="title-index"/>
        <h4>给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
有效字符串需满足：左括号必须用相同类型的右括号闭合。左括号必须以正确的顺序闭合。注意空字符串可被认为是有效字符串</h4>
        <p>利用栈。
遇到左括号，一律推入栈中，
遇到右括号，将栈顶部元素拿出，如果不匹配则返回 false，如果匹配则继续循环。
为了提高性能, 在循环前进行这一步：let len = s.length是非常关键的，减少了计算次数。
为了提高执行时间，这一步if (len%2) return false是非常关键的，减少了不必要的计算。</p>
        <Content slot-key="code-method1"/>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>