(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{398:function(n,t,e){"use strict";e.r(t);var s={},o=e(45),_=Object(o.a)(s,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("Content",{attrs:{"slot-key":"move-zero"}}),n._v(" "),e("h4",[n._v("\n    给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。说明:\n    必须在原数组上操作，不能拷贝额外的数组。\n    尽量减少操作次数。\n  ")]),n._v(" "),e("p",[n._v("\n    方法1：非0项直接覆盖到数组前头\n    遍历数组，将非0项覆盖到数组中，从头开始覆盖\n    所有非0项被安排到数组的前头，然后将剩下的项覆盖为0\n    没有通过项的交换，安排了所有的非0项，剩下的就属于0的了\n  ")]),n._v(" "),e("Content",{attrs:{"slot-key":"move-zero1"}}),n._v(" "),e("p",[n._v("\n    方法2：双指针\n    i 、 j 指针初始都指向索引 0\n    i 指针负责扫描整个数组，遇到了非0项，就与 j 指向的项交换，不管它是否为 0\n    因此非 0 项被不断交换到数组的前部， 0 都跑到数组的最右\n  ")]),n._v(" "),e("Content",{attrs:{"slot-key":"move-zero2"}}),n._v(" "),e("p",[n._v("\n    方法3：双指针\n    双指针，i用来遍历数组，j表示最后一个0的下标\n    当i 遇到 0时，i++\n    当i 不是 0 时，j+1,如果j")]),n._v(" "),e("Content",{attrs:{"slot-key":"move-zero3"}}),n._v(" "),e("Content",{attrs:{"slot-key":"container"}}),n._v(" "),e("h4",[n._v("给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。说明：你不能倾斜容器，且 n 的值至少为 2。")]),n._v(" "),e("p",[n._v("\n    根据面积计算规则，面积是由两个柱子的距离和柱子最低高度决定的。所以，一开始前后指针指向第一根柱子和最后一根柱子，计算这两根柱子的面积，此时他们距离是最大的。\n    由于高度收到最低的限制，所以前后指针中高度最低的往中间移动，知道找到比它高的柱子（因为距离在减少，所以只有高度增大才有机会比之前的大），再重新计算面积，并和前面的比较，取最大值。直到前后指针重合\n  ")]),n._v(" "),e("p",[n._v("暴力解法")]),n._v(" "),e("Content",{attrs:{"slot-key":"container1"}}),n._v(" "),e("p",[n._v("双指针法")]),n._v(" "),e("Content",{attrs:{"slot-key":"container2"}}),n._v(" "),e("Content",{attrs:{"slot-key":"three-sum"}}),n._v(" "),e("h4",[n._v("\n    给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。\n    注意：答案中不可以包含重复的三元组。\n    示例：\n    给定数组 nums = [-1, 0, 1, 2, -1, -4]，\n    满足要求的三元组集合为：\n    [\n    [-1, 0, 1],\n    [-1, -1, 2]\n    ]\n  ")]),n._v(" "),e("p",[n._v("暴力求解，时间复杂度是 O(n3)")]),n._v(" "),e("Content",{attrs:{"slot-key":"three-sum1"}}),n._v(" "),e("p",[n._v("双指针+排序")]),n._v(" "),n._m(0),n._v(" "),e("Content",{attrs:{"slot-key":"three-sum2"}}),n._v(" "),n._m(1),n._v(" "),e("Content",{attrs:{"slot-key":"linked-list-cycle"}}),n._v(" "),e("h4",[n._v("\n    给定一个链表，判断链表中是否有环。\n    为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。\n    示例 1：\n    输入：head = [3,2,0,-4], pos = 1\n    输出：true\n    解释：链表中有一个环，其尾部连接到第二个节点。\n  ")]),n._v(" "),e("p",[n._v("快慢指针：定义两个指针一快一慢，如果链表有环，则快慢两指针早晚会相遇，这样就能判断出链表中有环存在。")]),n._v(" "),e("Content",{attrs:{"slot-key":"linked-list-cycle1"}}),n._v(" "),n._m(2),n._v(" "),e("Content",{attrs:{"slot-key":"linked-list-cycleII"}}),n._v(" "),e("h4",[n._v("\n    给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。\n    为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。\n    说明：不允许修改给定的链表。\n    示例 1：\n    输入：head = [3,2,0,-4], pos = 1\n    输出：tail connects to node index 1\n    解释：链表中有一个环，其尾部连接到第二个节点。\n  ")]),n._v(" "),e("p",[n._v("\n    快慢指针：设置快慢两个指针，遍历单链表，快指针一次走两步，慢指针一次走一步，如果单链表中存在环，则快慢指针终会指向同一个节点，否则直到快指针指向 null 时，快慢指针都不可能相遇\n    当他们相遇时，经过验证，此时从head 和 相遇节点，同步前行，能到达环节点\n  ")]),n._v(" "),e("Content",{attrs:{"slot-key":"linked-list-cycleII1"}}),n._v(" "),n._m(3)],1)}),[function(){var n=this.$createElement;return(this._self._c||n)("p",[this._v("\n    特判，对于数组长度 nn，如果数组为 nullnull 或者数组长度小于 33，返回 [][]。\n    对数组进行排序。\n    遍历排序后数组：\n    若 nums[i]>0nums[i]>0：因为已经排序好，所以后面不可能有三个数加和等于 00，直接返回结果。\n    对于重复元素：跳过，避免出现重复解\n    令左指针 L=i+1L=i+1，右指针 R=n-1R=n−1，当 L"),this._v("==0nums[i]+nums[L]+nums[R]==0，执行循环，判断左界和右界是否和下一位置重复，去除重复解。并同时将 L,RL,R 移到下一位置，寻找新的解\n    若和大于 00，说明 nums[R]nums[R] 太大，RR 左移\n    若和小于 00，说明 nums[L]nums[L] 太小，LL 右移\n    复杂度分析\n    时间复杂度：O\\left(n^{2}\\right)O(n\n    2\n    )，数组排序 O(N \\log N)O(NlogN)，遍历数组 O\\left(n\\right)O(n)，双指针遍历 O\\left(n\\right)O(n)，总体 O(N \\log N)+O\\left(n\\right)*O\\left(n\\right)O(NlogN)+O(n)∗O(n)，O\\left(n^{2}\\right)O(n\n    2\n    )\n    空间复杂度：O(1)\n  ")])},function(){var n=this.$createElement,t=this._self._c||n;return t("blockquote",[t("p",[this._v("该题可以用哈希表法解决，具体方法在哈希表章节")])])},function(){var n=this.$createElement,t=this._self._c||n;return t("blockquote",[t("p",[this._v("该题可以用哈希表法解决，具体方法在哈希表章节")])])},function(){var n=this.$createElement,t=this._self._c||n;return t("blockquote",[t("p",[this._v("该题可以用哈希表法解决，具体方法在哈希表章节")])])}],!1,null,"33e6e6fe",null);t.default=_.exports}}]);