<template>
  <div class="demo">
    <Content slot-key="header1"/>
    <h4>vue文件目录</h4>
    <img style="width: 250px; height: 500px;" :src="$withBase('/vue-img/catalogue.png')">
    <h4>vue源码目录</h4>
    <img  style="height: 300px;" :src="$withBase('/vue-img/src.png')">
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
    <Content slot-key="header2"/>
    <Content slot-key="code1"/>
    <Content slot-key="code2"/>
    <Content slot-key="code3"/>
    <Content slot-key="code4"/>
    <p>找到入口文件：src/platforms/web/entry-runtime-with-compiler.js，顺着该文件寻找Vue构造函数</p>
    <Content slot-key="header3"/>
    <Content slot-key="code5"/>
    <Content slot-key="code6"/>
    <Content slot-key="code7"/>
    <Content slot-key="code8"/>
    <Content slot-key="code9"/>
    <Content slot-key="code10"/>
    <Content slot-key="code11"/>
    <Content slot-key="code12"/>
    <Content slot-key="header4"/>
    <Content slot-key="code13"/>
    <Content slot-key="code14"/>
    <Content slot-key="code15"/>
    <Content slot-key="code16"/>
    <Content slot-key="code17"/>
    <Content slot-key="code18"/>
    <Content slot-key="header5"/>
    <Content slot-key="code19"/>
    <Content slot-key="code20"/>
    <Content slot-key="code21"/>
    <Content slot-key="code22"/>
    <Content slot-key="code23"/>
    <Content slot-key="code24"/>
    <Content slot-key="header6"/>
    <Content slot-key="code25"/>
    <Content slot-key="code26"/>
    <h3>patch实现</h3>
    <p>首先进行树级别比较，可能有三种情况：增删改。</p>
    <ul>
        <li>new VNode不存在就删；</li>
        <li>old VNode不存在就增；</li>
        <li>都存在就执行diff执行更新</li>
    </ul>
    <Content slot-key="code27"/>
    <Content slot-key="header7"/>
    <h3>patchVnode</h3>
    <p>比较两个VNode，包括三种类型操作：属性更新、文本更新、子节点更新</p>
    <ul>
        <li>新老节点均有children子节点，则对子节点进行diff操作，调用updateChildren</li>
        <li>如果老节点没有子节点而新节点有子节点，先清空老节点的文本内容，然后为其新增子节点。</li>
        <li>当新节点没有子节点而老节点有子节点的时候，则移除该节点的所有子节点。</li>
        <li>当新老节点都无子节点的时候，只是文本的替换。</li>
    </ul>
    <Content slot-key="code28"/>
    <h3>updateChildren</h3>
    <p>updateChildren主要作用是用一种较高效的方式比对新旧两个VNode的children得出最小操作补丁。执
行一个双循环是传统方式，vue中针对web场景特点做了特别的算法优化，我们看图说话：</p>
    <img  style="height: 300px;" :src="$withBase('/vue-img/diff7.png')">
    <p>在新老两组VNode节点的左右头尾两侧都有一个变量标记，在遍历过程中这几个变量都会向中间靠拢。
当oldStartIdx > oldEndIdx或者newStartIdx > newEndIdx时结束循环</p>
    <ul>
        <li>首先，oldStartVnode、oldEndVnode与newStartVnode、newEndVnode两两交叉比较，共有4种比较
方法。当 oldStartVnode和newStartVnode 或者 oldEndVnode和newEndVnode 满足sameVnode，直接将该
VNode节点进行patchVnode即可，不需再遍历就完成了一次循环。如下图，</li>
    <img  style="height: 300px;" :src="$withBase('/vue-img/diff8.png')">
        <li>如果oldStartVnode与newEndVnode满足sameVnode。说明oldStartVnode已经跑到了oldEndVnode
后面去了，进行patchVnode的同时还需要将真实DOM节点移动到oldEndVnode的后面</li>
        <img  style="height: 300px;" :src="$withBase('/vue-img/diff1.png')">
        <li>如果oldEndVnode与newStartVnode满足sameVnode，说明oldEndVnode跑到了oldStartVnode的前
面，进行patchVnode的同时要将oldEndVnode对应DOM移动到oldStartVnode对应DOM的前面。</li>
        <img  style="height: 300px;" :src="$withBase('/vue-img/diff2.png')">
        <li>如果以上情况均不符合，则通过createKeyToOldIdx会得到一个oldKeyToIdx，里面存放了一个key
为旧的VNode，value为对应index序列的哈希表。从这个哈希表中可以找到是否有与newStartVnode一致key的
旧的VNode节点，如果同时满足sameVnode，patchVnode的同时会将这个真实DOM（elmToMove）移动到oldStartVnode对应的真实DOM的前面。</li>
        <img  style="height: 300px;" :src="$withBase('/vue-img/diff3.png')">
        <li>当然也有可能newStartVnode在old VNode节点中找不到一致的key，或者是即便key相同却不是
sameVnode，这个时候会调用createElm创建一个新的DOM节点。</li>
        <img  style="height: 300px;" :src="$withBase('/vue-img/diff4.png')">
    </ul>
    <p>至此循环结束，但是我们还需要处理剩下的节点。</p>
    <p>当结束时oldStartIdx > oldEndIdx，这个时候旧的VNode节点已经遍历完了，但是新的节点还没有。说
明了新的VNode节点实际上比老的VNode节点多，需要将剩下的VNode对应的DOM插入到真实DOM
中，此时调用addVnodes（批量调用createElm接口）。</p>
    <img  style="height: 300px;" :src="$withBase('/vue-img/diff5.png')">
    <p>但是，当结束时newStartIdx > newEndIdx时，说明新的VNode节点已经遍历完了，但是老的节点还有剩余，需要从文档中删的节点删除。</p>
    <img  style="height: 300px;" :src="$withBase('/vue-img/diff6.png')">
    <Content slot-key="code29"/>
    <Content slot-key="header8"/>
    <Content slot-key="code30"/>
    <Content slot-key="code31"/>
    <Content slot-key="code32"/>
    <Content slot-key="code33"/>
    <Content slot-key="code34"/>
    <Content slot-key="code35"/>
    <Content slot-key="code36"/>
    <Content slot-key="code37"/>
    <Content slot-key="header9"/>
    <Content slot-key="code38"/>
    <Content slot-key="code39"/>
    <Content slot-key="code40"/>




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
          </div> -->
          <!-- <pre><code class="vue">{{codeStr}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(0)" ref="xxx">
        <span class="icon-down" :name="isShow[0] === false ? 'down' : 'up'"></span>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div> -->
    </div>
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
    font-size: .85em;
    float: left;
    margin-left: -.87em;
    padding-right: .23em;
    margin-top: .125em;
    opacity: 1;
}
</style>