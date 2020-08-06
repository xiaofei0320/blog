::: slot title-for
## v-for与v-if
:::

::: slot code-for
```js
export function genElement (el: ASTElement, state: CodegenState): string {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre
  }

  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)  // 先判断staticRoot
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)  // 再判断v-once
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)  // 判断v-for
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)  // 判断v-if
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    let code
    if (el.component) {
      code = genComponent(el.component, el, state)
    } else {
      let data
      if (!el.plain || (el.pre && state.maybeComponent(el))) {
        data = genData(el, state)
      }

      const children = el.inlineTemplate ? null : genChildren(el, state, true)
      code = `_c('${el.tag}'${
        data ? `,${data}` : '' // data
      }${
        children ? `,${children}` : '' // children
      })`
    }
    // module transforms
    for (let i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code)
    }
    return code
  }
}
```
:::
::: slot code-render
```js
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "home" },
    _vm._l(_vm.children, function(child) {  //_l是列表循环函数
      return _vm.isFolder   // 每循环一次return一次，return时判断isFolder，可见同级v-if是设置在子元素中的
        ? _c("p", { key: child }, [_vm._v(_vm._s(child.title))])
        : _vm._e()
    }),
    0
  )
}
```
:::
::: slot code-isRender
```js
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "home" },
    [
      _vm.isFolder // 先判断isFolder
        ? _vm._l(_vm.children, function(child) {
            return _c("p", { key: child }, [_vm._v(_vm._s(child.title))])
          })
        : _vm._e()
    ],
    2
  )
}
```
:::
::: slot code-demo
```vue
<template>
  <div class="home">
    <p v-if="isFolder" v-for="child in children" :key="child">{{ child.title }}</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      children: [
        { title: 'foo' },
        { title: 'bar' }
      ]
    }
  },
  computed: {
    isFolder() {
      return this.children && this.children.length > 0
    }
  },
}
</script>
```
:::
::: slot code-isdemo
```vue
<template v-if="isFolder">
    <p v-for="child in children" :key="child">{{ child.title }}</p>
</template>
```
:::

::: slot title-data
## vue组件中data必须是函数
:::

::: slot title-key
## vue中的key
:::

::: slot code-key
```vue
<template v-if="isFolder">
    <div id="demo">
        <p v-for="item in items" :key="item">{{item}}</p>
    </div>
</template>

<script>
// 创建实例
const app = new Vue({
el: '#demo',
data: { items: ['a', 'b', 'c', 'd', 'e'] },
mounted () {
setTimeout(() => {
this.items.splice(2, 0, 'f')
}, 2000);
},
});
</script>
```
:::

::: slot title-diff
## Vue中的diff算法
:::

::: slot title-component
## vue组件化
:::

::: slot code-component
```js
export function initAssetRegisters (Vue: GlobalAPI) {
  /**
   * Create asset registration methods.
   */
  //ASSET_TYPES ['component', 'filter', 'directive']
  ASSET_TYPES.forEach(type => {
    Vue[type] = function (
      id: string,
      definition: Function | Object
    ): Function | Object | void {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production' && type === 'component') {
          validateComponentName(id)
        }
        // def是对象
        if (type === 'component' && isPlainObject(definition)) {
            // 定义组件name
          definition.name = definition.name || id
          // extend创建组件构造函数，def变成了构造函数
          definition = this.options._base.extend(definition)
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition }
        }
        // 注册this.options[component][comp] = Ctor
        this.options[type + 's'][id] = definition
        return definition
      }
    }
  })
}

export function initExtend(Vue: GlobalAPI) {
    Vue.cid = 0
    let cid = 1
    Vue.extend = function (extendOptions: Object): Function {
        extendOptions = extendOptions || {}
        const Super = this
        const SuperId = Super.cid
        const cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {})
        if (cachedCtors[SuperId]) {
            return cachedCtors[SuperId]
        }

        const name = extendOptions.name || Super.options.name
        if (process.env.NODE_ENV !== 'production' && name) {
            validateComponentName(name)
        }
        // 创建一个VueComponent类
        const Sub = function VueComponent(options) {
            this._init(options)
        }
        // 继承于Vue
        Sub.prototype = Object.create(Super.prototype)
        Sub.prototype.constructor = Sub
        Sub.cid = cid++
        // 选项合并
        Sub.options = mergeOptions(
            Super.options,
            extendOptions
        )
        Sub['super'] = Super
        if (Sub.options.props) {
            initProps(Sub)
        }
        if (Sub.options.computed) {
            initComputed(Sub)
        }

        // allow further extension/mixin/plugin usage
        Sub.extend = Super.extend
        Sub.mixin = Super.mixin
        Sub.use = Super.use
        ASSET_TYPES.forEach(function (type) {
            Sub[type] = Super[type]
        })
        // enable recursive self-lookup
        if (name) {
            Sub.options.components[name] = Sub
        }
        Sub.superOptions = Super.options
        Sub.extendOptions = extendOptions
        Sub.sealedOptions = extend({}, Sub.options)

        // cache constructor
        cachedCtors[SuperId] = Sub
        return Sub
    }
}
```
:::

::: slot title-Vue
## vue设计原则
:::

::: slot title-MVVM
## MVC、MVP、MVVM
:::

::: slot title-youhua
## Vue性能优化
:::

::: slot title-vue3
## Vue3.0新特性
:::
::: slot title-vuex
vuex 使用及其理解
:::
<vue-about/>