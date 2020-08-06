<template>
  <div>
    <Content slot-key="title-index1" />
    <p>
      To coordinate events, user interaction, scripts, rendering,
      networking, and so forth, user agents must use event loops
      as described in this section. Each agent has an associated
      event loop, which is unique to that agent.
    </p>
    <p>
      根据标准中对事件循环的定义描述，我们可以发现事件循环本质上
      是 user agent (如浏览器端) ⽤用于协调⽤用户交互（鼠标、键盘）、脚
      本（如 JavaScript）、渲染（如 HTML DOM、CSS 样式）、网络
      等行为的一个机制。
    </p>
    <p>
      了解到这个定义之后，我们就能够清楚的明白，与其说是
      JavaScript 提供了事件循环，不如说是嵌入 JavaScript 的 user
      agent 需要通过事件循环来与多种事件源交互。
    </p>
    <p>
      各种浏览器事件同时触发时，肯定有一个先来后到的排队问题。决定这些事件如何
      排队触发的机制，就是事件循环。这个排队行为以 JavaScript 开发者的角度来看，
      主要是分成两个队列：
    </p>
    <ul>
      <li>
        一个是 JavaScript 外部的队列。外部的队列主要是浏览器协调的各类事件的队
        列，标准⽂文件中称之为 Task Queue。下⽂文中为了方便理解统一称为外部队
        列。
      </li>
      <li>
        另一个是 JavaScript 内部的队列。这部分主要是 JavaScript 内部执行的任务队
        列，标准中称之为 Microtask Queue。下⽂文中为了方便理解统一称为内部队
        列。
      </li>
    </ul>
    <p>
      值得注意的是，虽然为了好理理解我们管这个叫队列 (Queue)，但是本质上是有序集
      合 (Set)，因为传统的队列都是先进先出（FIFO）的，而这里的队列则不然，排到最
      前面但是没有满足条件也是不会执行的（比如外部队列里只有一个 setTimeout 的定
      时任务，但是时间还没有到，没有满足条件也不会把他出列来执行）。
    </p>
    <Content slot-key="title-index2" />
    <p>
      部队列列（Task Queue），顾名思义就是 JavaScript 外部的事件的
      队列，这里我们可以先列列举一下浏览器中这些外部事件源（Task
      Source），他们主要有：
    </p>
    <ul>
      <li>DOM 操作 (⻚页⾯面渲染)</li>
      <li>用户交互 (⿏鼠标、键盘)</li>
      <li>网络请求 (Ajax 等)</li>
      <li>History API 操作</li>
      <li>定时器器 (setTimeout 等)</li>
    </ul>
    <p>
      可以观察到，这些外部的事件源可能很多，为了方便浏览器器厂商优化，
      HTML 标准中明确指出一个事件循环由一个或多个外部队列列，而每一个
      外部事件源都有一个对应的外部队列。不同事件源的队列可以有不同的
      优先级（例如在网络事件和用户交互之间，浏览器可以优先处理鼠标行
      为，从而让用户感觉更加流程）
    </p>
    <Content slot-key="title-index3" />
    <p>
      内部队列（Microtask Queue），即 JavaScript 语言内部的事件队列，
      在 HTML 标准中，并没有明确规定这个队列的事件源，通常认为有以下
      ⼏种
    </p>
    <ul>
      <li>Promise的成功 (.then) 与失败 (.catch)</li>
      <li>MutationObserver [6]</li>
      <li>Object.observe (已废弃)</li>
    </ul>
    <Content slot-key="title-index4" />
    <p>
      To coordinate events, user interaction, scripts, rendering,
      networking, and so forth, user agents must use event loops
      as described in this section. Each agent has an associated
      event loop, which is unique to that agent.
    </p>
    <p>
      看到这里，大家可能就反应过来了，scripts 执行也是一个事件，我
      们只要归类一下就会发现 JavaScript 的执行也是⼀个浏览器发起的外
      部事件。所以本质的执行顺序还是
    </p>
    <ul>
      <li>一次外部事件</li>
      <li>所有内部事件</li>
      <li>HTML 渲染</li>
      <li>回到1</li>
    </ul>
    <Content slot-key="title-index5" />
    <p>
      如果说浏览器端是将 JavaScript 集成到 HTML 的事件循环之中，那么
      Node.js 则是将 JavaScript 集成到 libuv 的 I/O 循环之中。
    </p>
    <p>
      简而言之，二者都是把 JavaScript 集成到他们各⾃自的环境中，但是 HTML (浏览器端) 与
      libuv (服务端) 面对的场景有很大的差异。⾸首先能直观感受到的区别是
    </p>
    <ul>
      <li>事件循环的过程没有 HTML 渲染。只剩下了外部队列和内部队列这两个部分。</li>
      <li>外部队列的事件源不同。Node.js 端没有了鼠标等外设但是新增了文件等 IO。</li>
      <li>内部队列的事件仅剩下 Promise 的 then 和 catch</li>
    </ul>
    <p>
      至于内在的差异，有一个很重要的地方是 Node.js （libuv）在最初设计的时候是允许执
      行多次外部的事件再切换到内部队列的，而浏览器端一次事件循环只允许执行一次外部
      事件。这个经典的内在差异，可以通过一个例子来观察。
    </p>
    <p>
      究其原因，主要是因为浏览器端有外部队列一次事件循环只能执行
      一个的限制，而在 Node.js 中则放开了这个限制，允许外部队列中
      所有任务都执行完再切换到内部队列。
    </p>
    <p>
      虽然 Node.js 的这个问题在 11 之后的版本里修复了了，但是为了继续探究这个
      影响，我们引入一个新的外部事件 setImmediate。这个方法目前是 Node.js
      独有的，浏览器端没有
    </p>
    <p>
      setImmediate 的引入是为了解决 setTimeout 的精度问题，由于 setTimeout
      指定的延迟时间是毫秒（ms）但实际一次时间循环的时间可能是纳秒级的，
      所以在一次事件循环的多个外部队列列中，找到某一个队列直接执行其中的
      callback 可以得到比 setTimeout 更早执行的效果。
    </p>
    <Content slot-key="title-index6" />
    <ul>
      <li>每一个页卡都是进程 (互不影响)</li>
      <li>浏览器也有一个主进程 (用户界面)</li>
      <li>渲染进程 每个页卡里 都有一个渲染进程 (浏览器内核)</li>
      <li>网络进程 （处理请求）</li>
      <li>GPU进程 3d绘制</li>
      <li>第三方插件的进程</li>
    </ul>
    <Content slot-key="title-index7" />
    <ul>
      <li>GUI渲染线程 （渲染页面的）</li>
      <li>js引擎线程 他和页面渲染时互斥</li>
      <li>事件触发线程 独立的线程 EventLoop</li>
      <li>事件 click、setTimeout、ajax也是一个独立线程</li>
      <img :src="$withBase('/es6/loop.jpg')" />
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>