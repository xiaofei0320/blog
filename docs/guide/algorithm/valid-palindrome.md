::: slot title-index
### 验证回文串
:::

::: slot code-method1
```js
var isPalindrome = function(s) {
    let str = s.replace(/\W|_/g, '').toLowerCase()
    let left = 0
    let right = str.length - 1
    while(left < right){
      if(str[left] !== str[right]) return false
      left++
      right--
    }
    return true
  };
```
:::

<algorithm-valid-palindrome/>