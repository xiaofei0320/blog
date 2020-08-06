<template>
    <div>
        <Content slot-key="title-index"/>
        <h4>给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。说明:
必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。</h4>
        <p>方法1：非0项直接覆盖到数组前头
遍历数组，将非0项覆盖到数组中，从头开始覆盖
所有非0项被安排到数组的前头，然后将剩下的项覆盖为0
没有通过项的交换，安排了所有的非0项，剩下的就属于0的了
</p>
        <Content slot-key="code-method1"/>
        <p>方法2：双指针
i 、 j 指针初始都指向索引 0
i 指针负责扫描整个数组，遇到了非0项，就与 j 指向的项交换，不管它是否为 0
因此非 0 项被不断交换到数组的前部， 0 都跑到数组的最右
</p>
        <Content slot-key="code-method2"/>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>