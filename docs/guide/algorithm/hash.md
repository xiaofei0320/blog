::: slot two-sum
## 两数之和
:::

::: slot three-sum
## 三数之和
:::

::: slot valid-anagram
## 有效的字母异位词
:::

::: slot group-anagrams
## 字母异位词分组
:::

::: slot two-sum1
```js
let twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(i != j && nums[i] + nums[j] == target){
                return [i, j];
            }
        }
    }
};
```
:::

::: slot two-sum2
```js
var twoSum = function(nums, target) {
      let res = {}
      for (let i = 0; i < nums.length; i++) {
        res[target - nums[i]] = nums[i]
      }
      for (let j = 0; j < nums.length; j++) {
        if (res[nums[j]] !== undefined) {
          return [nums[j], res[nums[j]]]
        }
      }
    }
```
:::

::: slot two-sum3
```js
var twoSum = function(nums, target) {
      let res = {}
      for (let i = 0; i < nums.length; i++) {
        if (res[nums[i]] !== undefined) {
          return [nums[i], res[nums[i]]]
        } else {
          res[target - nums[i]] = nums[i]
        }
      }
    }
```
:::

::: slot three-sum1
```js
var threeSum = function(nums) {
  let arr = []
  if(nums == null || nums.length < 3) return arr;
  nums.sort((a, b) => a - b)
  for(var i =0; i<nums.length-2; i++){
    const hashMap = new Map()
    if(nums[i] > 0) break;
    // 去重处理
    if(i > 0 && nums[i] == nums[i-1]) continue
    for(var j =i+1; j<nums.length; j++){
      const dif = -(nums[i]+nums[j])
      // 去重处理
      // 因为hashMap是首次记录第二次才会push到数组，所以需要判断只有三次重复才能continue
      if(j>i+2 && nums[j]==nums[j-1] && nums[j]==nums[j-2])
        continue
      if(hashMap.has(dif)){
        arr.push([nums[i],nums[hashMap.get(dif)],nums[j]])
        hashMap.delete(dif)
      }
      hashMap.set(nums[j],j)
    }
  }
  return arr
};
```
:::

::: slot valid-anagram1
```js
var isAnagram = function (s,t){
    if(s == t){ return true }
    return s.split('').sort().join('') == t.split('').sort().join('')
}
```
:::

::: slot valid-anagram2
```js
var isAnagramHashTable = function(s, t) {
    let hash = {};
    for (let char of s) {
        hash[char] = hash[char]+1||1;
    }
    for (let char of t) {
        if (!hash[char]) return false;
        hash[char]--;
        if (hash[char] == 0) delete hash[char];
    }
    return [...Object.keys(hash)].length==0
}

```
:::

::: slot group-anagrams1
```js
var groupAnagrams = function(strs) {
    var tmpCode = '';
    var hashMap = {};
    var result = [];
    for(var i = 0; i < strs.length; i++){
        tmpCode = strs[i].split('').sort().join('');
        if(hashMap[tmpCode] == undefined){
            hashMap[tmpCode] = [];
        }
        hashMap[tmpCode].push(strs[i]);
    }
    for(var key in hashMap){
        result.push(hashMap[key]);
    }
    return result;
};
```
:::

::: slot group-anagrams2
```js
var groupAnagrams = function(strs) {
  let table = new Map();
  
  for (let i = 0; i < strs.length; i++) {
    const currKey = [...strs[i]].sort().toString();
    
    if (table.has(currKey)) table.set(currKey, [...table.get(currKey), strs[i]]);
    if (!table.has(currKey)) table.set(currKey, [strs[i]]);
  }
  
  return [...table.values()];
};
```
:::

<algorithm-hash/>