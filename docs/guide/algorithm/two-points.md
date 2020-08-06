::: slot move-zero
## 移动零
:::

::: slot container
## 盛最多水的容器
:::

::: slot three-sum
## 三数之和
:::

::: slot linked-list-cycle
## 环形链表
:::

::: slot linked-list-cycleII
## 环形链表II
:::

::: slot move-zero1
```js
// let twoSum = function(nums, target) {
//     for(let i = 0; i < nums.length; i++){
//         for(let j = 0; j < nums.length; j++){
//             if(i != j && nums[i] + nums[j] == target){
//                 return [i, j];
//             }
//         }
//     }
// };
```
:::

::: slot move-zero2
```js
var moveZeroes = (nums) => {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) [nums[j++], nums[i]] = [nums[i], nums[j]]; 
  }
}
```
:::

::: slot move-zero3
```js
var moveZeroes = function(nums) {
    let i = 0, j=0
    while(i < nums.length){
        if (nums[i] != 0){
            if (j < i){
                nums[j] = nums[i]
                nums[i] = 0
            }
            j++
        }
        i++
    }
    return nums
};
```
:::

::: slot container1
```js
var maxArea = function(height) {
    let max = 0;
    for(let i = 0; i < height.length; i++){
        for(let j = i + 1; j < height.length; j++){
            let sum = (j - i) * Math.min(height[i], height[j]);
            if(sum > max) max = sum;
        }
    }
    return max;
};
```
:::

::: slot container2
```js
var maxArea = function(height) {
    if (!height || height.length <= 1) return 0;
    let left = 0;
    let right = height.length - 1;
    let max = 0;
    while (left < right) {
        let area = (right - left) * Math.min(height[left], height[right])
        max = max > area ? max : area
        height[left] > height[right] ? right-- : left++
    }
    return max;
};
```
:::

::: slot three-sum1
```js
var threeSum = function(nums) {
      let res = []
      for (let i = 0; i < nums.length - 2; i++) { // 每个人
        for (let j = i + 1; j < nums.length - 1; j++) { // 依次拉上其他每个人
          for (let k = j + 1; k < nums.length; k++) { // 去问剩下的每个人
            if (nums[i] + nums[j] + nums[k] === 0) { // 我们是不是可以一起组队
              res.push([nums[i], nums[j], nums[k]])
            }
          }
        }
      }
      return res
    }
```
:::

::: slot three-sum2
```js
var threeSum = function(nums) {
  // 最左侧值为定值，右侧所有值进行两边推进计算
  let res = [];
  nums.sort((a, b) => a - b);
  let size = nums.length;
  if (nums[0] <= 0 && nums[size - 1] >= 0) {
    // 保证有正数负数
    let i = 0;
    while (i < size - 2) {
      if (nums[i] > 0) break; // 最左侧大于0，无解
      let first = i + 1;
      let last = size - 1;
      while (first < last) {
        if (nums[i] * nums[last] > 0) break; // 三数同符号，无解
        let sum = nums[i] + nums[first] + nums[last];
        if (sum === 0) {
          res.push([nums[i], nums[first], nums[last]]);
        }
        if (sum <= 0) {
          // 负数过小，first右移
          while (nums[first] === nums[++first]) {} // 重复值跳过
        } else {
          while (nums[last] === nums[--last]) {} // 重复值跳过
        }
      }
      while (nums[i] === nums[++i]) {}
    }
  }
  return res
};
```
:::

::: slot linked-list-cycle1
```js
var hasCycle = function(head) {
    if(!head || !head.next) return false
    let slow = head
    let fast = head.next
    while(slow != fast){
        if(!fast || !fast.next) return false
        fast = fast.next.next
        slow = slow.next
    }
    return true
};
```
:::

::: slot linked-list-cycleII1
```js
var detectCycle = function (head) {
  // 如果链表为空，或者链表只有一个元素且无环，此时指针无法行动，则返回null
  if (!head || !head.next) {
    return null;
  }

  // 创建快慢指针
  let slow = head;
  let fast = head;

  // 如果快指针无法移动，则退出循环
  while (fast && fast.next) {
    // 慢指针走一步，快指针走两步
    slow = slow.next;
    fast = fast.next.next;

    // 如果两个指针的指向相同，则表示已经查找到环。
    // 但两个指针相遇的节点不一定是环的连接点，而是在环的某个位置
    if (slow === fast) {
      break;
    }
  }

  // 前面的退出循环条件有两个，一个是没有找到环，一个是找到了环
  // 通过快慢指针是否相同，判断是否找到环，如果没有，则返回null
  if (slow !== fast) {
    return null;
  }

  // 如果有环，而且快指针的速度是慢指针的两倍。
  // 因此如果创建两个指针，从链表起始点和快慢指针相遇节点分别出发。
  // 两者相遇的节点必然是环的连接点。
  let startNode = head;
  let meetNode = fast;

  // 遍历链表，查找连接点，如果两个指针相等，则表示找到连接点。
  while (startNode !== meetNode) {
    startNode = startNode.next;
    meetNode = meetNode.next;
  }

  return meetNode;
};
```
:::
<algorithm-two-points/>