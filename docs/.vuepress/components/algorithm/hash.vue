<template>
  <div>
    <Content slot-key="two-sum" />
    <h4>
      给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
      你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
      示例:
      给定 nums = [2, 7, 11, 15], target = 9
      因为 nums[0] + nums[1] = 2 + 7 = 9
      所以返回 [0, 1]
    </h4>
    <p>方法一：暴力求解</p>
    <Content slot-key="two-sum1" />
    <p>方法二：两遍哈希表</p>
    <Content slot-key="two-sum2" />
    <p>方法三：一遍哈希表</p>
    <Content slot-key="two-sum3" />
    <Content slot-key="three-sum" />
    <h4>
      给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
      注意：答案中不可以包含重复的三元组。
      示例：
      给定数组 nums = [-1, 0, 1, 2, -1, -4]，
      满足要求的三元组集合为：
      [
      [-1, 0, 1],
      [-1, -1, 2]
      ]
    </h4>
    <p>哈希表法</p>
    <Content slot-key="three-sum1" />

    <Content slot-key="valid-anagram" />
    <p>
      方法一：暴力求解
      排序之后对比两个串
      时间复杂度为 O(nlogn); 空间复杂度：O(1)
    </p>
    <Content slot-key="valid-anagram1" />
    <p>
      方法二：哈希表
      两个计数器进行比较，s++，j--,看最后结果键值全部为0;
      时间复杂度：O(n) 空间复杂度：O(1)
    </p>
    <Content slot-key="valid-anagram2" />
    <Content slot-key="group-anagrams" />
    <h4>
      给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。示例:
      输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
      输出:
      [
      ["ate","eat","tea"],
      ["nat","tan"],
      ["bat"]
      ]
      说明：
      所有输入均为小写字母。
      不考虑答案输出的顺序。
    </h4>
    <p>
      方法一：暴力求解
      排序之后对比两个串
      时间复杂度为 O(nlogn); 空间复杂度：O(1)
    </p>
    <Content slot-key="group-anagrams1" />
    <p>
      方法二：哈希表
      两个计数器进行比较，s++，j--,看最后结果键值全部为0;
      时间复杂度：O(n) 空间复杂度：O(1)
    </p>
    <Content slot-key="group-anagrams2" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>