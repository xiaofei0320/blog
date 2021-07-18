::: slot generate-parentheses
## 括号生成
:::

::: slot phone-number
## 电话号码的字母组合
:::

::: slot permutations
##  全排列
:::

::: slot group-anagrams
## 字母异位词分组
:::

::: slot code-generate-parentheses1
```js
var generateParenthesis = function (n) {
      let res = [];
      //  cur :当前字符  left：当前字符左括号 right:当前字符右括号
      const help = (cur, left, right) => {
        if (cur.length === 2 * n) {
          res.push(cur);
          return;
        }
        if (left < n) {
          help(cur + "(", left + 1, right)
        }
        if (right < left) {
          help(cur + ")", left, right + 1);
        }
      };
      help("", 0, 0);
      return res;
    };
```
:::

::: slot code-phone-number1
```js
var letterCombinations = function(digits) {
  if (digits == null || digits.length === 0) return [];
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  const res = [];
  const go = (i, s) => {
    if (i === digits.length) {
      res.push(s);
      return;
    }
    for (const c of map[digits[i]]) {
      go(i + 1, s + c);
    }
  };
  go(0, '');
  return res;
};
```
:::

::: slot code-permutations1
```js
const permute = (nums) => {
//   let res = []
//   dfs([])
//   function dfs(path) {
//     if (path.length == nums.length) {
//       res.push(path.slice())
//     }
//     for (const num of nums) {
//       if (path.includes(num)) continue
//       path.push(num)
//       dfs(path)
//       path.pop()
//     }
//   }
//   return res

  const result = [];    // 1. 设置结果集
  const recursion = (path, set) => {    // 2. 回溯
    if (path.length === nums.length) {    // 2.1 设置回溯终止条件
      result.push(path.concat());      // 2.1.1 推入结果集
      return;       // 2.1.2 终止递归
    }
    for (let i = 0; i < nums.length; i++) {      // 2.2 遍历数组
      if (!set.has(i)) {       // 2.2.1 必须是不存在 set 中的坐标
        path.push(nums[i]);         // 2.2.2 本地递归条件（用完记得删除）
        set.add(i);
        recursion(path, set);        // 2.2.3 进一步递归
        path.pop();        // 2.2.4 回溯：撤回 2.2.2 的操作
        set.delete(i);
      }
    }
  };
  recursion([], new Set());
  return result;  // 3. 返回结果
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

<algorithm-divide/>