::: slot title-list
## 目录结构
:::

::: slot title-install
## 插件实现
:::

::: slot title-VueRouter
## VueRouter实例化
:::

::: slot title-match
## 路由匹配
:::

::: slot title-history
## history实例化
:::

::: slot title-change
## 路径切换
:::

::: slot title-component
## 组件
:::

::: slot title-nav
## 导航守卫
:::

::: slot code-source1
```js
module.exports = [
    {
        file: resolve('dist/vue-router.esm.js'),
        format: 'es'
    }
].map(genConfig)
```
:::

::: slot code-source2
```js
const { exec } = require('child_process')
const fs = require('fs')

let building = false

fs.watch('./src', {
  recursive: true
}, (event, filename) => {
  if (building) {
    return
  } else {
    building = true
    console.log('start: building ...')
    exec('npm run build', (err, stdout, stderr) => {
      if (err) {
        console.log(err)
      } else {
        console.log('end: building: ', stdout)
      }
      building = false
    })
  }
})
```
:::

::: slot code-example
```js
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let a = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'

Vue.use(VueRouter)

const router =  new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

```
:::

::: slot code-example1
```js
@Vue.js
  // use方法接受函数或者对象
  Vue.use = function (plugin: Function | Object) {
    const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }
    // additional parameters
    const args = toArray(arguments, 1)
    // 在参数最前面放入Vue构造函数
    args.unshift(this)
    // 对象形式中必须有install方法，函数形式函数本身是install方法
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args)
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args)
    }
    installedPlugins.push(plugin)
    return this
  }
```
:::

::: slot code-list
```js
├── components  // 两个组件
│   ├── link.js   // route-link的实现
│   └── view.js   // route-view的实现
├── create-matcher.js  // 创建match匹配
├── create-route-map.js  // 创建路由的映射，path列表，path map，name map等
├── history  // 操作浏览器记录的一系列内容，创建hitory类的逻辑
│   ├── abstract.js  // 非浏览器的history
│   ├── base.js    // 基本的history
│   ├── hash.js    // hash模式的history
│   └── html5.js   // html5模式的history
├── index.js   // 入口文件，其中创建了VueRouter这个类
├── install.js  // 插件安装的方法，挂载vue-router插件的逻辑
└── util   // 工具类库
    ├── async.js    // 异步操作的工具库
    ├── dom.js    // dom相关的函数
    ├── location.js     // 对location的处理
    ├── misc.js     // 一个工具方法
    ├── params.js   // 处理参数
    ├── path.js     // 处理路径
    ├── push-state.js  // 处理html模式的 pushState
    ├── query.js  //对query的处理
    ├── resolve-components.js  //异步加载组件
    ├── route.js  // 路由
    ├── scroll.js  //处理滚动
    └── warn.js  // 打印一些警告
```
:::
::: slot code-use
```js
import { install } from './install'
import { inBrowser } from './util/dom'
// ...
export default class VueRouter {}
// ...
// 挂载install；
VueRouter.install = install
// 如果是在浏览器环境且存在 window.Vue 的话就会自动使用插件
if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter)
}
```
:::

::: slot code-install
```js
import View from './components/view';
import Link from './components/link';

// export一个Vue的原因是可以不讲Vue打包进插件中而使用Vue一些方法;
// 只能在install之后才会存在这个Vue的实例;
export let _Vue;

// 插件安装方法
export function install(Vue) {
    // 防止重复安装,如果插件已经安装就return
    if (install.installed && _Vue === Vue) return;
    install.installed = true;

    _Vue = Vue;

    const isDef = v => v !== undefined;

    // 注册实例
    const registerInstance = (vm, callVal) => {
        let i = vm.$options._parentVnode;
        if (
            isDef(i) &&
            isDef((i = i.data)) &&
            isDef((i = i.registerRouteInstance))
        ) {
            i(vm, callVal);
        }
    };

    // 混入生命周期的一些处理
    Vue.mixin({
        beforeCreate() {
            // this.$options.router为VueRouter实例；
            // 这里判断实例是否已经挂载；
            if (isDef(this.$options.router)) {
                // 如果 router 已经定义了，则调用, 将router的根组件指向Vue实例
                this._routerRoot = this;
                this._router = this.$options.router;
                // router初始化，调用VueRouter的init方法；
                this._router.init(this);
                // 使用Vue的defineReactive增加_route的响应式对象
                Vue.util.defineReactive(
                    this,
                    '_route',
                    this._router.history.current
                );
            } else {
                // 将每一个组件的_routerRoot都指向根Vue实例;
                this._routerRoot =
                    (this.$parent && this.$parent._routerRoot) || this;
            }
            // 注册VueComponent 进行Observer处理；
            registerInstance(this, this);
        },
        destroyed() {
            // 注销VueComponent
            registerInstance(this);
        }
    });
    // 为$router和$route定义 << getter >> 分别指向_routerRoot的 _router 和 _route
    // _router 为VueRouter的实例；
    // _route 为一个存储了路由数据的对象；
    // 挂载变量到原型上，劫持$router，getter方法返回的是VueRouter
    Object.defineProperty(Vue.prototype, '$router', {
        get() {
            return this._routerRoot._router;
        }
    });

    // 挂载变量到原型上，劫持$router，getter方法返回的是VueRouter的路由对象
    Object.defineProperty(Vue.prototype, '$route', {
        get() {
            return this._routerRoot._route;
        }
    });

    // 注册router-view和router-link全局组件
    Vue.component('RouterView', View);
    Vue.component('RouterLink', Link);

    // Vue钩子合并策略
    const strats = Vue.config.optionMergeStrategies;
    // use the same hook merging strategy for route hooks
    strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate =
        strats.created;
}
```
:::

::: slot code-init
```js
init (app: any /* Vue component instance */) {
    // vueRouter可能会实例化多次 apps用于存放多个vueRouter实例
    this.apps.push(app)

    // 保证VueRouter只初始化一次，如果初始化了就终止后续逻辑
    if (this.app) {
      return
    }

    // 将vue实例挂载到vueRouter上，router挂载到Vue实例上
    this.app = app

    // history是vueRouter维护的全局变量，很重要
    const history = this.history

    // 针对不同路由模式做不同的处理 transitionTo是history的核心方法，后面再细看
    if (history instanceof HTML5History) {
      history.transitionTo(history.getCurrentLocation())
    } else if (history instanceof HashHistory) {
      const setupHashListener = () => {
        history.setupListeners()
      }
      history.transitionTo(
        history.getCurrentLocation(),
        setupHashListener,
        setupHashListener
      )
    }

    // 路由全局监听，维护当前的route
    // 因为_route在install执行时定义为响应式属性，
    // 当route变更时_route更新，后面的视图更新渲染就是依赖于_route
    history.listen(route => {
      this.apps.forEach((app) => {
        app._route = route
      })
    })
  }

```
:::

::: slot code-VueRouter
```js
import { createMatcher } from './create-matcher'
import { supportsPushState } from './util/push-state'
import { HashHistory } from './history/hash'
import { HTML5History } from './history/html5'
import { AbstractHistory } from './history/abstract'
// ...
export default class VueRouter {
  constructor (options) {
    this.app = null
    this.apps = []
    // VueRouter 配置项；
    this.options = options
    // 三个钩子
    this.beforeHooks = []
    this.resolveHooks = []
    this.afterHooks = []
    // 创建路由匹配实例；传人我们定义的routes：包含path和component的对象；
    this.matcher = createMatcher(options.routes || [], this)
    // 判断模式
    let mode = options.mode || 'hash'
    // 判断浏览器是否支持history，如果不支持则回退到hash模式；对history做降级处理
    this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false
    if (this.fallback) {
      mode = 'hash'
    }
    // node运行环境 mode = 'abstract';
    if (!inBrowser) {
      mode = 'abstract'
    }
    this.mode = mode
    // 根据模式创建对应的history实例
    switch (mode) {
      case 'history':
        this.history = new HTML5History(this, options.base)
        break
      case 'hash':
        this.history = new HashHistory(this, options.base, this.fallback)
        break
      case 'abstract':
        this.history = new AbstractHistory(this, options.base)
        break
      default:
        if (process.env.NODE_ENV !== 'production') {
          assert(false, `invalid mode: ${mode}`)
        }
    }
  }
  // ...
}
```
:::

::: slot code-createMatcher
```js
import VueRouter from './index'
import { resolvePath } from './util/path'
import { assert, warn } from './util/warn'
import { createRoute } from './util/route'
import { fillParams } from './util/params'
import { createRouteMap } from './create-route-map'
import { normalizeLocation } from './util/location'

// routes为我们初始化VueRouter的路由配置；
// router就是我们的VueRouter实例；
export function createMatcher (routes, router) {
  // pathList是根据routes生成的path数组；
  // pathMap是根据path的名称生成的map；
  // 如果我们在路由配置上定义了name，那么就会有这么一个name的Map；
  const { pathList, pathMap, nameMap } = createRouteMap(routes)
  // 根据新的routes生成路由；
  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap)
  }
  // 路由匹配函数；
  function match (raw, currentRoute, redirectedFrom) {
    // 简单讲就是拿出我们path params query等等；
    const location = normalizeLocation(raw, currentRoute, false, router)
    const { name } = location

    if (name) {
      // 如果有name的话，就去name map中去找到这条路由记录；
      const record = nameMap[name]
      if (process.env.NODE_ENV !== 'production') {
        warn(record, `Route with name '${name}' does not exist`)
      }
      // 如果没有这条路由记录就去创建一条路由对象；
      if (!record) return _createRoute(null, location)
      const paramNames = record.regex.keys
        .filter(key => !key.optional)
        .map(key => key.name)

      if (typeof location.params !== 'object') {
        location.params = {}
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (const key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key]
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, `named route "${name}"`)
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {}
      for (let i = 0; i < pathList.length; i++) {
        const path = pathList[i]
        const record = pathMap[path]
        // 根据当前路径进行路由匹配
        // 如果匹配就创建一条路由对象；
        if (matchRoute(record.regex, location.path, location.params)) {
          return _createRoute(record, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }
  
  // ...

  function _createRoute (record, location, redirectedFrom) {
    // 根据不同的条件去创建路由对象；
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match,
    addRoutes
  }
}

function matchRoute (regex, path, params) {
  const m = path.match(regex)

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (let i = 1, len = m.length; i < len; ++i) {
    const key = regex.keys[i - 1]
    const val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i]
    if (key) {
      params[key.name] = val
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}
```
:::

::: slot code-createRouteMap
```js
/* @flow */

import Regexp from 'path-to-regexp'
import { cleanPath } from './util/path'
import { assert, warn } from './util/warn'

export function createRouteMap (routes, oldPathList, oldPathMap, oldNameMap) {
  // the path list is used to control path matching priority
  const pathList = oldPathList || []
  // $flow-disable-line
  const pathMap = oldPathMap || Object.create(null)
  // $flow-disable-line
  const nameMap = oldNameMap || Object.create(null)
  // path列表
  // path的map映射
  // name的map映射
  // 为配置的路由项增加路由记录
  routes.forEach(route => {
    addRouteRecord(pathList, pathMap, nameMap, route)
  })

  // ensure wildcard routes are always at the end
  for (let i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0])
      l--
      i--
    }
  }
  // 返回包含path数组，path map和name map的对象；
  return {
    pathList,
    pathMap,
    nameMap
  }
}

function addRouteRecord (pathList, pathMap, nameMap, route, parent, matchAs) {
  const { path, name } = route
  if (process.env.NODE_ENV !== 'production') {
    assert(path != null, `"path" is required in a route configuration.`)
    assert(
      typeof route.component !== 'string',
      `route config "component" for path: ${String(path || name)} cannot be a ` +
      `string id. Use an actual component instead.`
    )
  }

  // 定义 path 到 Reg 的选项；
  const pathToRegexpOptions: PathToRegexpOptions = route.pathToRegexpOptions || {}
  // 序列化path，'/'将会被替换成'';
  const normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  )

  // 正则匹配是否区分大小写；
  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive
  }

  const record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name,
    parent,
    matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  }
  // 如果有嵌套的子路由，则递归添加路由记录;
  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (process.env.NODE_ENV !== 'production') {
      if (route.name && !route.redirect && route.children.some(child => /^\/?$/.test(child.path))) {
        warn(
          false,
          `Named Route '${route.name}' has a default child route. ` +
          `When navigating to this named route (:to="{name: '${route.name}'"), ` +
          `the default child route will not be rendered. Remove the name from ` +
          `this route and use the name of the default child route for named ` +
          `links instead.`
        )
      }
    }
    route.children.forEach(child => {
      const childMatchAs = matchAs
        ? cleanPath(`${matchAs}/${child.path}`)
        : undefined
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs)
    })
  }

  // 如果路由含有别名，则为其添加别名路由记录
  // 关于alias
  // https://router.vuejs.org/zh-cn/essentials/redirect-and-alias.html
  if (route.alias !== undefined) {
    const aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias]

    aliases.forEach(alias => {
      const aliasRoute = {
        path: alias,
        children: route.children
      }
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      )
    })
  }

  // 更新path map
  if (!pathMap[record.path]) {
    pathList.push(record.path)
    pathMap[record.path] = record
  }
  // 为定义了name的路由更新 name map
  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record
    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
      warn(
        false,
        `Duplicate named routes definition: ` +
        `{ name: "${name}", path: "${record.path}" }`
      )
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  const regex = Regexp(path, [], pathToRegexpOptions)
  if (process.env.NODE_ENV !== 'production') {
    const keys: any = Object.create(null)
    regex.keys.forEach(key => {
      warn(!keys[key.name], `Duplicate param keys in route with path: "${path}"`)
      keys[key.name] = true
    })
  }
  return regex
}

function normalizePath (path, parent, strict): string {
  if (!strict) path = path.replace(/\/$/, '')
  if (path[0] === '/') return path
  if (parent == null) return path
  return cleanPath(`${parent.path}/${path}`)
}

```
:::
::: slot code-RouteRecord
```js
const record: RouteRecord = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name,
    parent,
    matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props:
      route.props == null
        ? {}
        : route.components
          ? route.props
          : { default: route.props }
}
```
:::

::: slot code-addRouteRecord
```js
function addRouteRecord (
  pathList: Array<string>,
  pathMap: Dictionary<RouteRecord>,
  nameMap: Dictionary<RouteRecord>,
  route: RouteConfig,
  parent?: RouteRecord,
  matchAs?: string
) {

  //...
  // 先创建一条路由记录
  const record: RouteRecord = { ... }

  // 如果该路由记录 嵌套路由的话 就循环遍历解析嵌套路由
  if (route.children) {
    // ...
    // 通过递归的方式来深度遍历，并把当前的record作为parent传入
    route.children.forEach(child => {
      const childMatchAs = matchAs
        ? cleanPath(`${matchAs}/${child.path}`)
        : undefined
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs)
    })
  }

  // 如果有多个相同的路径，只有第一个起作用，后面的会被忽略
  // 对解析好的路由进行记录，为pathList、pathMap添加一条记录
  if (!pathMap[record.path]) {
    pathList.push(record.path)
    pathMap[record.path] = record
  }
  // ...
}
```
:::


::: slot code-match
```js
/**
  * 
  * @param {*} raw 是RawLocation类型 是个url字符串或者RawLocation对象
  * @param {*} currentRoute 当前的route
  * @param {*} redirectedFrom 重定向 （不是重要，可忽略）
  */
function match (
  raw: RawLocation,
  currentRoute?: Route,
  redirectedFrom?: Location
): Route {

    // location 是一个对象类似于
    // {"_normalized":true,"path":"/","query":{},"hash":""}
    const location = normalizeLocation(raw, currentRoute, false, router)
    const { name } = location

    // 如果有路由名称 就进行nameMap映射 
    // 获取到路由记录 处理路由params 返回一个_createRoute处理的东西
    if (name) {
      const record = nameMap[name]
      if (process.env.NODE_ENV !== 'production') {
        warn(record, `Route with name '${name}' does not exist`)
      }
      if (!record) return _createRoute(null, location)
      const paramNames = record.regex.keys
        .filter(key => !key.optional)
        .map(key => key.name)

      if (typeof location.params !== 'object') {
        location.params = {}
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (const key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key]
          }
        }
      }

      location.path = fillParams(record.path, location.params, `named route "${name}"`)
      return _createRoute(record, location, redirectedFrom)
    
    // 如果路由配置了 path，到pathList和PathMap里匹配到路由记录 
    // 如果符合matchRoute 就返回_createRoute处理的东西
    } else if (location.path) {
      location.params = {}
      for (let i = 0; i < pathList.length; i++) {
        const path = pathList[i]
        const record = pathMap[path]
        if (matchRoute(record.regex, location.path, location.params)) {
          return _createRoute(record, location, redirectedFrom)
        }
      }
    }
    // 通过_createRoute返回一个东西
    return _createRoute(null, location)
}
```
:::

::: slot code-_createRoute
```js
function _createRoute (
    record: ?RouteRecord,
    location: Location,
    redirectedFrom?: Location
  ): Route {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
}
```
:::

::: slot code-createRoute
```js
/**
 * 
 * @param {*} record 一般为null
 * @param {*} location 路由对象
 * @param {*} redirectedFrom 重定向
 * @param {*} router vueRouter实例
 */
export function createRoute (
  record: ?RouteRecord,
  location: Location,
  redirectedFrom?: ?Location,
  router?: VueRouter
): Route {
  const stringifyQuery = router && router.options.stringifyQuery

  let query: any = location.query || {}
  try {
    query = clone(query)
  } catch (e) {}

  const route: Route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery),
    matched: record ? formatMatch(record) : []
  }
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery)
  }
  // 冻结route 一旦创建不可改变
  return Object.freeze(route)
}
```
:::

::: slot code-formatMatch
```js
function formatMatch (record: ?RouteRecord): Array<RouteRecord> {
  const res = []
  while (record) {
    res.unshift(record)
    record = record.parent
  }
  return res
}
```
:::

::: slot code-transitionTo
```js
transitionTo (location, onComplete, onAbort) {
    // localtion为我们当前页面的路由；
    // 调用VueRouter的match方法获取匹配的路由对象，创建下一个状态的路由对象；
    // this.current是我们保存的当前状态的路由对象；
    const route = this.router.match(location, this.current)
    this.confirmTransition(route, () => {
      // 更新当前的route对象；
      this.updateRoute(route)
      onComplete && onComplete(route)
      // 调用子类的方法更新url
      this.ensureURL()
      // fire ready cbs once
      // 调用成功后的ready的回调函数；
      if (!this.ready) {
        this.ready = true
        this.readyCbs.forEach(cb => { cb(route) })
      }
    }, err => {
      if (onAbort) {
        onAbort(err)
      }
      // 调用失败的err回调函数；
      if (err && !this.ready) {
        this.ready = true
        this.readyErrorCbs.forEach(cb => { cb(err) })
      }
    })
  }
```
:::


::: slot code-confirmTransition
```js
confirmTransition (route: Route, onComplete: Function, onAbort?: Function) {
    const current = this.current
    const abort = err => {
      // ...
      onAbort && onAbort(err)
    }
    
    // 如果当前路由和之前路由相同 确认url 直接return
    if (
      isSameRoute(route, current) &&
      route.matched.length === current.matched.length
    ) {
      this.ensureURL()
      return abort(new NavigationDuplicated(route))
    }

    // 通过异步队列来交叉对比当前路由的路由记录和现在的这个路由的路由记录 
    // 为了能准确得到父子路由更新的情况下可以确切的知道 哪些组件需要更新 哪些不需要更新
    const { updated, deactivated, activated } = resolveQueue(
      this.current.matched,
      route.matched
    )

    // 在异步队列中执行响应的勾子函数
    // 通过 queue 这个数组保存相应的路由钩子函数
    const queue: Array<?NavigationGuard> = [].concat(
      // leave 的勾子
      extractLeaveGuards(deactivated),
      // 全局的 before 的勾子
      this.router.beforeHooks,
      // in-component update hooks
      extractUpdateHooks(updated),
      // 将要更新的路由的 beforeEnter勾子
      activated.map(m => m.beforeEnter),
      // 异步组件
      resolveAsyncComponents(activated)
    )

    this.pending = route

    // 队列执行的iterator函数 
    const iterator = (hook: NavigationGuard, next) => {
      if (this.pending !== route) {
        return abort()
      }
      try {
        hook(route, current, (to: any) => {
          if (to === false || isError(to)) {
            // next(false) -> abort navigation, ensure current URL
            this.ensureURL(true)
            abort(to)
          } else if (
            typeof to === 'string' ||
            (typeof to === 'object' &&
              (typeof to.path === 'string' || typeof to.name === 'string'))
          ) {
            // next('/') or next({ path: '/' }) -> redirect
            abort()
            if (typeof to === 'object' && to.replace) {
              this.replace(to)
            } else {
              this.push(to)
            }
          } else {
            // confirm transition and pass on the value
            // 如果有导航钩子，就需要调用next()，否则回调不执行，导航将无法继续
            next(to)
          }
        })
      } catch (e) {
        abort(e)
      }
    }

    // runQueue 执行队列 以一种递归回调的方式来启动异步函数队列的执行
    runQueue(queue, iterator, () => {
      const postEnterCbs = []
      const isValid = () => this.current === route

      // 组件内的钩子
      const enterGuards = extractEnterGuards(activated, postEnterCbs, isValid)
      const queue = enterGuards.concat(this.router.resolveHooks)
      // 在上次的队列执行完成后再执行组件内的钩子
      // 因为需要等异步组件以及是否OK的情况下才能执行
      runQueue(queue, iterator, () => {
        // 确保期间还是当前路由
        if (this.pending !== route) {
          return abort()
        }
        this.pending = null
        onComplete(route)
        if (this.router.app) {
          this.router.app.$nextTick(() => {
            postEnterCbs.forEach(cb => {
              cb()
            })
          })
        }
      })
    })
}
```
:::

::: slot code-History
```js

export class History {
  constructor (router: Router, base: ?string) {
    this.router = router
    // normalizeBase会对base路径做出格式化的处理，会为base开头自动添加‘/’，删除结尾的‘/’，默认返回’/‘
    this.base = normalizeBase(base)
    // 初始化的当前route路由对象
    this.current = START
    this.pending = null
    this.ready = false
    this.readyCbs = []
    this.readyErrorCbs = []
    this.errorCbs = []
  }
}

export const START = createRoute(null, {
  path: '/'
})


function normalizeBase (base: ?string): string {
  if (!base) {
    // inBrowser判断是否为浏览器环境
    if (inBrowser) {
      const baseEl = document.querySelector('base')
      base = (baseEl && baseEl.getAttribute('href')) || '/'
      base = base.replace(/^https?:\/\/[^\/]+/, '')
    } else {
      base = '/'
    }
  }
  if (base.charAt(0) !== '/') {
    base = '/' + base
  }
  return base.replace(/\/$/, '')
}


listen (cb: Function) {
  this.cb = cb
}   
```
:::




::: slot code-HashHistory
```js

export class HashHistory extends History {
  constructor (router: Router, base: ?string, fallback: boolean) {
    super(router, base)
    // 如果是回退hash的情况，并且判断当前路径是否有/#/。如果没有将会添加'/#/'
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash()
  }
}


// 检查url是否包含‘/#/’
function checkFallback (base) {
  // 获取hash值
  const location = getLocation(base)
  // 如果location不是以/#，开头。添加/#，使用window.location.replace替换文档
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    )
    return true
  }
}

// 返回hash
export function getLocation (base) {
  let path = decodeURI(window.location.pathname)
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length)
  }
  return (path || '/') + window.location.search + window.location.hash
}


// 删除 //, 替换为 /
export function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}


function ensureSlash (): boolean {
  // 判断是否包含#，并获取hash值。如果url没有#，则返回‘’
  const path = getHash()
  // 判断path是否以/开头
  if (path.charAt(0) === '/') {
    return true
  }
  // 如果开头不是‘/’, 则添加/
  replaceHash('/' + path)
  return false
}

// 获取“#”后面的hash
export function getHash (): string {
  const href = window.location.href
  const index = href.indexOf('#')
  return index === -1 ? '' : decodeURI(href.slice(index + 1))
}

function replaceHash (path) {
  // supportsPushState判断是否存在history的API
  // 使用replaceState或者window.location.replace替换文档
  // getUrl获取完整的url
  if (supportsPushState) {
    replaceState(getUrl(path))
  } else {
    window.location.replace(getUrl(path))
  }
}

// getUrl返回了完整了路径，并且会添加#, 确保存在/#/
function getUrl (path) {
  const href = window.location.href
  const i = href.indexOf('#')
  const base = i >= 0 ? href.slice(0, i) : href
  return `${base}#${path}`
}


export function replaceState (url?: string) {
  pushState(url, true)
}

export function pushState (url?: string, replace?: boolean) {
  // 记录当前的x轴和y轴，以发生导航的时间为key，位置信息记录在positionStore中
  saveScrollPosition()
  const history = window.history
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url)
    } else {
      _key = genKey()
      history.pushState({ key: _key }, '', url)
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url)
  }
}
```
:::


::: slot code-push
```js

push (location, onComplete, onAbort) {
  const { current: fromRoute } = this
  this.transitionTo(
    location,
    route => {
      pushHash(route.fullPath)
      handleScroll(this.router, route, fromRoute, false)
      onComplete && onComplete(route)
    },
    onAbort
  )
}

replace (location, onComplete, onAbort) {
  const { current: fromRoute } = this
  this.transitionTo(
    location,
    route => {
      replaceHash(route.fullPath)
      handleScroll(this.router, route, fromRoute, false)
      onComplete && onComplete(route)
    },
    onAbort
  )
}
```
:::


::: slot code-extractLeaveGuards
```js

// 返回每一个组件中导航的集合
function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractGuards (
  records,
  name,
  bind,
  reverse?
) {
  const guards = flatMapComponents(
    records,
    // def为组件
    // instance为组件的实例
    (def, instance, match, key) => {
      // 返回每一个组件中定义的路由守卫
      const guard = extractGuard(def, name)
      if (guard) {
        // bindGuard函数确保了guard（路由守卫）的this指向的是Component中的实例
        return Array.isArray(guard)
          ? guard.map(guard => bind(guard, instance, match, key))
          : bind(guard, instance, match, key)
      }
    }
  )
  // 返回导航的集合
  return flatten(reverse ? guards.reverse() : guards)
}

export function flatMapComponents (
  matched,
  fn
) {
  // 遍历matched，并返回matched中每一个route中的每一个Component
  return flatten(matched.map(m => {
    // 如果没有设置components则默认是components{ default: YouComponent }，可以从addRouteRecord函数中看到
    // 将每一个matched中所有的component传入fn中
    // m.components[key]为components中的key键对应的组件
    // m.instances[key]为组件的实例，这个属性是在routerview组件中beforecreated中被赋值的
    return Object.keys(m.components).map(key => fn(
      m.components[key],
      m.instances[key],
      m,
      key
    ))
  }))
}

// 返回一个新数组
export function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

// 获取组件中的属性
function extractGuard (def, key) {
  if (typeof def !== 'function') {
    def = _Vue.extend(def)
  }
  return def.options[key]
}

// 修正函数的this指向
function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}
```
:::


::: slot code-runQueue
```js
// 执行各种钩子队列
    runQueue(queue, iterator, () => {
      const postEnterCbs = []
      const isValid = () => this.current === route
      // wait until async components are resolved before
      // extracting in-component enter guards
      // 等待异步组件 OK 时，执行组件内的钩子
      const enterGuards = extractEnterGuards(activated, postEnterCbs, isValid)
      const queue = enterGuards.concat(this.router.resolveHooks)
      // 在上次的队列执行完成后再执行组件内的钩子
      // 因为需要等异步组件以及是OK的情况下才能执行
      runQueue(queue, iterator, () => {
        if (this.pending !== route) {
          return abort()
        }
        // 路由过渡完成
        this.pending = null
        onComplete(route)
        if (this.router.app) {
          this.router.app.$nextTick(() => {
            postEnterCbs.forEach(cb => { cb() })
          })
        }
      })
```
:::


::: slot code-updateRoute
```js
updateRoute (route: Route) {
  const prev = this.current
  this.current = route
  this.cb && this.cb(route)
  // 执行after的钩子
  this.router.afterHooks.forEach(hook => {
    hook && hook(route, prev)
  })
}
```
:::

::: slot code-RouterView
```js
import { warn } from '../util/warn'

export default {
  name: 'RouterView',
  functional: true,
  props: {
    // 试图名称，默认是default
    name: {
      type: String,
      default: 'default'
    }
  },
  render (_, { props, children, parent, data }) {
    data.routerView = true
    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    // 渲染函数
    const h = parent.$createElement
    const name = props.name
    // 拿到_route对象和缓存对象；
    const route = parent.$route
    const cache = parent._routerViewCache || (parent._routerViewCache = {})
    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    // 组件层级
    // 当 _routerRoot 指向 Vue 实例时就终止循环
    let depth = 0
    let inactive = false
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++
      }
      // 处理 keep-alive 组件
      if (parent._inactive) {
        inactive = true
      }
      parent = parent.$parent
    }
    data.routerViewDepth = depth

    // render previous view if the tree is inactive and kept-alive
    // 渲染缓存的 keep-alive 组件
    if (inactive) {
      return h(cache[name], data, children)
    }
    const matched = route.matched[depth]
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null
      return h()
    }
    const component = cache[name] = matched.components[name]
    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    // 添加注册钩子, 钩子会被注入到组件的生命周期钩子中
    // 在 src/install.js, 会在 beforeCreate 钩子中调用
    data.registerRouteInstance = (vm, val) => {
      // val could be undefined for unregistration
      const current = matched.instances[name]
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val
      }
    }
    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = (_, vnode) => {
      matched.instances[name] = vnode.componentInstance
    }
    // resolve props
    let propsToPass = data.props = resolveProps(route, matched.props && matched.props[name])
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass)
      // pass non-declared props as attrs
      const attrs = data.attrs = data.attrs || {}
      for (const key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key]
          delete propsToPass[key]
        }
      }
    }

    return h(component, data, children)
  }
}

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false,
          `props in "${route.path}" is a ${typeof config}, ` +
          `expecting an object, function or boolean.`
        )
      }
  }
}

function extend (to, from) {
  for (const key in from) {
    to[key] = from[key]
  }
  return to
}
```
:::

::: slot code-RouterLink
```js
/* @flow */

import { createRoute, isSameRoute, isIncludedRoute } from '../util/route'
import { _Vue } from '../install'

// work around weird flow bug
const toTypes: Array<Function> = [String, Object]
const eventTypes: Array<Function> = [String, Array]

export default {
  name: 'RouterLink',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render (h: Function) {
    // 获取挂载的VueRouter实例
    const router = this.$router
    // 获取当前的路由对象
    const current = this.$route
    // 获取当前匹配的路由信息
    const { location, route, href } = router.resolve(this.to, current, this.append)

    const classes = {}
    const globalActiveClass = router.options.linkActiveClass
    const globalExactActiveClass = router.options.linkExactActiveClass
    // Support global empty active class
    const activeClassFallback = globalActiveClass == null
      ? 'router-link-active'
      : globalActiveClass
    const exactActiveClassFallback = globalExactActiveClass == null
      ? 'router-link-exact-active'
      : globalExactActiveClass
    const activeClass = this.activeClass == null
      ? activeClassFallback
      : this.activeClass
    const exactActiveClass = this.exactActiveClass == null
      ? exactActiveClassFallback
      : this.exactActiveClass
    const compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route

    classes[exactActiveClass] = isSameRoute(current, compareTarget)
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget)

    const handler = e => {
      if (guardEvent(e)) {
        if (this.replace) {
          router.replace(location)
        } else {
          router.push(location)
        }
      }
    }
    
    // 事件绑定
    const on = { click: guardEvent }
    if (Array.isArray(this.event)) {
      this.event.forEach(e => { on[e] = handler })
    } else {
      on[this.event] = handler
    }

    const data: any = {
      class: classes
    }

    if (this.tag === 'a') {
      data.on = on
      data.attrs = { href }
    } else {
      // find the first <a> child and apply listener and href
      // 找到第一个 <a> 给予这个元素事件绑定和href属性
      const a = findAnchor(this.$slots.default)
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false
        const extend = _Vue.util.extend
        const aData = a.data = extend({}, a.data)
        aData.on = on
        const aAttrs = a.data.attrs = extend({}, a.data.attrs)
        aAttrs.href = href
      } else {
        // doesn't have <a> child, apply listener to self
        // 没有 <a> 的话就给当前元素自身绑定事件
        data.on = on
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
}

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return
  // don't redirect when preventDefault called
  if (e.defaultPrevented) return
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) return
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    const target = e.currentTarget.getAttribute('target')
    if (/\b_blank\b/i.test(target)) return
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault()
  }
  return true
}

function findAnchor (children) {
  if (children) {
    let child
    for (let i = 0; i < children.length; i++) {
      child = children[i]
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}
```
:::
<vue-routerSource/>