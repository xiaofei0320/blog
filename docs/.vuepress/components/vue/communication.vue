<template>
  <div>
    <Content slot-key="title-communication" />
    <h4>组件间通信常用方式</h4>
    <ul>
      <li>
        props
        <p>父组件给子组件传值</p>
        <Content slot-key="code-props" />
      </li>
      <li>
        event
        <p>子组件给父组件传值</p>
        <Content slot-key="code-event" />
      </li>
      <li>
        vuex
        <p>创建唯⼀的全局数据管理者store，通过它管理数据并通知组件状态变更。</p>
      </li>
      <li>
        EventBus
        <p>事件总线：任意两个组件之间传值常⽤事件总线 或 vuex的⽅式。（如果你在某一个页面刷新了之后，与之相关的EventBus会被移除，这样就导致业务走不下去。还要就是如果业务有反复操作的页面，EventBus 在监听的时候就会触发很多次，也是一个非常大的隐患。这时候我们就需要好好处理 EventBus 在项目中的关系。通常会用到，在vue页面销毁时，同时移除EventBus 事件监听）</p>
      </li>
    </ul>
    <h4>边界情况</h4>
    <ul>
      <li>
        $parent
        <p>兄弟组件之间通信可通过共同祖辈搭桥，$parent或$root。</p>
        <Content slot-key="code-parent" />
      </li>
      <li>
        $children
        <p>⽗组件可以通过$children访问⼦组件实现⽗⼦通信。</p>
        <h5>注意：$children不能保证⼦元素顺序</h5>
        <Content slot-key="code-children" />
      </li>
      <li>$root</li>
      <li>
        $refs
        <p>获取⼦节点引⽤</p>
        <Content slot-key="code-refs" />
      </li>
      <li>
        provide/inject
        <p>能够实现祖先和后代之间传值,父组件或者不管多深的组件都可以获取</p>
        <Content slot-key="code-provide" />
      </li>
    </ul>
    <h4>⾮prop特性</h4>
    <ul>
      <li>$attrs</li>
      <li>$listeners</li>
    </ul>
    <p>
      包含了⽗作⽤域中不作为 prop 被识别 (且获取) 的特性绑定 ( class 和 style 除外)。当⼀个组件没有
      声明任何 prop 时，这⾥会包含所有⽗作⽤域的绑定 ( class 和 style 除外)，并且可以通过 v-
      bind="$attrs" 传⼊内部组件——在创建⾼级别的组件时⾮常有⽤。
    </p>
    <Content slot-key="code-attr" />
    <h4>插槽</h4>
    <p>插槽语法是Vue 实现的内容分发 API，⽤于复合组件开发。该技术在通⽤组件库开发中有⼤量应⽤。</p>
    <ul>
      <li>
        匿名插槽
        <Content slot-key="code-slot1" />
      </li>
      <li>
        具名插槽
        <p>将内容分发到⼦组件指定位置</p>
        <Content slot-key="code-slot2" />
      </li>
      <li>
        作用域插槽
        <p>分发内容要⽤到⼦组件中的数据</p>
        <Content slot-key="code-slot3" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>