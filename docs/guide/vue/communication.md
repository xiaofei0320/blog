::: slot title-communication
### Vue的通信方式
:::

::: slot code-props
```js
// child
props: { msg: String }
// parent
<HelloWorld msg="Welcome to Your Vue.js App"/>
```
:::


::: slot code-event
```vue
<template>
// parent
    <Cart @add="cartAdd($event)"></Cart>
</template>
<script>
// child
    this.$emit('add', good)
</script>
```
:::

::: slot code-parent
```js
// brother1
this.$parent.$on('foo', handle)
// brother2
this.$parent.$emit('foo')
this.$root.$emit('foo')
```
:::

::: slot code-children
```js
// parent
this.$children[0].xx = 'xxx'
```
:::

::: slot code-attrs
```vue
<template>
// parent
    <HelloWorld foo="foo"/>
</template>
<script>
// child：并未在props中声明foo
    <p>{{$attrs.foo}}</p>
</script>
```
:::

::: slot code-refs
```vue
<template>
// parent
<HelloWorld ref="hw"/>
</template>
<script>
    mounted() {
        this.$refs.hw.xx = 'xxx'
    }
</script>
```
:::

::: slot code-provide
```js
// ancestor
provide() {
    return {foo: 'foo'}
}
// descendant
inject: ['foo']
```
:::

::: slot code-slot1
```vue
<template>
// comp1
    <div>
        <slot></slot>
    </div>
// parent
    <comp>hello</comp>
</template>
```
:::


::: slot code-slot2
```vue
<template>
// comp2
    <div>
        <slot></slot>
        <slot name="content"></slot>
    </div>
// parent
    <Comp2>
<!-- 默认插槽⽤default做参数 -->
        <template v-slot:default>具名插槽</template>
<!-- 具名插槽⽤插槽名做参数 -->
        <template v-slot:content>内容...</template>
    </Comp2>
</template>
```
:::


::: slot code-slot3
```vue
<template>
// comp3
    <div>
       <slot :foo="foo"></slot>
    </div>
// parent
    <Comp3>
<!-- 把v-slot的值指定为作⽤域上下⽂对象 -->
        <template v-slot:default="slotProps">来⾃⼦组件数据：{{slotProps.foo}}</template>
    </Comp3>
</template>
```
:::

<vue-communication/>