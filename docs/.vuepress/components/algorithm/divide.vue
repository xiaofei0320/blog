<template>
  <div>
    <Content slot-key="generate-parentheses" />
    <h4>数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。</h4>
    <p>示例：输入：n = 3
输出：[
       "((()))",
       "(()())",
       "(())()",
       "()(())",
       "()()()"
     ]</p>
    <p>方法一：回溯</p>
    <p>1、某一次递归终止时需要将当前字符存入数组
2、 字符任取一个位置左侧必 左括号>=右括号
3、每次递归除了需要传当前字符还需要记情当前左右括号数
</p>
    <Content slot-key="code-generate-parentheses1" />
    <Content slot-key="phone-number" />
    <h4>给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。</h4>
    <p>示例：</p>
    <p>输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
    <p>方法一：回溯</p>
</p>
    <Content slot-key="code-phone-number1" />
    <Content slot-key="permutations" />
    <h4>给定一个 没有重复 数字的序列，返回其所有可能的全排列。</h4>
    <p>示例：</p>
    <p>输入： [1,2,3]
输出：[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
</p>
    <p>方法一：回溯</p>
    <Content slot-key="code-permutations1" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>