::: slot title-index
### 移动零
:::

::: slot code-method1
```js
var moveZeroes = (nums) => {
  let index = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i]
      index++
    }
  }
  for (let i = index; i < nums.length; i++) {
    nums[i] = 0
  }
}
```
:::

::: slot code-method2
```js
var moveZeroes = (nums) => {
  let i = 0, j = 0
  for (; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[j]
      nums[j] = nums[i]
      nums[i] = temp
      j++
    }
  }
}
```
:::

<algorithm-tree/>