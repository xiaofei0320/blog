::: slot title-index
### 两数之和
:::

::: slot code-method2
```js
let twoSum = function(nums, target) {
  let temp = []
  for (let i = 0; i < nums.length; i++) {
    let dif = target-nums[i]
    if (temp[dif] !== undefined) {
      return [temp[dif], i]
    }
    temp[nums[i]] = i;
  }
};
```
:::
::: slot code-method1
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

<algorithm-depth/>