<template>
  <div>
    <Content slot-key="title-for" />
    <h3>v-if与v-for哪个优先级更高，为什么</h3>
    <p>从源码中找到答案compiler/codegen/index.js</p>
    <Content slot-key="code-for" />
    <p>在上面的vue源码genElement函数中，可以明显看到是先判断v-for之后执行后再判断v-if是否存在并执行</p>
    <h3>v-if与v-for同时作用于同一元素会怎么样，如何解决</h3>
    <p>如果同时出现，每次渲染都会先执行循环再判断条件，循环不可避免，导致浪费性能，可以在外层嵌套template，在该层进行v-if判断，然后内部进行v-for循环，如果需要在每一项进行判断，可以在js中完成过滤</p>
    <h4>两者同级时demo代码如下</h4>
    <Content slot-key="code-demo" />
    <h4>两者同级时渲染函数结果如下</h4>
    <Content slot-key="code-render" />
    <h4>两者不同级时demo代码如下</h4>
    <Content slot-key="code-isdemo" />
    <h4>两者不同级时渲染函数结果如下</h4>
    <Content slot-key="code-isRender" />
    <Content slot-key="title-data" />
    <h3>vue组件中的data为什么必须是函数，而vue的根实例没有此限制</h3>
    <p>组件中的data写成一个函数,数据以函数返回值形式定义,这样每复用一次组件,就会返回一份新的data,类似于给每个组件实例创建一个私有的数据空间,让各个组件实例维护各自的数据。而单纯的写成对象形式,就使得所有组件实例共用了一份data,就会造成一个变了全都会变的结果。根实例创建过程中不存在该限制因为根实例只有一个。</p>
    <Content slot-key="title-key" />
    <h3>vue中key的作用和工作原理，说说你的理解</h3>
    <Content slot-key="code-key" />
    <img :src="$withBase('/about/about1.png')" />
    <p>不使用key</p>
    <img :src="$withBase('/about/about3.png')" />
    <p>使用key</p>
    <img :src="$withBase('/about/about2.png')" />
    <h4>结论</h4>
    <ul>
      <li>key 的作用主要是为了高效的更新虚拟 DOM，其原理是 vue 在 patch 过程中通过 key 可以精准判断两个节点是否是同一个，从而避免频繁更新不同元素，使得整个 patch 过程更加高效，减少 DOM操作量，提高性能。</li>
      <li>另外，若不设置 key 还可能在列表更新时引发一些隐蔽的 bug</li>
      <li>vue 中在使用相同标签名元素的过渡切换时，也会使用到 key 属性，其目的也是为了让 vue 可以区分它们，否则 vue 只会替换其内部属性而不会触发过渡效果。</li>
    </ul>
    <Content slot-key="title-diff" />
    <ul>
      <li>
        diff 算法是虚拟 DOM 技术的必然产物：通过新旧虚拟 DOM 作对比（即 diff），将变化的地方更新
        在真 实 DOM 上；另外，也需要 diff 高效的执行对比过程，从而降低时间复杂度为 O(n)
      </li>
      <li>
        vue 2.x 中为了降低 Watcher 粒度，每个组件只有一个 Watcher 与之对应，只有引入 diff 才能精确
        找到 发生变化的地方
      </li>
      <li>
        vue 中 diff 执行的时刻是组件实例执行其更新函数时，它会比对上一次渲染结果 oldVnode 和新的
        渲染 结果 newVnode，此过程称为 patch
      </li>
      <li>
        diff 过程整体遵循深度优先、同层比较的策略；两个节点之间比较会根据它们是否拥有子节点或者
        文 本节点做不同操作；比较两组子节点是算法的重点，首先假设头尾节点可能相同做 4 次比对尝试，
        如果 没有找到相同节点才按照通用方式遍历查找，查找结束再按情况处理剩下的节点；借助 key 通
        常可以非 常精确找到相同节点，因此整个 patch 过程非常高效
      </li>
    </ul>
    <Content slot-key="title-component" />
    <Content slot-key="code-component" />
    <ul>
      <li>组件是独立和可复用的代码组织单元。组件系统是 Vue 核心特性之一，它使开发者使用小型、独立和通常可复用的组件构建大型应用；</li>
      <li>组件化开发能大幅提高应用开发效率、测试性、复用性等；</li>
      <li>组件使用按分类有：页面组件、业务组件、通用组件；</li>
      <li>vue 的组件是基于配置的，我们通常编写的组件是组件配置而非组件，框架后续会生成其构造函数，它们基于 VueComponent，扩展于 Vue ；</li>
      <li>vue 中常见组件化技术有：属性 prop，自定义事件，插槽等，它们主要用于组件通信、扩展等；</li>
      <li>合理的划分组件，有助于提升应用性能；</li>
      <li>组件应该是高内聚、低耦合的；</li>
      <li>遵循单向数据流的原则。</li>
    </ul>
    <Content slot-key="title-Vue" />
    <p>渐进式 JavaScript 框架：</p>
    <p>
      与其它大型框架不同的是， Vue 被设计为可以自底向上逐层应用。 Vue 的核心库只关注视图层，不仅
      易 于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结
      合使 用时， Vue 也完全能够为复杂的单页应用提供驱动。
    </p>
    <ul>
      <li>
        易用性:vue 提供数据响应式、声明式模板语法和基于配置的组件系统等核心特性。这些使我们只需要关注应
        用 的核心业务即可，只要会写 js 、html 和 css 就能轻松编写 vue 应用。
      </li>
      <li>
        灵活性:渐进式框架的最大优点就是灵活性，如果应用足够小，我们可能仅需要 vue 核心特性即可完成功能；
        随 着应用规模不断扩大，我们才可能逐渐引入路由、状态管理、vue-cli 等库和工具，不管是应用体积
        还是 学习难度都是一个逐渐增加的平和曲线。
      </li>
      <li>
        高效性:超快的虚拟 DOM 和 diff 算法使我们的应用拥有最佳的性能表现。
        追求高效的过程还在继续，vue3 中引入 P ro xy 对数据响应式改进以及编译器中对于静态内容编译的改
        进 都会让 vue 更加高效。
      </li>
    </ul>
    <Content slot-key="title-MVVM" />
    <p>
      在 web1.0 时代，并没有前端的概念。开发一个 web 应用多数采用 ASP .NET/Java/PHP 编写，项目通
      常由 多个 aspx/jsp/php 文件构成，每个文件中同时包含了 HTML、 CSS 、 JavaScript 、 C#/Java/PHP 代
      码，系 统整体架构可能是这样子的
    </p>
    <img :src="$withBase('/about/about9.png')" />
    <p>这种架构的好处是简单快捷，但是，缺点也非常明显： JSP 代码难以维护</p>
    <p>
      为了让开发更加便捷，代码更易维护，前后端职责更清晰。便衍生出 MVC 开发模式和框架，前端展
      示以 模板的形式出现。典型的框架就是 Spring、Structs、Hibernate。整体框架如图所示
    </p>
    <img :src="$withBase('/about/about10.png')" />

    <p>
      使用这种分层架构，职责清晰，代码易维护。但这里的 MVC 仅限于后端，前后端形成了一定的分离，
      前 端只完成了后端开发中的 view 层。
      但是，同样的这种模式存在着一些：
      1 . 前端页面开发效率不高
      2 . 前后端职责不清
    </p>
    <p>
      web 2.0 时代
      自从 Gmail 的出现，ajax 技术开始风靡全球。有了 ajax 之后，前后端的职责就更加清晰了。因为前
      端可 以通过 Ajax 与后端进行数据交互，因此，整体的架构图也变化成了下面这幅图：
    </p>
    <img :src="$withBase('/about/about11.png')" />

    <p>
      通过 ajax 与后台服务器进行数据交换，前端开发人员，只需要开发页面这部分内容，数据可由后台进
      行 提供。而且 ajax 可以使得页面实现部分刷新，减少了服务端负载和流量消耗，用户体验也更佳。
      这时， 才开始有专职的前端工程师。同时前端的类库也慢慢的开始发展，最著名的就是 jQuery 了。
      当然，此架构也存在问题：缺乏可行的开发模式承载更复杂的业务需求，页面内容都杂糅在一起，一
      旦 应用规模增大，就会导致难以维护了。因此，前端的 MVC 也随之而来。
    </p>
    <p>
      前后端分离后的架构演变 ——MVC 、 MVP 和 MVVM
      MVC
      前端的 MVC 与后端类似，具备着 Vi ew、Controller 和 Model。
      Model：负责保存应用数据，与后端数据进行同步
      Controller：负责业务逻辑，根据用户行为对 Model 数据进行修
      改 Vi ew：负责视图展示，将 model 中的数据可视化出来。
      三者形成了一个如图所示的模型：
    </p>
    <img :src="$withBase('/about/about4.png')" />

    <p>
      这样的模型，在理论上是可行的。但往往在实际开发中，并不会这样操作。因为开发过程并不灵活。
      例 如，一个小小的事件操作，都必须经过这样的一个流程，那么开发就不再便捷了。
      在实际场景中，我们往往会看到另一种模式，如图：
    </p>
    <img :src="$withBase('/about/about5.png')" />

    <p>这种模式在开发中更加的灵活，backbone.js 框架就是这种的模式。</p>
    <p>但是，这种灵活可能导致严重的问题：</p>
    <ul>
      <li>
        1 . 数据流混乱。如下图：
        <img :src="$withBase('/about/about6.png')" />
      </li>
      <li>
        2 . View 比较庞大，而 Controller 比较单薄：由于很多的开发者都会在 view 中写一些逻辑代码，逐渐的
        就导致 view 中的内容越来越庞大，而 controller 变得越来越单薄。
      </li>
    </ul>
    <p>
      既然有缺陷，就会有变革。前端的变化中，似乎少了 MVP 的这种模式，是因为 AngularJS 早早地将
      MVVM 框架模式带入了前端。 MVP 模式虽然前端开发并不常见，但是在安卓等原生开发中，开发者还
      是 会考虑到它。
    </p>
    <h4>MVP</h4>
    <P>
      MVP 与 MVC 很接近， P 指的是 P resenter，presenter 可以理解为一个中间人，它负责着 Vi ew 和
      Model 之 间的数据流动，防止 Vi ew 和 Model 之间直接交流。我们可以看一下图示：
    </P>
    <img :src="$withBase('/about/about7.png')" />

    <p>
      我们可以通过看到，presenter 负责和 Model 进行双向交互，还和 Vi ew 进行双向交互。这种交互方
      式， 相对于 MVC 来说少了一些灵活， VIew 变成了被动视图，并且本身变得很小。虽然它分离了
      View 和Model。但是应用逐渐变大之后，导致 presenter 的体积增大，难以维护。要解决这个问题，或许可
      以 从 MVVM 的思想中找到答案。
    </p>
    <h4>MVVM</h4>
    <p>
      首先，何为 MVVM 呢？ MVVM 可以分解成(Model-View-VIewModel)。 Vi ewModel 可以理解为在
      presenter 基础上的进阶版。如图所示：
    </p>
    <img :src="$withBase('/about/about8.png')" />

    <p>
      Vi ewModel 通过实现一套数据响应式机制自动响应 Model 中数据变化；
      同时 Vi ewmodel 会实现一套更新策略自动将数据变化转换为视图更新；
      通过事件监听响应 Vi ew 中用户交互修改 Model 中数据。
      这样在 Vi ewModel 中就减少了大量 DOM 操作代码。
      MVVM 在保持 Vi ew 和 Model 松耦合的同时，还减少了维护它们关系的代码，使用户专注于业务逻辑，
      兼 顾开发效率和可维护性。
    </p>
    <h4>总结</h4>
    <ul>
      <li>这三者都是框架模式，它们设计的目标都是为了解决 Model 和 Vi ew 的耦合问题。</li>
      <li>
        MVC 模式出现较早主要应用在后端，如 Spring MVC 、 AS P .NET MVC 等，在前端领域的早期也有
        应 用，如 Backbone.js。它的优点是分层清晰，缺点是数据流混乱，灵活性带来的维护性问题。
      </li>
      <li>
        MVP 模式在是 MVC 的进化形式， P resenter 作为中间层负责 MV 通信，解决了两者耦合问题，但
        P 层 过于臃肿会导致维护问题。
      </li>
      <li>
        MVVM 模式在前端领域有广泛应用，它不仅解决 MV 耦合问题，还同时解决了维护两者映射关系
        的 大量繁杂代码和 DOM 操作代码，在提高开发效率、可读性同时还保持了优越的性能表现。
      </li>
    </ul>

    <Content slot-key="title-youhua" />
    <ul>
      <li>路由懒加载</li>
      <li>keep-alive 缓存页面</li>
      <li>使用 v-show 复用 DOM</li>
      <li>v-for 遍历避免同时使用 v-if</li>
      <li>
        长列表性能优化
        <ul>
          <li>如果列表是纯粹的数据展示，不会有任何改变，就不需要做响应化</li>
          <li>如果是大数据长列表，可采用虚拟滚动，只渲染少部分区域的内容</li>
        </ul>
      </li>
      <li>事件的销毁,Vue 组件销毁时，会自动解绑它的全部指令及事件监听器，但是仅限于组件本身的事件</li>
      <li>
        图片懒加载:对于图片过多的页面，为了加速页面加载速度，所以很多时候我们需要将页面内未出现在可视区
        域内的图片先不做加载,等到滚动到可视区域后再去加载。
      </li>
      <li>第三方插件按需引入:像 element-ui 这样的第三方组件库可以按需引入避免体积太大。</li>
      <li>子组件分割</li>
      <li>变量本地化</li>
      <li>ssr</li>
    </ul>
    <Content slot-key="title-vue3" />
    <ul>
      <li>
        更快
        <ul>
          <li>虚拟 DOM 重写</li>
          <li>优化 slots 的生成</li>
          <li>静态树提升</li>
          <li>静态属性提升</li>
          <li>基于 P ro xy 的响应式系统</li>
        </ul>
      </li>
      <li>更小：通过摇树优化核心库体积</li>
      <li>更容易维护： T ypeScript + 模块化</li>
      <li>
        跨平台：编译器核心和运行时核心与平台无关，使得 Vue 更容易与任何平台（ W eb、
        Android、 iOS ）一起使用
      </li>
      <li>
        更容易使用
        <ul>
          <li>改进的 T ypeScript 支持，编辑器能提供强有力的类型检查和错误及警告</li>
          <li>更好的调试支持</li>
          <li>独立的响应化模块</li>
          <li>Composition API</li>
        </ul>
      </li>
    </ul>
    <h4>虚拟 DOM 重写</h4>
    <p>
      期待更多的编译时提示来减少运行时开销，使用更有效的代码来创建虚拟节点。
      组件快速路径 + 单个调用 + 子节点类型检测
    </p>
    <ul>
      <li>跳过不必要的条件分支</li>
      <li>JS 引擎更容易优化</li>
    </ul>
    <p>优化 slots 生成</p>
    <p>vue3 中可以单独重新渲染父级和子级</p>
    <ul>
      <li>确保实例正确的跟踪依赖关系</li>
      <li>J避免不必要的父子组件重新渲染</li>
    </ul>
    <p>静态树提升(Static T ree Hoisting)</p>
    <p>
      使用静态树提升，这意味着 Vue 3 的编译器将能够检测到什么是静态的，然后将其提升，从而降低了
      渲 染成本。
    </p>
    <ul>
      <li>跳过修补整棵树，从而降低渲染成本</li>
      <li>即使多次出现也能正常工作</li>
    </ul>
    <p>静态属性提升,使用静态属性提升， Vue 3 打补丁时将跳过这些属性不会改变的节点。</p>
    <p>基于 P ro xy 的数据响应式</p>
    <p>
      Vue 2 的响应式系统使用 Object.defineProperty 的 getter 和 setter。 Vue 3 将使用 ES2015 P ro xy 作为
      其观察机制，这将会带来如下变化：
    </p>
    <ul>
      <li>组件实例初始化的速度提高 100％</li>
      <li>使用 P ro xy 节省以前一半的内存开销，加快速度，但是存在低浏览器版本的不兼容</li>
      <li>为了继续支持 IE11 ， Vue 3 将发布一个支持旧观察者机制和新 P ro xy 版本的构建</li>
    </ul>
    <p>高可维护性:Vue 3 将带来更可维护的源代码。它不仅会使用 T ypeScript，而且许多包被解耦，更加模块化。</p>
    <Content slot-key="title-vuex" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>