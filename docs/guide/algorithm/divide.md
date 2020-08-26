::: slot Pow
## Pow(x, n)
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

::: slot code-Pow1
```js
var myPow = function(x, n) {
   if(n===0)return 1 // n=0直接返回1
   if(n<0){   				//n<0时 x的n次方等于1除以x的-n次方分
       return 1/myPow(x,-n)
   }
   if(n%2){    //n是奇数时 x的n次方 = x*x的n-1次方
       return x*myPow(x,n-1)
   }
   return myPow(x*x,n/2) //n是偶数，使用分治，一分为二，等于x*x的n/2次方 
}
```
:::

::: slot code-Pow2
```js
var myPow = function (num, power) {
  if (power < 0) return 1 / num * myPow(1 / num, -(power + 1))
  if (power === 0) return 1 
  if (power === 1) return num
  // 以上分别为power小于0 等于0 等于1 的情况
  let res = 1
  while (power > 1) { // power大于1
    if (power % 2 === 1) {
      res = res * num
      power--
    }
    num = num * num
    power = power / 2
  }
  return res * num
};
```
:::

::: slot code-Pow3
```js
var myPow = (num, power) => {
  if (power < 0) return 1 / (num * myPow(num, -(power + 1)))
  if (power === 0) return 1
  if (power === 1) return num
  return power % 2 === 1 ?
    num * myPow(num, power - 1) :
    myPow(num * num, power / 2)
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