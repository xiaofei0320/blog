::: slot title-create
### KVueRouter类实现
:::

::: slot code-create
```js
import Link from './krouter-link'
import View from './krouter-view'
// 实现一个插件： 挂载$router,声明两个全局组件（router-link，router-view）
// 实现一个kVueRouter类，管理url变化
let Vue

class KVueRouter {
  constructor (options) {
    this.$options = options
    // 设置一个响应式的current属性(内部方法，给一个对象的某个key设置响应式属性)
    Vue.util.defineReactive(this, 'current', '/')
    // 事件监听
    window.addEventListener('hashchange', this.onHashChange.bind(this))
    window.addEventListener('load', this.onHashChange.bind(this))

    // 对路由数组做预处理
    this.routerMap = {}
    this.$options.routes.forEach(route => {
      this.routerMap[route.path] = route
    })
  }

  onHashChange () {
    this.current = window.location.hash.slice(1)
  }
}

KVueRouter.install = function (_Vue) {
  // 保存构造函数
  Vue = _Vue
  // 挂载$router
  // 获取根实例中的router选项
  // 利用全局混入，在beforeCreate钩子里面获取选项
  Vue.mixin({
    beforeCreate () {
      // router选项在根实例中才存在
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router
      }
    }
  })

  Vue.component('router-link', Link)
  Vue.component('router-view', View)
}

export default KVueRouter
```
:::
::: slot title-view
### router-view实现
:::
::: slot code-view
```js
export default {
  render (h) {
    // this指向当前组件实例
    let component = null
    // 动态获取current对应的组件
    const route = this.$router.routerMap[this.$router.current]
    if (route) {
      component = route.component
    }
    return h(component)
  }
}
```
:::
::: slot title-link
### router-link实现
:::
::: slot code-link
```js
// 需要一个to属性
export default {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  render (h) {
  // 渲染结果：<a herf=""></a>
  // 渲染函数三个参数： 标签名称，属性集合，子元素数组
    return h('a', {attrs: {href: '#' + this.to}}, [this.$solts.default])
  }
}
```
:::
<vue-router/>