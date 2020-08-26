<template>
  <div class="demo">
    <Content slot-key="title-list" />
    <Content slot-key="code-list" />
    <Content slot-key="header1" />
    <h4>术语解释</h4>
    <ul>
      <li>runtime: 仅包含运行时,不包含编译器,是轻量级版本</li>
      <li>common: cjs规范,用于webpack1</li>
      <li>esm: ES模块,用于webpack2</li>
      <li>umd: 兼容cjs和amd,用于浏览器,本文统一使用该版本进行探究</li>
    </ul>
    <p>安装依赖： npm i</p>
    <p>安装rollup: npm i -g rollup</p>
    <p>修改dev脚本，添加sourcemap</p>
    <p>运行开发命令：npm run dev</p>
    <Content slot-key="header2" />
    <Content slot-key="code1" />
    <Content slot-key="code2" />
    <Content slot-key="code3" />
    <Content slot-key="code4" />
    <p>找到入口文件：src/platforms/web/entry-runtime-with-compiler.js，顺着该文件寻找Vue构造函数</p>
    <Content slot-key="code-mount" />
    <img style="height: 300px;" :src="$withBase('/vue/source1.png')" />
    <ul>
      <li>instance/index.js 真正的Vue的构造函数,并在Vue的原型上扩展方法</li>
      <li>core/index.js 增加全局API方法</li>
      <li>untime/index.js 扩展$mount方法及平台对应的代码</li>
    </ul>
    <Content slot-key="header10" />
    <p>这里需要大家掌握Vue的基本应用，对Vue的全局API有一定的掌握</p>
    <h3>Vue.util</h3>
    <Content slot-key="code-util" />
    <p>暴露的工具方法。这些方法不被视为公共API的一部分，除非你知道里面的风险，否则避免使用。（这个util是Vue内部的工具方法，可能会发生变动），例如：在Vue.router中就使用了这个工具方法</p>
    <h3>Vue.set / Vue.delete</h3>
    <Content slot-key="code-set" />
    <Content slot-key="code-del" />
    <p>Vue的缺陷：新增之前不存在的属性不会发生视图更新，修改数组索引不会发生视图更新 (解决方案就是通过$set方法,数组通过splice进行更新视图，对象则手动通知)</p>
    <h3>Vue.nextTick</h3>
    <Content slot-key="code-nextTick" />
    <p>不难看出nextTick原理就是将回调函数存入到一个队列中，最后异步的清空这个队列</p>
    <h3>timerFunc</h3>
    <Content slot-key="code-timerFunc" />
    <p>采用EventLoop中的微任务和宏任务，先采用微任务并按照优先级优雅降级的方式实现异步刷新</p>
    <h3>Vue.observable</h3>
    <p>2.6新增的方法，将对象进行观测，并返回观测后的对象。可以用来做全局变量，实现数据共享</p>
    <Content slot-key="code-observable" />
    <h3>Vue.options</h3>
    <p>存放全局的组件、指令、过滤器的一个对象,及拥有_base属性保存Vue的构造函数</p>
    <Content slot-key="code-options" />
    <h3>Vue.use</h3>
    <p>Vue.use 主要的作用就是调用插件的install方法,并将Vue作为第一个参数传入，这样做的好处是可以避免我们编写插件时需要依赖Vue导致版本问题。</p>
    <Content slot-key="code-use" />
    <h3>Vue.mixin</h3>
    <p>全局混合方法,可以用来提取公共方法及状态等.Vue对不同的属性做了不同的合并策略</p>
    <Content slot-key="code-mixin" />
    <p>你可以通过查看strats这个对象来了解不同的合并策略。</p>
    <h3>Vue.extend</h3>
    <p>Vue中非常核心的一个方法，可以通过传入的对象获取这个对象的构造函数，后续在组件初始化过程中会用到此方法</p>
    <Content slot-key="code-extend" />
    <p>extend 创建的是 Vue 构造器,我们可以自己实例化并且将其挂载在任意的元素上</p>
    <h3>组件、指令、过滤器</h3>
    <Content slot-key="code-initAssetRegisters" />
    <p>初始化全局的api，Vue.component、Vue.directive、Vue.filter，这里仅仅是格式化用户传入的内容，将其绑定在Vue.options选项上</p>

    <Content slot-key="header3" />
    <Content slot-key="code-Vue" />
    <p>通过Vue的_init方法，我们可以看到内部又包含了很多初始化的过程</p>
    <Content slot-key="code-initMixin" />
    <Content slot-key="header11" />
    <h3>数据劫持</h3>
    <p>在上节中我们已经知道，vue在哪里做了状态的初始化（initState）</p>
    <Content slot-key="code-initState" />
    <p>这里又进行了细化和拆分，对不同的属性做了不同的初始化操作,原来我们常用的api都在这里做的初始化~</p>
    <h4>数据初始化</h4>
    <p>这里我们先关心数据是如何进行初始化操作的</p>
    <Content slot-key="code-initData" />
    <p>这里主要是检测属性是否被重复声明，并对属性进行观测</p>
    <h4>观测数据</h4>

    <Content slot-key="code-observe" />
    <p>只观测对象数据类型，已经观测的不在进行观测，不能扩展的属性不进行观测。</p>
    <Content slot-key="code-Observer" />
    <p>这里要区分对象和数组，如果是数组不能使用Object.defineProperty会造成性能浪费，所以采用重写可以更改数组本身的方法的方式。</p>
    <h4>对象的观测</h4>
    <p>对象的观测就是将所有属性使用defineProperty进行重新定义</p>
    <Content slot-key="code-defineReactive" />
    <p>对象的属性劫持已经烂大街了，非常简单就是通过defineProperty来实现的,如果你还不会那得好好反思一下了。这里提一下：想减少观测可以使用Object.freeze冻结对象</p>
    <img style="height: 300px;" :src="$withBase('/vue/source2.png')" />
    <h4>数组的观测</h4>
    <p>数组的观测就是通过重写原型方法来实现的</p>
    <Content slot-key="code-arrayMethods" />
    <p>这里我们所谓的数据观测就是当数据变化时我们可以知道，像对象更改时可以出发set方法,像数组调用push方法可以触发我们自己写的push</p>
    <img style="height: 300px;" :src="$withBase('/vue/source3.png')" />

    <Content slot-key="header4" />
    <p>这里我们要回想一下vue的渲染过程是通过渲染watcher来实现的</p>
    <Content slot-key="code-updateComponent" />
    <p>在我们创建watcher时，会对变量进行取值</p>
    <h3>对象依赖收集</h3>
    <p>对于对象而言,取值就会触发get方法,我们可以在defineProperty的get中进行依赖收集,在set中通知watcher进行更新操作</p>
    <Content slot-key="code-Watcher" />
    <p>渲染watcher，默认会调用get方法也就是我们传入的updateComponent方法,在调用此方法前先将watcher存到全局中，这样再取值时可以获取到这个watcher。</p>
    <Content slot-key="code-defineReactive" />
    <p>这里的watcher和dep的关系是多对多的关系，一个属性一个dep，每个dep里存放着多个watcher，同时watcher也会记住对应的dep。</p>
    <Content slot-key="code-Dep" />
    <p>watcher中会进行虑重操作，实现watcher和dep互相记忆</p>
    <Content slot-key="header5" />
    <p>为了防止多次更改同一个属性或者多次修改不同属性（他们依赖的watcher相同） 会导致频繁更新渲染</p>
    <Content slot-key="code-queueWatcher" />
    <p>对相同watcher进行过滤操作，当同步的更改状态完毕时再去更新watcher</p>
    <img style="height: 300px;" :src="$withBase('/vue/source4.png')" />

    <Content slot-key="header6" />
    <Content slot-key="code25" />
    <Content slot-key="code26" />
    <h3>patch实现</h3>
    <p>首先进行树级别比较，可能有三种情况：增删改。</p>
    <ul>
      <li>new VNode不存在就删；</li>
      <li>old VNode不存在就增；</li>
      <li>都存在就执行diff执行更新</li>
    </ul>
    <Content slot-key="code27" />
    <Content slot-key="header7" />
    <h3>patchVnode</h3>
    <p>比较两个VNode，包括三种类型操作：属性更新、文本更新、子节点更新</p>
    <ul>
      <li>新老节点均有children子节点，则对子节点进行diff操作，调用updateChildren</li>
      <li>如果老节点没有子节点而新节点有子节点，先清空老节点的文本内容，然后为其新增子节点。</li>
      <li>当新节点没有子节点而老节点有子节点的时候，则移除该节点的所有子节点。</li>
      <li>当新老节点都无子节点的时候，只是文本的替换。</li>
    </ul>
    <Content slot-key="code28" />
    <h3>updateChildren</h3>
    <p>
      updateChildren主要作用是用一种较高效的方式比对新旧两个VNode的children得出最小操作补丁。执
      行一个双循环是传统方式，vue中针对web场景特点做了特别的算法优化，我们看图说话：
    </p>
    <img style="height: 300px;" :src="$withBase('/vue/diff7.png')" />
    <p>
      在新老两组VNode节点的左右头尾两侧都有一个变量标记，在遍历过程中这几个变量都会向中间靠拢。
      当oldStartIdx > oldEndIdx或者newStartIdx > newEndIdx时结束循环
    </p>
    <ul>
      <li>
        首先，oldStartVnode、oldEndVnode与newStartVnode、newEndVnode两两交叉比较，共有4种比较
        方法。当 oldStartVnode和newStartVnode 或者 oldEndVnode和newEndVnode 满足sameVnode，直接将该
        VNode节点进行patchVnode即可，不需再遍历就完成了一次循环。如下图，
      </li>
      <img style="height: 300px;" :src="$withBase('/vue/diff8.png')" />
      <li>
        如果oldStartVnode与newEndVnode满足sameVnode。说明oldStartVnode已经跑到了oldEndVnode
        后面去了，进行patchVnode的同时还需要将真实DOM节点移动到oldEndVnode的后面
      </li>
      <img style="height: 300px;" :src="$withBase('/vue/diff1.png')" />
      <li>
        如果oldEndVnode与newStartVnode满足sameVnode，说明oldEndVnode跑到了oldStartVnode的前
        面，进行patchVnode的同时要将oldEndVnode对应DOM移动到oldStartVnode对应DOM的前面。
      </li>
      <img style="height: 300px;" :src="$withBase('/vue/diff2.png')" />
      <li>
        如果以上情况均不符合，则通过createKeyToOldIdx会得到一个oldKeyToIdx，里面存放了一个key
        为旧的VNode，value为对应index序列的哈希表。从这个哈希表中可以找到是否有与newStartVnode一致key的
        旧的VNode节点，如果同时满足sameVnode，patchVnode的同时会将这个真实DOM（elmToMove）移动到oldStartVnode对应的真实DOM的前面。
      </li>
      <img style="height: 300px;" :src="$withBase('/vue/diff3.png')" />
      <li>
        当然也有可能newStartVnode在old VNode节点中找不到一致的key，或者是即便key相同却不是
        sameVnode，这个时候会调用createElm创建一个新的DOM节点。
      </li>
      <img style="height: 300px;" :src="$withBase('/vue/diff4.png')" />
    </ul>
    <p>至此循环结束，但是我们还需要处理剩下的节点。</p>
    <p>
      当结束时oldStartIdx > oldEndIdx，这个时候旧的VNode节点已经遍历完了，但是新的节点还没有。说
      明了新的VNode节点实际上比老的VNode节点多，需要将剩下的VNode对应的DOM插入到真实DOM
      中，此时调用addVnodes（批量调用createElm接口）。
    </p>
    <img style="height: 300px;" :src="$withBase('/vue/diff5.png')" />
    <p>但是，当结束时newStartIdx > newEndIdx时，说明新的VNode节点已经遍历完了，但是老的节点还有剩余，需要从文档中删的节点删除。</p>
    <img style="height: 300px;" :src="$withBase('/vue/diff6.png')" />
    <Content slot-key="code29" />
    <Content slot-key="header8" />
    <Content slot-key="code30" />
    <Content slot-key="code31" />
    <Content slot-key="code32" />
    <Content slot-key="code33" />
    <Content slot-key="code34" />
    <Content slot-key="code35" />
    <Content slot-key="code36" />
    <Content slot-key="code37" />
    <Content slot-key="header9" />
    <Content slot-key="code38" />
    <Content slot-key="code39" />
    <Content slot-key="code40" />

    <!-- <h2 id="创建组件文档模板">
        <a href="#创建组件文档模板" aria-hidden="true" class="header-anchor">#</a>创建组件文档模板
    </h2>
    <p>组件描述</p>
    <h3>组件功能名字</h3>
    <p>组件功能描述</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        组件展示位置
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <!-- <div class="code-user-desc">
            组件描述说明
    </div>-->
    <!-- <pre><code class="vue">{{codeStr}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(0)" ref="xxx">
        <span class="icon-down" :name="isShow[0] === false ? 'down' : 'up'"></span>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
    </div>-->
    <!-- </div> -->
  </div>
</template>

<script>
//   import WIcon from '../../../src/icon/icon'
//   import mixin from '../../../mixin'
//   export default {
//     name: 'demo',
//     mixins: [mixin],
//     components: {
//     //   WIcon,
//     },
//     data() {
//       return {
//         codeStr: `
//           <g-button>默认按钮</g-button>
//         `.replace(/^\s*/gm, '').trim(),
//       }
//     }
//   }
</script>

<style lang="scss" scoped>
a.header-anchor {
  font-size: 0.85em;
  float: left;
  margin-left: -0.87em;
  padding-right: 0.23em;
  margin-top: 0.125em;
  opacity: 1;
}
</style>