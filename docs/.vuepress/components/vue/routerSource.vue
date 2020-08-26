<template>
  <div>
    <h3>下载源码</h3>
    <ul>
      <li>在github下载好 vue-router 源码，安装好依赖。</li>
      <li>找到 build/config.js 修改 module.exports，只保留 es，其它的注释。</li>
      <Content slot-key="code-source1" />
      <li>在根目录下创建一个 auto-running.js 文件，用于监听src文件的改变的脚本，监听到vue-router 源码变更就从新构建vue-router执行 node auto-running.js 命令。auto-running.js的代码如下：</li>
      <Content slot-key="code-source2" />
      <li>执行 npm run dev命令，将 vue-router 跑起来</li>
    </ul>
    <h3>前置基础知识</h3>
    <p>我们在学习VueRouter源码前，先来复习下hash以及histroy相关的知识。更多细节请参考mdn文档，本节内容节选自mdn文档。</p>
    <h4>hash</h4>
    <p>onhashchange:当URL的片段标识符更改时，将触发hashchange事件 (跟在＃符号后面的URL部分，包括＃符号)。注意 histroy.pushState() 绝对不会触发 hashchange 事件，即使新的URL与旧的URL仅哈希不同也是如此。</p>
    <h4>histroy</h4>
    <p>pushState()需要三个参数: 一个状态对象, 一个标题(目前被忽略), 和一个URL</p>
    <ul>
      <li>state, 状态对象state是一个JavaScript对象，popstate事件触发时，该对象会传入回调函数</li>
      <li>title, 目前所有浏览器忽略</li>
      <li>url, 新的url记录</li>
    </ul>
    <p>replaceState:history.replaceState()的使用与history.pushState()非常相似，区别在于replaceState()是修改了当前的历史记录项而不是新建一个。</p>
    <p>onpopstate:调用history.pushState()或者history.replaceState()不会触发popstate事件. popstate事件只会在浏览器某些行为下触发, 比如点击后退、前进按钮(或者在JavaScript中调用history.back()、history.forward()、history.go()方法)。</p>
    <p>如果当前处于激活状态的历史记录条目是由history.pushState()方法创建, 或者由history.replaceState()方法修改过的, 则popstate事件对象的state属性包含了这个历史记录条目的state对象的一个拷贝。</p>
    <Content slot-key="title-list" />
    <Content slot-key="code-list" />
    <h3>剖析运行流程</h3>
    <p>根据源码的结构和自己的理解事先画好了一张流程图，乍一看这张运行流程图可能会有点蒙圈，接下来会现根据这张图分析下运行流程，然后再一步一步的剖析源码的核心部分。</p>
    <img :src="$withBase('/vue/router2.jpg')" />
    <p>为了便于我们理解这张运行流程图，我们将挂载完vue-router的Vue实例打印出来看看都增加了什么东西：</p>
    <img :src="$withBase('/vue/router1.jpg')" />
    <img :src="$withBase('/vue/router3.jpg')" />
    <ul>
      <li>$options下的router对象很好理解，这个就是我们在实例化Vue的时候挂载的那个vue-router实例；</li>
      <li>_route是一个响应式的路由route对象，这个对象会存储我们路由信息，它是通过Vue提供的Vue.util.defineReactive来实现响应式的，下面的get和set便是对它进行的数据劫持</li>
      <li>_router存储的就是我们从$options中拿到的vue-router对象</li>
      <li>_routerRoot指向我们的Vue根节点</li>
      <li>_routerViewCache是我们对View的缓存</li>
      <li>$route和$router是定义在Vue.prototype上的两个getter。前者指向_routerRoot下的_route，后者指向_routerRoot下的_router</li>
    </ul>
    <p>接下来让我们顺顺这个“眼花缭乱的图”，以便于我们后面更好的理解之后的源码分析。</p>
    <p>首先我们根据Vue的插件机制安装了vue-router，这里其实做的很简单，总结起来就是封装了一个mixin，定义了两个'原型'，注册了两个组件。在这个mixin中，beforeCreate钩子被调用然后判断vue-router是否实例化了并初始化路由相关逻辑，前文提到的_routerRoot、_router、_route便是在此时被定义的。定义了两个“原型”是指在Vue.prototype上定一个两个getter，也就$route和$router。注册了两个组件是指在这里注册了我们后续会用到的RouterView和RouterLink这两个组件。</p>
    <p>然后我们创建了一个VueRouter的实例，并将它挂载在Vue的实例上，这时候VueRouter的实例中的constructor初始化了各种钩子队列；初始化了matcher用于做我们的路由匹配逻辑并创建路由对象；初始化了history来执行过渡逻辑并执行钩子队列。</p>
    <p>接下里mixin中beforeCreate做的另一件事就是执行了我们VueRouter实例的init()方法执行初始化，这一套流程和我们点击RouteLink或者函数式控制路由的流程类似，这里我就一起说了。在init方法中调用了history对象的transitionTo方法，然后去通过match获取当前路由匹配的数据并创建了一个新的路由对象route，接下来拿着这个route对象去执行confirmTransition方法去执行钩子队列中的事件，最后通过updateRoute更新存储当前路由数据的对象current，指向我们刚才创建的路由对象route。</p>
    <p>最开始的时候我们说过_route被定义成了响应式的 那么一个路由更新之后，_route对象会接收到响应并通知RouteView去更新视图。</p>
    <p>到此，流程就结束了，接下来我们将深入vue-router的源码去深度学习其原理。</p>
    <h3>从示例开始</h3>
    <p>下面是官方给出的示例basic，清晰的介绍了VueRouter最基本使用方法：</p>
    <Content slot-key="code-example" />
    <p>
      上面代码就可以构成最简单的Vue-router示例， vue-router 是作为插件集成到 vue 中的。当然创建好的router还需要加入Vue的option中。
      可以发现一切的开始在于Vue.use(VueRouter)，use之后，直接使用Vue-router里面的api就好了。看看Vue里面use的用法：
    </p>
    <Content slot-key="code-example1" />
    <p>
      在Vue.js里面不难发现，use方法主要功能就是执行插件，若有install方法就执行install，并在将该插件push到内部变量_installedPlugins数组里面；而Vue-router的index.js文件里面VueRouter.install = install，install变量从install.js文件导入，所以Vue.use(VueRouter)，相当于执行了install.js导出的install方法。
      再看看install方法都做了些什么
    </p>
    <Content slot-key="title-install" />
    <h4>Vue.js 要求插件应该有一个公开方法 install。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象。</h4>
    <p>先将目光移入源码的入口文件，发现index.js中引入了install模块，并在VueRouter类上挂载了一个静态的install方法。而且还判断了环境中如果已经挂载了Vue则自动去使用这个插件。</p>
    <Content slot-key="code-use" />
    <p>接下来看install.js这个文件，这个文件导出了export方法以供Vue.use去安装</p>
    <p>在 install 方法里面，便可以做相关的处理：</p>
    <ul>
      <li>添加全局方法或者属性_routerRoot, 指向了Vue的实例，_router, 指向了VueRouter的实例</li>
      <li>通过全局 mixin 方法添加一些组件选项，全局注册了RouterView, RouterLink组件</li>
      <li>
        添加 Vue 实例方法，通过把它们添加到 Vue.prototype 上实现。$router, 当前Router的实例
        ，$route, 当前Router的信息
      </li>
    </ul>
    <Content slot-key="code-install" />
    <ul>
      <li>导出一个Vue引用：这是为了不用将整个Vue打包进去就可以使用Vue提供的一些API，当然，这些的前提就是vue-router必须被安装挂载；</li>
      <li>registerInstance方法是专门针对router-view组件，分析router-view组件的时候会介绍到。</li>
      <li>
        VueRouter安装的核心是通过 mixin为每个组件都添加beforeCreate钩子和destroyed钩子,在beforeCreate钩子函数中，定义了私有属性_routerRoot 和 _router
        <ul>
          <li>_routerRoot: 指向了Vue的实例,将Vue实例赋值给_routerRoot，相当于把Vue跟实例挂载到每个组件的_routerRoot的属性上，通过 $parent._routerRoot 的方式，让所有组件都能拥有_routerRoot始终指向根Vue实例。</li>
          <li>_router：指向了VueRouter的实例,通过 this.$options.router方式，让每个vue组件都能拿到VueRouter实例</li>
        </ul>
      </li>
      <li>beforeCreate里面只有Vue实例化的时候才会进入true语句里面(router选项是配置在Vue对象里面)</li>
      <li>其他的组件创建时候this.$options没有router对象，只有this.$options.parent才有router对象</li>
      <li>Vue.util.defineReactive,Vue里面观察者劫持数据的方法，劫持_route，当_route触发setter方法的时候，则会通知到依赖的组件。而RouterView, 需要访问parent.$route所以形成了依赖。this._router.init(this) 初始化了router，init方法在 src/index.js中，init方法很重要，后面介绍。</li>
      <li>
        在Vue.prototype上定义两个对象属性 $router 和 $route：Vue的组件都是Vue实例的一个扩展，所有组件实例上都可以访问prototype上的方法和属性this.$router 和 this.$route；只读，不可修改,
        <ul>
          <li>this.$router 是当前Router的路由实例，对外暴露了像this.$router.push、this.$router.replace等很多api方法，</li>
          <li>this.$route 是当前Router的信息,包含了当前路由的所有信息。</li>
        </ul>
      </li>
      <li>后面通过 Vue.component 方法定义了全局的 router-link 和 router-view 两个组件。router-link类似于a标签，router-view 是路由出口，在 router-view切换路由渲染不同Vue组件。</li>
      <li>最后定义了路由守卫的合并策略，采用了Vue的合并策略。</li>
    </ul>
    <Content slot-key="title-VueRouter" />
    <p>接下来我们来看VueRouter类的实例化，在constructor中主要做的就两件事，创建matcher和创建history：</p>
    <Content slot-key="code-VueRouter" />
    <p>判断是否支持 history ， 然后根据 fallback 来确定是否要降级。constructor 的 options 是实例化路由时的传参，通常是一个对象 {routes, mode: 'history'}, routes是必传参数，mode默认是hash模式。根据不同的 mode ， 分别实例化不同的 history 。 （HTML5History、HashHistory、AbstractHistory）。</p>
    <Content slot-key="title-match" />
    <Content slot-key="code-createMatcher" />
    <p>createMatcher 接收2个参数，routes 是用户定义的路由配置，router 是 new VueRouter 返回的实例。routes 是一个定义了路由配置的数组，通过 createRouteMap 函数处理为 pathList, pathMap, nameMap，有对应关系的map,createMatcher函数返回了一个对象 {match, addRoutes} 。也就是说 matcher 是一个对象，它对外暴露了 match 和 addRoutes 方法。addRoutes会就是添加路由的方法。</p>
    <p>一会我们先了解下 pathList, pathMap, nameMap分别是什么，稍后在来看createRouteMap的实现。</p>
    <ul>
      <li>pathList：路由路径数组，存储所有的path</li>
      <li>pathMap：路由路径与路由记录的映射表，表示一个path到RouteRecord的映射关系</li>
      <li>nameMap：路由名称与路由记录的映射表，表示name到RouteRecord的映射关系</li>
    </ul>
    <h4>RouteRecord</h4>
    <Content slot-key="code-RouteRecord" />
    <p>RouteRecord 是一个对象，包含了一条路由的所有信息: 路径、路由正则、路径对应的组件数组、组件实例、路由名称等等。</p>
    <h4>createRouteMap</h4>
    <Content slot-key="code-createRouteMap" />
    <p>createRouteMap 函数主要是把用户的路由匹配转换成一张路由映射表，后面路由切换就是依据这几个映射表。routes 为每一个 route 执行 addRouteRecord 方法生成一条记录，记录在上面展示过了，我们来看看是如何生成一条记录的。</p>
    <h4>addRouteRecord</h4>
    <Content slot-key="code-addRouteRecord" />
    <p>addRouteRecord 函数，先创建一条路由记录对象。如果当前的路由记录有嵌套路由的话，就循环遍历继续创建路由记录，并按照路径和路由名称进行路由记录映射。这样所有的路由记录都被记录了。整个RouteRecord就是一个树型结构，其中 parent 表示父的 RouteRecord。</p>
    <p>如果我们在路由配置中设置了 name，会给 nameMap添加一条记录。createRouteMap 方法执行后，我们就可以得到路由的完整记录，并且得到path、name对应的路由映射。通过path 和 name 能在 pathMap 和 nameMap快速查到对应的 RouteRecord。</p>
    <p>还记得 createMatcher 的返回值中有个 match，接下里我们看 match的实现。</p>
    <h4>match</h4>
    <Content slot-key="code-match" />
    <p>match 方法接收路径、但前路由、重定向，主要是根据传入的raw 和 currentRoute处理，返回的是 _createRoute()。来看看 _createRoute返回了什么，就知道 match返回了什么了。</p>
    <Content slot-key="code-_createRoute" />
    <p>_createRoute 函数根据有是否有路由重定向、路由重命名做不同的处理。其中redirect 函数和 alias 函数最后还是调用了 _createRoute，最后都是调用了 createRoute。而来自于 util/route。</p>
    <Content slot-key="code-createRoute" />
    <p>createRoute 可以根据 record 和 location 创建出来最终返回 Route 对象，并且外部不可以修改，只能访问。Route 对象中有一个非常重要的属性是 matched，它是通过 formatMatch(record) 计算的：</p>
    <Content slot-key="code-formatMatch " />
    <p>通过 record 循环向上找 parent，直到找到最外层，并把所有的 record 都push到一个数组中，最终饭后就是一个 record 数组，这个 matched 为后面的渲染组件提供了重要的作用。</p>
    <p>matcher的主流程就是通过createMatcher 返回一个对象 {match, addRoutes}, addRoutes 是动态添加路由用的，平时使用频率比较低，match 很重要，返回一个路由对象，这个路由对象上记录当前路由的基本信息，以及路径匹配的路由记录，为路径切换、组件渲染提供了依据。那路径是怎么切换的，又是怎么渲染组件的呢。喝杯谁，我们继续继续往下看。</p>
    <Content slot-key="title-history" />
    <p>history一共有三个模式hash, histroy, abstract, 这三个类都继承至base类</p>
    <p>从源码来说history文件夹下是有4个文件的，base作为基类，另外三个继承这个基类来分别处理vue-router的各种mode情况。我们首先看下base的构造函数, 其中router是VueRouter的实例, base是路由的基础路径。current是当前的路由默认为"/", ready是路由的状态, readyCbs是ready的回调的集合, readyErrorCbs是raday失败的回调。errorCbs导航出错的回调的集合。</p>
    <Content slot-key="code-History" />
    <p>base中的listen的方法，会在VueRouter的init方法中使用到，listen会给每一次的路由的更新，添加回调</p>
    <p>base类中还有一些其他方法比如，transitionTo，confirmTransition，updateRoute它们在base子类中被使用。我们马上在hashrouter中再看看它们的具体实现。</p>
    <Content slot-key="title-change" />
    <p>基础的挂载和各种实例化都说完了之后，我们可以从init入手去看之后的流程了。</p>
    <p>
      VueRouter这个class的实例化过程中会根据配置的选项mode，判断是要进行HTML5History，HashHistory还是AbstractHistory，默认下就是HashHistory，其兼容性是最好的；
      而install方法里面重要的就是调用VueRouter实例的初始化路由方法init方法，在 init方法里针对不同的路由模式最后都调用了 history.transitionTo，进行路由初始化匹配。包括 history.push 、history.replace的底层都是调用了它。它就是路由切换的方法
    </p>
    <Content slot-key="code-init" />
    <p>可以看到初始化主要就是给app赋值，并且针对于HTML5History和HashHistory进行特殊的处理，因为在这两种模式下才有可能存在进入时候的不是默认页，需要根据当前浏览器地址栏里的path或者hash来激活对应的路由，此时就是通过调用transitionTo来达到目的；</p>
    <img :src="$withBase('/vue/router5.png')" />
    <Content slot-key="code-transitionTo" />
    <p>transitionTo可以接收三个参数 location、onComplete、onAbort，分别是目标路径、路经切换成功的回调、路径切换失败的回调。 location参数可以是string或者RawLocation对象。我们通过router.match方法(我们在matcher介绍过)，router.match会返回我们的目标路由对象。</p>
    <Content slot-key="code-confirmTransition" />
    <p>confirmTransition函数中会使用，isSameRoute会检测是否导航到相同的路由，如果导航到相同的路由会停止🤚导航，并执行终止导航的回调。</p>
    <p>resolveQueue函数接收两个参数：当前路由的 matched 和目标路由的 matched，matched 是个数组。通过遍历对比两遍的路由记录数组，当有一个路由记录不一样的时候就记录这个位置，并终止遍历。对于 next 从0到i和current都是一样的，从i口开始不同，next 从i之后为 activated部分，current从i之后为 deactivated部分，相同部分为 updated，由 resolveQueue 处理之后就能得到路由变更需要更改的部分。紧接着就可以根据路由的变更执行一系列的钩子函数。完整的导航解析流程有12步，后面会出一篇vue-router路由切换的内部实现文章。尽情期待</p>
    <p>接着我们调用resolveQueue方法，resolveQueue接受当前的路由和目标的路由的matched属性作为参数，resolveQueue的工作方式可以如下图所示。我们会逐一比较两个数组的路由，寻找出需要销毁的，需要更新的，需要激活的路由，并返回它们（因为我们需要执行它们不同的路由守卫）</p>
    <img :src="$withBase('/vue/router6.png')" />
    <Content slot-key="code-resolveQueue" />
    <p>下一步，我们会逐一提取出，所有要执行的路由守卫，将它们concat到队列queue。queue里存放里所有需要在这次路由更新中执行的路由守卫。</p>
    <p>第一步，我们使用extractLeaveGuards函数，提取出deactivated中所有需要销毁的组件内的“beforeRouteLeave”的守卫。extractLeaveGuards函数中会调用extractGuards函数，extractGuards函数，会调用flatMapComponents函数，flatMapComponents函数会遍历records(resolveQueue返回deactivated), 在遍历过程中我们将组件，组件的实例，route对象，传入了fn(extractGuards中传入flatMapComponents的回调), 在fn中我们会获取组件中beforeRouteLeave守卫。</p>
    <Content slot-key="code-extractLeaveGuards" />
    <p>第二步，获取全局VueRouter对象beforeEach的守卫</p>
    <p>第三步, 使用extractUpdateHooks函数，提取出update组件中所有的beforeRouteUpdate的守卫。过程同第一步类似。</p>
    <p>第四步, 获取activated的options配置中beforeEach守卫</p>
    <p>第五部, 获取所有的异步组件</p>
    <p>在获取所有的路由守卫后我们定义了一个迭代器iterator。接着我们使用runQueue遍历queue队列。将queue队列中每一个元素传入fn(迭代器iterator)中，在迭代器中会执行路由守卫，并且路由守卫中必须明确的调用next方法才会进入下一个管道，进入下一次迭代。迭代完成后，会执行runQueue的callback。</p>
    <p>在runQueue的callback中，我们获取激活组件内的beforeRouteEnter的守卫，并且将beforeRouteEnter守卫中next的回调存入postEnterCbs中，在导航被确认后遍历postEnterCbs执行next的回调。</p>
    <p>在queue队列执行完成后，confirmTransition函数会执行transitionTo传入的onComplete的回调。往下看👇</p>
    <Content slot-key="code-runQueue" />
    <p>beforeRouteEnter，beforeRouteUpdate ，beforeRouteLeave，可以对应queue里面的两个方法，而queue里面的beforeEnter，是写在routes里面的方法名beforeEnter；至于文档里面提到的beforeRouteEnter，则对应runQueue方法内部，执行的extractEnterGuards方法，也是最后执行的钩子</p>
    <p>在confirmTransition的onComplete回调中，我们调用updateRoute方法, 参数是导航的路由。在updateRoute中我们会更新当前的路由(history.current), 并执行cb(更新Vue实例上的_route属性，🌟这会触发RouterView的重新渲染）</p>
    <Content slot-key="code-updateRoute" />
    <p>接着我们执行transitionTo的回调函数onComplete。在回调中会调用replaceHash或者pushHash方法。它们会更新location的hash值。如果兼容historyAPI，会使用history.replaceState或者history.pushState。如果不兼容historyAPI会使用window.location.replace或者window.location.hash。而handleScroll方法则是会更新我们的滚动条的位置我们这里就不在细说了。</p>
    <h3>HashRouter</h3>
    <p>在HashHistory的构造函数中。我们会判断当前的fallback是否为true。如果为true，使用checkFallback，添加’#‘，并使用window.location.replace替换文档。</p>
    <p>如果fallback为false，我们会调用ensureSlash，ensureSlash会为没有“#”的url，添加“#”，并且使用histroy的API或者replace替换文档。</p>
    <p>所以我们在访问127.0.0.1的时候，会自动替换为127.0.0.1/#/</p>
    <Content slot-key="code-HashHistory" />
    <p>在replaceHash中，我们调用了replaceState方法，在replaceState方法中，又调用了pushState方法。在pushState中我们会调用saveScrollPosition方法，它会记录当前的滚动的位置信息。然后使用histroyAPI，或者window.location.replace完成文档的更新。</p>
    <h4>push, replace</h4>
    <p>我们把push，replace放在一起说，因为它们实现的源码都是类似的。在push和replace中，调用transitionTo方法，transitionTo方法在基类base中，我们现在转过头来看看transitionTo的源码(👇往下两节，代码不是很难，但是callback嵌套callback, 如蜜传如蜜，看起来还是比较恶心的)</p>
    <Content slot-key="code-push" />
    <h3>HistoryRouter</h3>
    <p>HistoryRouter的实现基本于HashRouter一致。差异在于HistoryRouter不会做一些容错处理，不会判断当前环境是否支持historyAPI。默认监听popstate事件，默认使用histroyAPI。感兴趣的同学可以看/history/html5.js中关于HistoryRouter的定义。</p>
    <Content slot-key="title-component" />
    <p>在install的过程里面已经将router-link和router-view两个组件注册好了,，这两个组件用的都是render方法渲染组件</p>
    <p>对于router-link，默认标签tag为a标签，也是h函数的第一个参数，而数据对象data，有on和attrs，on是router-link里prop过来的事件，默认为click事件；而attrs处理时候，调用了router.resolve(this.to, current, this.append)在index.js里面的resolve方法也是调用了match方法，返回匹配的路由route，虽然和transistorTo方法里match传参格式不同，但是结果都是返回路由对象route。 在h函数创建Vnode的时候，data.class还会根据传参，当前路由来设置对应的class样式。router-link里面还会自动创建a标签，并且当click事件触发的时候会调用内部的handler函数，当props的replace为false的时候，会触发transitionTo方法，并切换路由，点击a标签当然要触发跳转，而该transitionTo的回调则是修改window.location.hash的方法，从而修改地址栏的hash。当然由于前文提到的在Vue实例化过程中，我们在transitionTo的回调里面用了setupListeners去监听hashchange事件，所以在hashchange监听函数里面也会调用transitionTo方法，但是因为此时路由对象已经是最新的得了，所以不会进一步切换。</p>
    <p>对于router，值得注意的部分是registerRouteInstance，也是最开始的install里面提到的，beforeCreate和destroyed都可能触发这个方法。registerRouteInstance其功能和路由对象里面的match：记录路由对象的instances相关联，就是会将对当前的router-view组件添加到对应的路由记录的instance里面，并在router-view组件destoryed的时候将该instance置为undefined；而这个instance的主要作用是在confirmTransition中的queue中使用到的，以及issue#750里面提到的</p>

    <h3>RouterView</h3>
    <p>router-view是一个渲染函数，它的渲染是用了Vue的 render 函数，它接收两个参数，第一个是Vue实例，第二个是一个context，通过对象解析的方式可以拿到 props、children、parent、data，供创建 router-view 使用。</p>
    <Content slot-key="code-RouterView" />

    <h3>RouterLink</h3>
    <p>支持用户在具有路由功能的组件里使用，通过使用 to 属性指定目标地址，默认渲染成 a标签，支持通过 tag 自定义标签和插槽。</p>
    <Content slot-key="code-RouterLink" />
    <Content slot-key="title-nav" />
    <p>导航 表示路由正在发生变化，vue-router 提供的导航守卫主要用来通过跳转或者取消的方式守卫导航。导航守卫分为三种：全局守卫、单个路由守卫和组件内的守卫。</p>
    <img :src="$withBase('/vue/router7.png')" />

    <h4>全局守卫</h4>
    <ul>
      <li>全局前置守卫 beforeEach (to, from, next)</li>
      <li>全局解析守卫 beforeResolve (to, from, next)</li>
      <li>全局后置钩子 afterEach (to, from)</li>
    </ul>
    <h4>单个路由守卫：</h4>
    <ul>
      <li>路由前置守卫 beforeEnter (to, from, next)</li>
    </ul>
    <h4>组件内的守卫：</h4>
    <ul>
      <li>渲染组件的对应路由被confirm前 beforeRouterEnter (to, from, next) next可以是函数，因为该守卫不能获取组件实例，新组件还没被创建</li>
      <li>路由改变，该组件被复用时调用 (to, from, next)</li>
      <li>导航离开该组件对应路由时调用 beforeRouteLeave</li>
    </ul>
    <img :src="$withBase('/vue/router8.png')" />

    <ul>
      <li>导航被触发</li>
      <li>在失活的组件里调用离开守卫 beforeRouteLeave</li>
      <li>调用全局的 beforeEach 守卫</li>
      <li>在重用的组件里调用 beforeRouteUpdate 守卫（2.2+）</li>
      <li>在路由配置里调用 beforeEnter</li>
      <li>解析异步路由组件</li>
      <li>在被激活的组件里调用 beforeRouteEnter</li>
      <li>调用全局的 beforeResolve守卫</li>
      <li>导航被确认</li>
      <li>调用全局的 afterEach钩子</li>
      <li>触发DOM更新</li>
      <li>用创建好的实例调用 beforeRouterEnter 守卫中传给next的回调函数</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>