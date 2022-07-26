<template>
  <div> 
    <ul>
      <li>正常流：西方语言文本从左向右、从上向下显示，也是熟悉的html文档的文本布局，非西方语言中流向可能不同。要让一个元素不在正常流中，唯一的办法是使之成为浮动或者定位元素</li>
      <li>非替换元素：元素的内容包含在文档中，则称之为非替换元素，比如一个段落的文本都放在该元素本身之内，这个段落就是非替换元素</li>
      <li>替换元素：用作为其他内容占位符的一个元素。例如img元素</li>
      <li>块级元素：在框之前和之后生成“换行”，所以处于正常流中的块级元素会垂直摆放。</li>
      <li>行内元素：不会在之前或者之后生成“行分隔符”</li>
      <li>根元素：位于文档树顶端的元素</li>
    </ul>
    <p>每个元素都有两个盒子，外在盒子和容器（内在）盒子。外在盒子负责元素可以一行显示，还是只能换行显示。容器盒子负责宽高、内容呈现。width/height作用于容器盒子</p>
    <p>内边距不能是负值，外边距可以，边框没有设置颜色，则取元素内容的前景色与内容和内边距有相同的背景，边框的宽度不能为负</p>
    <ul>
      <li>display: block（block-block）：外在的“块级盒子”和内在的“块级容器盒子”</li>
      <li>display: inline（inline-inline）：外在的“内联盒子”和内在的“内联盒子”</li>
      <li>display: inline-block：外在的“块级盒子”和内在的“内联盒子”</li>
    </ul>
    <Content slot-key="title-indexSize1" />
    <p>块级元素和display: block的元素不是一个概念，例如，li元素默认的display值为list-item。table元素默认的display值为table，但是他们都是块级元素，因为他们都符合块级元素的特征：</p>
    <p>一个水平流上只能单独显示一个元素，多个块级元素则换行显示</p>
    <div>正是由于块级元素的换行特性，因此理论上他都可以配合clear来清除浮动带来的影响</div>
    <Content slot-key="title-index2" />
    <Content slot-key="code-method1" />
    <div>实际开发时，使用block或者table来清除浮动，不使用list-item，主要有3个原因</div>
    <ul>
      <li>1个字符的比较多，其他都是5个字符</li>
      <li>会出现不需要的项目符号，可以使用list-style: none</li>
      <li>ie浏览器不支持伪元素的display值为list-item，普通元素display: list-item有效，但是:before/:after伪元素不行</li>
    </ul>
    <a href="https://demo.cssworld.cn/3/1-1.php">点击查看清除浮动</a>
    <Content slot-key="title-index8" />
    <p>正常流中块级元素框的水平部分总和就等于父元素的width</p>
    <Content slot-key="title-index3" />
    <p>list-item元素会出现项目符号是因为生成了一个附加盒子，学名“标记盒子”，专门用来放圆点、数字这些项目符号，IE浏览器下伪元素不支持list-item或许是无法创建这个标记盒子导致的</p>
    <Content slot-key="title-indexSize2" />
    <Content slot-key="title-index5" />
    <p>width: auto的几种不同的表现</p>
    <ul>
      <li>fill-available，充分利用可用空间。例如，div、p元素的宽度默认是100%于父容器</li>
      <li>fit-content，收缩与包裹。包裹性，典型代表是浮动、绝对定位、inline-block元素或table元素。css3种的fit-content指的就是这种宽度表现</li>
      <li>min-content，收缩到最小。最容易出现在table-layout为auto的表格中,出现一柱擎天的样式，<a href="https://demo.cssworld.cn/3/2-1.php">如图</a>，当每一列空间都不够时候，文字能断就断</li>
      <li>max-content，超出容器限制。除非有明确的width设置，否则上面三种情况尺寸都不会主动超出父级容器宽度，但是存在一些特殊情况。例如，内容很长的连续的英文，或者内联元素设置了white-space: nowrap<a href="https://demo.cssworld.cn/3/2-2.php">如图</a></li>
    </ul>
    <p>盒子分“内在盒子”和“外在盒子”，显示也分“内部显示”和“外部显示”，尺寸也分“内部尺寸”和“外部尺寸”表示尺寸由内部元素决定还是外部元素决定，如果这个元素里面没有内容，宽度就是0，那就是应用的“内部尺寸”。上面的四种尺寸表现，只有第一个是“外部尺寸”，其余都是“内部尺寸”</p>
    <Content slot-key="title-index6" />
    <p>所谓流动性，是margin/border/padding和content内容区域自动分配水平空间的机制</p>
    <ul>
      <li>正常流宽度。当我们在一个容器里倒入足量的水，水一定会均匀铺满整个容器。表现为“外部尺寸”的元素一旦设置了宽度，流动性就丢失了<a href="https://demo.cssworld.cn/3/2-3.php">如图</a></li>
      <li>格式化宽度。仅出现在绝对定位模型中，position属性值为absolute或fixed的元素中。在默认情况下，绝对定位元素的宽度表现是“包裹性”，宽度由内部尺寸决定。有一种情况，宽度由外部尺寸决定，非替换元素，当left/right或top/bottom对立方为的属性值同时存在，元素宽度表现为“格式化宽度”，其宽度大小相对于最近的有定位特性的祖先元素计算.“格式化宽度”具有完全的流体性</li>
    </ul>
    <Content slot-key="title-index7" />
    <ul>
      <li>包裹性。包裹性除了“包裹”还有“自适应性”。所谓“自适应性”指的是元素尺寸由内部元素决定，但永远小于“包含块”容器的尺寸（除非容器尺寸小于元素的“最小首选宽度”）</li>
      <li>首选最小宽度。元素最合适的最小宽度</li>
      <li>最大宽度。元素可以有的最大宽度。实际等同于“包裹性”元素设置white-space: nowrap声明后的宽度</li>
    </ul>
    <Content slot-key="title-index9" />
    <ul>
      <li>流动性丢失：对于块状元素，一旦设定了width的具体数值，元素的流动性会被阻断</li>
    </ul>
    <p>所谓“宽度分离原则”，就是css中的width属性不与影响宽度的padding/border甚至有时包括margin属性共存。width独立占用一层标签，padding/border/margin利用流动性在内部自适应</p>
    <Content slot-key="title-index10" />
    <p>百分比高度值想要起到作用，其父级必须有一个可以生效的高度值，如果父级高度height: auto;子元素在文档流中的百分比值会被忽略。如果height: auto。子元素还支持height: 100%。父元素的高度很容易陷入死循环，高度无限</p>
    <h4>如何让元素支持height: 100%效果</h4>
    <ul>
      <li>设定显示高度值。</li>
      <Content slot-key="code-method2" />
      <li>使用绝对定位。绝对定位的宽高百分比计算是相对于padding box的，会把padding值计算在内，非绝对定位元素是相对于content box的</li>
      <Content slot-key="code-method3" />
    </ul>
    <Content slot-key="title-indexSize3" />
    <h4>为流体而生的min-width/max-width</h4>
    <p>css世界中，min-width/max-width出现的场景一定是自适应布局或者流体布局中。如果是width/height定死的砖头式布局，min-width/max-height就没有任何出现的价值</p>
    <p>width/height默认初始值为auto，max-width和max-height的初始值是none，MDN和W3C文档规定min-width和min-height的初始值是0，但是根据测试，所有浏览器的min-width和min-height初始值均为auto</p>
    <h4>超越!important</h4>
    <p>max-width覆盖掉!important,<a href="https://demo.cssworld.cn/3/3-1.php">如图</a></p>
    <h4>超越最大</h4>
    <p>当min-width值大于max-width值时，遵循超越最大规则，min-width活下来</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>