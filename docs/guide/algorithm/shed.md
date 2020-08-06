::: slot largest-rectangle
## 柱状图中最大的矩形
:::

::: slot sliding-window
## 滑动窗口最大值
:::

::: slot trapping-rain
## 接雨水
:::

::: slot largest-rectangle1
```js
var largestRectangleArea = function(heights) {
    let area = 0
    let stack = []
    heights = [0, ...heights, 0]
    for (let i = 0; i < heights.length; i++) {
        while (heights[i] < heights[stack[stack.length - 1]]) {
            const stackTopIndex = stack.pop()
            area = Math.max(area, heights[stackTopIndex] * (i - stack[stack.length - 1] - 1))
        }
        stack.push(i)
    }
    return area
};
```
:::

::: slot sliding-window1
```js
var maxSlidingWindow = function(nums, k) {
    let n = nums.length;
    if(n == 0) return [];
    let res = [];
    for(let i = 0;i < n - k + 1;i++){
        let max = Number.MIN_SAFE_INTEGER;
        for(let j = i;j < i + k;j++){
            max = Math.max(max,nums[j]);
        }
        res.push(max);
    }
    return res;
};
```
:::

::: slot sliding-window2
```js
function maxSlidingWindow(nums, k) {
  const res = [];
  const q = [];

  for (let i = 0; i < nums.length; i++) {
    while (q.length - 1 >= 0 && nums[i] > q[q.length - 1]) q.pop();
    q.push(nums[i]);
    // When i + 1 - k >= 0, the window is fully overlapping nums
    const j = i + 1 - k;
    if (j >= 0) {
      res.push(q[0]);
      if (nums[j] === q[0]) q.shift();  // If the biggest element in q is about to exit window, remove it from q
    }
  }
  return res;
}
```
:::

::: slot sliding-window3
```js
var maxSlidingWindow = function(nums, k) {
    let n = nums.length;
    if(n == 0) return [];
    if(k == 1) return nums;
    let res = [];
    let left = new Array(n),right = new Array(n);
    left[0] = nums[0];
    right[n-1] = nums[n-1];
    for(let i = 1;i < n;i++){
        if(i % k == 0) left[i] = nums[i];
        else left[i] = Math.max(left[i-1],nums[i]);
        let j = n - i - 1;
        if((j + 1) % k == 0) right[j] = nums[j];
        else right[j] = Math.max(right[j + 1],nums[j]);
    }
    for(let i = 0;i < n - k + 1;i++){
        res[i] = Math.max(left[i + k - 1],right[i]);
    }
    return res;
};
```
:::


::: slot trapping-rain1
```js
var trap = function(height) {
    let leftMax = -1, rightMax = -1, left = 0, right = height.length - 1, res = 0
    while (left <= right) {
        leftMax = height[left] > leftMax ? height[left] : leftMax
        rightMax = height[right] > rightMax ? height[right] : rightMax
        if (leftMax > rightMax) {
            res += rightMax - height[right]
            right--
        }
        else {
            res += leftMax - height[left]
            left++
        }
    }
    return res
};
```
:::

<algorithm-shed/>