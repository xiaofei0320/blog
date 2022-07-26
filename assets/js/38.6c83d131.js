(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{414:function(e,v,t){"use strict";t.r(v);var _={},a=t(45),o=Object(a.a)(_,(function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("div",[t("h3",[e._v("前端工程化")]),e._v(" "),t("p",[e._v("根据一定的标准和规范，通过工具提高效率，降低成本的一种方式，工程化是对项目整体的规划，架构，工具是帮助实行工程化的手段")]),e._v(" "),t("Content",{attrs:{"slot-key":"title-tool"}}),e._v(" "),t("p",[e._v("当你准备开发一个新项目时，在进入到实际业务编码前，通常需要做很多的基础准备工作，这里会遇到的问题有：")]),e._v(" "),e._m(0),e._v(" "),t("p",[e._v("而脚手架工具，正是为了解决这些问题而诞生的。")]),e._v(" "),e._m(1),e._v(" "),t("p",[e._v("因此，对于一个熟练的前端工程师来说，要掌握的基本能力之一就是通过技术选型来确定所需要使用的技术栈，然后根据技术栈选择合适的脚手架工具，来做项目代码的初始化。一个合适的脚手架，可以为开发人员提供反复优化后的开发流程配置，高效地解决开发中涉及的流程问题，使得工程师能够快速上手，并提升整个开发流程的效率和体验。当然，前提是建立在选择对了脚手架工具并深入掌握其工作细节的基础上。")]),e._v(" "),t("p",[e._v("那么下面我们先来谈谈脚手架工具究竟是什么。")]),e._v(" "),t("h3",[e._v("什么是脚手架")]),e._v(" "),t("p",[e._v("说到脚手架（Scaffold） 这个词，相信你并不陌生，它原本是建筑工程术语，指为了保证施工过程顺利而搭建的工作平台，它为工人们在各层施工提供了基础的功能保障。")]),e._v(" "),t("p",[e._v("而在软件开发领域，脚手架是指通过各种工具来生成项目基础代码的技术。通过脚手架工具生成后的代码，通常已包含了项目开发流程中所需的工作目录内的通用基础设施，使开发者可以方便地将注意力集中到业务开发本身。")]),e._v(" "),t("p",[e._v("那么对于日常的前端开发流程来说，项目内究竟有哪些部分属于通用基础设施呢？让我们从项目创建的流程说起。对于一个前端项目来说，一般在进入开发之前我们需要做的准备有：")]),e._v(" "),e._m(2),e._v(" "),t("p",[e._v("正如下面简单的示例项目模板，经历了上面这些步骤后我们的项目目录下就新增了这些相关的文件：")]),e._v(" "),t("Content",{attrs:{"slot-key":"code-tool1"}}),e._v(" "),t("p",[e._v("而通过脚手架工具，我们就能免去人工处理上的环节，轻松地搭建起项目的初始环境，直接进入到业务开发中。接下来我们就先来看一下前端领域的几个典型脚手架工具，了解这几个脚手架所代表的不同设计理念，接着我们会重点分析两个代表性脚手架工具包内的技术细节，以便在工作中更能得心应手地使用和优化。")]),e._v(" "),t("h3",[e._v("三种代表性的前端脚手架工具")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/webpack/tool1.png")}}),e._v(" "),t("h4",[e._v("Yeoman")]),e._v(" "),t("p",[e._v("Yeoman 是前端领域内较早出现的脚手架工具，它由 Google I/O 在 2012 年首次发布。Yeoman 提供了基于特定生成器（Generator）来创建项目基础代码的功能。时至今日，在它的网站中能找到超过 5600 个不同技术栈的代码生成器。")]),e._v(" "),t("p",[e._v("作为早期出现在前端领域的脚手架工具，它没有限定具体的开发技术栈，提供了足够的开放性和自由度，但也因此缺乏某一技术栈的深度集成和技术生态。随着前端技术栈的日趋复杂化，人们更倾向于选择那些以具体技术栈为根本的脚手架工具，而 Yeoman 则更多用于一些开发流程里特定片段代码的生成。")]),e._v(" "),t("h4",[e._v("Create-React-App")]),e._v(" "),t("p",[e._v("Create React App（后简称 CRA ）是 Facebook 官方提供的 React 开发工具集。它包含了 create-react-app 和 react-scripts 两个基础包。其中 create-react-app 用于选择脚手架创建项目，而 react-scripts 则作为所创建项目中的运行时依赖包，提供了封装后的项目启动、编译、测试等基础工具。")]),e._v(" "),t("p",[e._v("正如官方网站中所说的，CRA 带来的最大的改变，是将一个项目开发运行时的各种配置细节完全封装在了一个 react-scripts 依赖包中，这大大降低了开发者，尤其是对 webpack 等构建工具不太熟悉的开发者上手开发项目的学习成本，也降低了开发者自行管理各配置依赖包的版本所需的额外测试成本。")]),e._v(" "),t("p",[e._v("但事情总有两面性，这种近乎黑盒的封装在初期带来便利的同时，也为后期的用户自定义优化带来了困难。虽然官方也提供了 eject 选项来将全部配置注入回项目，但大部分情况下，为了少量优化需求而放弃官方提供的各依赖包稳定升级的便利性，也仍不是一个好的选择。在这种矛盾之下，在保持原有特性的情况下提供自定义配置能力的工具 react-rewired 和 customize-cra 应运而生。")]),e._v(" "),t("h4",[e._v("Vue CLI")]),e._v(" "),t("p",[e._v("正如 Create-React-App 在 React 项目开发中的地位， Vue 项目的开发者也有着自己的基础开发工具。Vue CLI 由 Vue.js 官方维护，其定位是 Vue.js 快速开发的完整系统。完整的 Vue CLI 由三部分组成：作为全局命令的 @vue/cli、作为项目内集成工具的 @vue/cli-service、作为功能插件系统的 @vue/cli-plugin-。")]),e._v(" "),t("p",[e._v("Vue CLI 工具在设计上吸取了 CRA 工具的教训，在保留了创建项目开箱即用的优点的同时，提供了用于覆盖修改原有配置的自定义构建配置文件和其他工具配置文件。")]),e._v(" "),t("p",[e._v("同时，在创建项目的流程中，Vue CLI 也提供了通过用户交互自行选择的一些定制化选项，例如是否集成路由、TypeScript 等，使开发者更有可能依据这些选项来生成更适合自己的初始化项目，降低了开发者寻找模板或单独配置的成本。")]),e._v(" "),t("p",[e._v("除了技术栈本身的区别之外，以上三种脚手架工具，实际上代表了三种不同的工具设计理念：")]),e._v(" "),e._m(3),e._v(" "),t("h3",[e._v("了解脚手架模板中的技术细节")]),e._v(" "),t("p",[e._v("刚上手开发项目时，我们通过上述脚手架提供的开箱即用的能力可以很容易地上手开发项目，但是往往在开发过程中遇到问题时又需要回过头来查询文档，看脚手架中是否已有相应解决方案。而如果我们对该脚手架足够熟悉，就能减少这类情况下所花费的时间，提升开发效率。所以在这里，我们先来聊一下该如何了解一个脚手架。")]),e._v(" "),t("p",[e._v("要了解一个脚手架，除了学会如何使用脚手架来创建项目外，我们还需要了解它提供的具体功能边界，提供了哪些功能、哪些优化。这样我们才能在后续的开发中更得心应手，后续的优化也更有的放矢。")]),e._v(" "),t("p",[e._v("还是以上面的 CRA 和 Vue CLI 为例，除了通过脚手架模板生成项目之外，项目内部分别使用 react-scripts 和 vue-cli-service 作为开发流程的集成工具。接下来，我们先来对比下这两个工具在开发与生产环境命令中都使用了哪些配置项，其中一些涉及效率的优化项在后面的课程中还会详细介绍。")]),e._v(" "),t("h4",[e._v("webpack loaders")]),e._v(" "),t("p",[e._v("从下面表格中我们可以发现，在一般源文件的处理器使用方面，两个脚手架工具大同小异，对于 babel-loader 都采用了缓存优化，Vue 中还增加了多线程的支持。在样式和其他类型文件的处理上 Vue 默认支持更多的文件类型，相应的，在 CRA 模板下如果需要支持对应文件就需要使用 customize-cra 等工具来添加新处理模块。")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/webpack/tool2.png")}}),e._v(" "),t("h4",[e._v("webpack plugins")]),e._v(" "),t("p",[e._v("在与构建核心功能相关的方面（html、env、hot、css extract、fast ts check），两者使用的插件相同，而在其他一些细节功能上各有侧重，例如 React 的 inline chunk 和 Vue 的 preload。")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/webpack/tool3.png")}}),e._v(" "),t("h4",[e._v("webpack.optimize")]),e._v(" "),t("p",[e._v("两者在代码优化配置中相同的部分包括：都使用 TerserPlugin 压缩JavaScript， 都使用 splitChunks 做自动分包 （参数不同）。CSS 的压缩分别采用上面表格中的 OptimizeCssAssetsWebpackPlugin 和 OptimizeCssNanoPlugin 。react-scripts 中还开启了 runtimeChunk 以优化缓存。")]),e._v(" "),t("h4",[e._v("webpack resolve")]),e._v(" "),t("p",[e._v("在 resolve 和 resolve loader 部分，值得一提的是两者都使用 PnpWebpackPlugin（pnp） 来加速使用 Yarn 作为包管理器时的模块安装和解析，感兴趣的同学可以 进一步了解，我们在后面构建和部署的篇章中也会再次谈到。")]),e._v(" "),t("p",[e._v("通过上述几方面的对比，我们就对这两个典型脚手架工具提供的构建集成能力有了一个大概的了解。这有助于我们在使用具体工具时快速定位问题的边界，同时在使用其他脚手架工具和模板时，我们也可以参照和借鉴上面的最佳实践方案。下一步，我们再来讨论定制专属脚手架模板的问题。")]),e._v(" "),t("h3",[e._v("如何定制一个脚手架模板")]),e._v(" "),t("p",[e._v("虽然官方提供的默认脚手架模板已经代表了对应技术栈的通用最佳实践，但是在实际开发中，我们还是时常需要对通过这些脚手架创建的模板项目进行定制化，例如：")]),e._v(" "),e._m(4),e._v(" "),t("p",[e._v("通过将这些实际项目开发中所需要做的定制化修改输出为标准的脚手架模板，我们就能在团队内部孵化出更符合团队开发规范的开发流程。一方面最大程度减少大家在开发中处理重复事务的时间，另一方面也能减少因为开发风格不一导致的团队内项目维护成本的增加。接下来，我们就结合上面提到的三个脚手架工具来分别看下如何定制专属的脚手架模板。")]),e._v(" "),t("h4",[e._v("使用 Yeoman 创建生成器")]),e._v(" "),t("p",[e._v("脚手架模板在 Yeoman 中对应的是生成器 （Generator）。作为主打自由制作和分享脚手架生成器的开源工具， Yeoman 为制作生成器提供了丰富的 API 和 详细的文档。在这里，我们简单概述一下，一个基本的复制已有项目模板的生成器包含了：")]),e._v(" "),e._m(5),e._v(" "),t("p",[e._v("基本目录结构如下所示：")]),e._v(" "),t("Content",{attrs:{"slot-key":"code-tool2"}}),e._v(" "),t("p",[e._v("其中 app/index.js 的核心逻辑如下：")]),e._v(" "),t("Content",{attrs:{"slot-key":"code-tool3"}}),e._v(" "),t("p",[e._v("writing 和 install 是 Yeoman 运行时上下文的两个阶段，在例子中，当我们执行下面的创建项目命令时，依次将生成器中模板目录内的所有文件复制到创建目录下，然后执行安装依赖。")]),e._v(" "),t("p",[e._v("在完成生成器的基本功能后，我们就可以通过在生成器目录里 npm link ，将对应生成器包挂载到全局依赖下，然后进入待创建项目的目录中，执行 yo 创建命令即可。 （如需远程安装，则需要先将生成器包发布到 npm 仓库中，支持发布到 @scope/generator-[name] 。）")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/webpack/tool4.png")}}),e._v(" "),t("p",[e._v("至此，制作 Yeoman 的生成器来定制项目模板的基本功能就完成了。除了基本的复制文件和安装依赖外， Yeoman 还提供了很多实用的功能，例如编写用户交互提示框或合成其他生成器等，可供开发者定制功能体验更完善的脚手架生成器。")]),e._v(" "),t("h4",[e._v("为 create-react-app 创建自定义模板")]),e._v(" "),t("p",[e._v("为 create-react-app 准备的自定义模板在模式上较为简单。作为一个最简化的 CRA 模板，模板中包含如下必要文件：")]),e._v(" "),e._m(6),e._v(" "),t("p",[e._v("具体目录结构如下所示：")]),e._v(" "),t("Content",{attrs:{"slot-key":"code-tool4"}}),e._v(" "),t("p",[e._v("在使用时，同样还是需要将模板通过 npm link 命令映射到全局依赖中，或发布到 npm 仓库中，然后执行创建项目的命令。")]),e._v(" "),t("Content",{attrs:{"slot-key":"code-tool5"}}),e._v(" "),t("h4",[e._v("为 Vue CLI 创建自定义模板")]),e._v(" "),t("p",[e._v("相比 CRA 模板而言，Vue 的模板中变化最大的当属增加了 meta.js/json 文件，用于描述创建过程中的用户交互信息以及用户选项对于模板文件的过滤等。")]),e._v(" "),t("Content",{attrs:{"slot-key":"code-tool6"}}),e._v(" "),t("p",[e._v("此外，Vue 的 template 目录中包含了复制到项目中的所有文件，并且在相关文件中还增加了 handlebars 条件判断的部分，根据 meta.js 中指定用户交互结果选项来将模板中带条件的文件转换为最终生成到项目中的产物。如以下代码所示：")]),e._v(" "),t("Content",{attrs:{"slot-key":"code-tool7"}}),e._v(" "),t("p",[e._v("使用自定义模板创建项目的命令为：")]),e._v(" "),t("p",[e._v("\n    npm install -g @vue/cli-init\n    vue init [template-name] [app-name]\n  ")]),e._v(" "),t("p",[e._v("这样就完成了脚手架的定制工作。有了定制化后的脚手架，我们就可以在之后的创建项目时直接进入到业务逻辑的开发中，而不必重复地对官方提供的标准化模板进行二次优化。")]),e._v(" "),t("Content",{attrs:{"slot-key":"title-renew"}}),e._v(" "),t("h3",[e._v("什么是浏览器的热更新")]),e._v(" "),t("p",[e._v("看见浏览器热更新，相信你很容易想到 webpack 和 webpack-dev-server 。确实，现在各类型的脚手架工具在创建项目时通常已配置好了开启各种优化选项的 webpack ，其中自然也包含了开发服务器。大家在上手开发时，可以简单地执行 npm start (cra) 或 npm run serve (vue cli) ，就能体验到热更新的效果。")]),e._v(" "),t("p",[e._v("但是在我过去担任中高级前端岗位的面试官时，经常发现很多来面试的同学对于到底什么是热更新都很难讲清楚，热更新是保存后自动编译（Auto Compile）吗？还是自动刷新浏览器（Live Reload）？还是指 HMR（Hot Module Replacement，模块热替换）？这些不同的效果背后的技术原理是什么呢？今天我们就来回答下这些问题。")]),e._v(" "),t("p",[e._v("先来看下，究竟什么是浏览器的热更新。浏览器的热更新，指的是我们在本地开发的同时打开浏览器进行预览，当代码文件发生变化时，浏览器自动更新页面内容的技术。这里的自动更新，表现上又分为自动刷新整个页面，以及页面整体无刷新而只更新页面的部分内容。")]),e._v(" "),t("p",[e._v("与之相对的是在早期开发流程中，每次代码变更后需要手动刷新浏览器才能看到变更效果的情况。甚至于，代码变更后还需要手动执行打包脚本，完成编译打包后再刷新浏览器。而使用浏览器的热更新，可以大大减少这些麻烦。")]),e._v(" "),t("h3",[e._v("webpack 中的热更新配置")]),e._v(" "),t("p",[e._v("下面我们就以 webpack 工具为例，来看下四种不同配置对结果的影响（完整示例代码 https://github.com/fe-efficiency/lessons_fe_efficiency/02_webpack_hmr）。")]),e._v(" "),t("h4",[e._v("一切依赖手动")]),e._v(" "),t("p",[e._v("首先来看第一个最简单的配置，在入口 js 中我们简单地打印一个文本，然后在构建配置里只有最简单的 entry 和 mode 配置。")]),e._v(" "),t("Content",{attrs:{"slot-key":"code-renew1"}}),e._v(" "),t("p",[e._v("当我们执行 npm run build:basic 时， webpack 将 entry 中的源文件 index0.js 打包为 dist/main.js ，并退出进程。流程很简单，但是如果我们接下来改动了源文件的输出文本，会发现由于构建配置中没有任何对应处理，所以在保存后，打包后的文件内容并没有更新。为了同步改动效果，我们需要再次手动执行该命令。")]),e._v(" "),t("h4",[e._v("Watch 模式")]),e._v(" "),t("p",[e._v("第二种配置是 watch 模式。为了摆脱每次修改文件后都需要手动执行脚本才能进行编译的问题， webpack 中增加了 watch 模式，通过监控源码文件的变化来解决上面不能自动编译问题。我们可以在配置脚本中增加 watch:true ，如下：")]),e._v(" "),t("Content",{attrs:{"slot-key":"code-renew2"}}),e._v(" "),t("p",[e._v("当我们执行 npm run build:watch ，webpack 同样执行一次打包过程，但在打包结束后并未退出当前进程，而是继续监控源文件内容是否发生变化，当源文件发生变更后将再次执行该流程，直到用户主动退出（除了在配置文件中加入参数外，也可以在 webpack 命令中增加 --watch 来实现）。")]),e._v(" "),t("p",[e._v("有了 watch 模式之后，我们在开发时就不用每次手动执行打包脚本了。但问题并未解决，为了看到执行效果，我们需要在浏览器中进行预览，但在预览时我们会发现，即使产物文件发生了变化，在浏览器里依然需要手动点击刷新才能看到变更后的效果。那么这个问题又该如何解决呢？")]),e._v(" "),t("h4",[e._v("Live Reload")]),e._v(" "),t("p",[e._v("第三种配置是 Live Reload 。为了使每次代码变更后浏览器中的预览页面能自动显示最新效果而无须手动点击刷新，我们需要一种通信机制来连接浏览器中的预览页面与本地监控代码变更的进程。在 webpack 中，我们可以使用官方提供的开发服务器来实现这一目的，配置如下：")]),e._v(" "),t("Content",{attrs:{"slot-key":"code-renew3"}}),e._v(" "),t("p",[e._v("当我们执行 npm run dev:reload ，从日志中可以看到本地服务 http://localhost:8080/ 已启动，然后我们在浏览器中输入网址 http://localhost:8080/index.html （也可以在 devServer 的配置中加入 open 和 openPage 来自动打开网页）并打开控制台网络面板，可以看到在加载完页面和页面中引用的 js 文件后，服务还加载了路径前缀名为 /sockjs-node 的 websocket 链接，如下图：")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/webpack/renew1.png")}}),e._v(" "),t("p",[e._v("通过这个 websocket 链接，就可以使打开的网页和本地服务间建立持久化的通信。当源代码发生变更时，我们就可以通过 Socket 通知到网页端，网页端在接到通知后会自动触发页面刷新。")]),e._v(" "),t("p",[e._v("到了这里，在使用体验上我们似乎已经达到预期的效果了，但是在以下场景中仍然会遇到阻碍：在开发调试过程中，我们可能会在网页中进行一些操作，例如输入了一些表单数据想要调试错误提示的样式、打开了一个弹窗想要调试其中按钮的位置，然后切换回编辑器，修改样式文件进行保存。可是当我们再次返回网页时却发现，网页刷新后，之前输入的内容与打开的弹窗都消失了，网页又回到了初始化的状态。于是，我们不得不再次重复操作才能确认改动后的效果。对于这个问题，又该如何解决呢？")]),e._v(" "),t("h4",[e._v("Hot Module Replacement")]),e._v(" "),t("p",[e._v("第四种配置就是我们常说的 HMR（Hot Module Replacement，模块热替换）了。为了解决页面刷新导致的状态丢失问题，webpack 提出了模块热替换的概念。下面我们通过一个复杂一些的示例来了解热替换的配置与使用场景：")]),e._v(" "),t("Content",{attrs:{"slot-key":"code-renew4"}}),e._v(" "),t("p",[e._v("在上面的代码改动中，我们只是在源码部分新增导入了一个简单的 CSS 文件，用于演示热替换的效果。在配置文件中，首先我们在 devServer 配置中新增了 hot:true ，其次，新增 module 的配置，使用 style-loader 和 css-loader 来解析导入的 CSS 文件。其中 css-loader 处理的是将导入的 CSS 文件转化为模块供后续 Loader 处理；而 style-loader 则是负责将 CSS 模块的内容在运行时添加到页面的 style 标签中。")]),e._v(" "),t("p",[e._v("当我们执行 npm run dev:hmr 命令，可以看到页面控制台的网络面板与上个示例并无区别，而在审查元素面板中可以看到源码中的 CSS 被添加到了页面头部的新增 style 标签中。")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/webpack/renew2.png")}}),e._v(" "),t("p",[e._v("而当修改源码中 CSS 的样式后，再回到网页端，我们则会发现这样一些变化：")]),e._v(" "),t("p",[e._v("首先在网络面板中，只是新增了两个请求： hot-update.json 和 hot-update.js ，而不像上一个立即刷新的示例中那样，会刷新页面重载所有请求。")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/webpack/renew3.png")}}),e._v(" "),t("p",[e._v("其次，在审查元素面板中我们可以看到，在页面的头部新增了 hot-update.js ，并替换了原先 style 标签中的样式内容。")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/webpack/renew4.png")}}),e._v(" "),t("p",[e._v("正如我们所见，对于代码中引入的样式文件，可以通过上述设置来开启热替换。但是有同学也许会问，我们为什么不像上一个例子中那样改动 JS 的内容（例如改动显示的文本）来观察热替换的效果呢？原因在于，简单改动 JS 中的显示文本并不能达到热替换的效果。尽管网络端同样新增了 hot-update.json 和 hot-update.js ，但紧随其后的是如上一个示例一般的刷新了整个页面。")]),e._v(" "),t("p",[e._v("那么，为什么导入的 CSS 能触发模块热替换，而 JS 文件的内容修改就失效了呢？要回答这个问题，我们还得从 webpack 的热更新原理说起。")]),e._v(" "),t("h3",[e._v("webpack 中的热更新原理")]),e._v(" "),t("p",[e._v("下图是 webpackDevServer 中 HMR 的基本流程图，完整的 HMR 功能主要包含了三方面的技术：")]),e._v(" "),e._m(7),e._v(" "),t("img",{attrs:{src:e.$withBase("/webpack/renew5.png")}}),e._v(" "),t("p",[e._v("也就是说在这三种技术中，我们可以基于 Node.js 中提供的文件模块 fs.watch 来实现对文件和文件夹的监控，同样也可以使用 sockjs-node 或 socket.io 来实现 Websocket 的通信。而在这里，我们重点来看下第三种， webpack 中的模块解析与替换功能。")]),e._v(" "),t("h3",[e._v("webpack 中的打包流程")]),e._v(" "),t("p",[e._v("在讲 webpack 的打包流程之前我们先解释几个 webpack 中的术语：")]),e._v(" "),e._m(8),e._v(" "),t("p",[e._v("webpack 的打包思想可以简化为 3 点：")]),e._v(" "),e._m(9),e._v(" "),t("img",{attrs:{src:e.$withBase("/webpack/renew6.png")}}),e._v(" "),t("img",{attrs:{src:e.$withBase("/webpack/renew7.png")}}),e._v(" "),t("p",[e._v("在上面的 hmr 示例中，从 entry 中的 './src/index1.js' 到打包产物的 dist/main.js ，以模块的角度而言，其基本流程是：")]),e._v(" "),e._m(10),e._v(" "),t("p",[e._v("上述流程的结果我们可以在预览页面中控制台的 Sources 面板中看到，这里，我们重点看经过 style-loader 处理的 style.css 模块的代码：")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/webpack/renew8.png")}}),e._v(" "),t("h3",[e._v("style-loader 中的热替换代码")]),e._v(" "),t("p",[e._v("我们简化一下上述控制台中看到的 style-loader 处理后的模块代码，只看其热替换相关的部分。")]),e._v(" "),t("Content",{attrs:{"slot-key":"code-renew5"}}),e._v(" "),t("p",[e._v("从上面的代码中我们可以看到，在运行时调用 API 实现将样式注入新生成的 style 标签，并将返回函数传递给 update 变量。然后，在 module.hot.accept 方法的回调函数中执行 update(content) ，在 module.hot.dispose 中执行 update() 。通过查看上述 API 的代码，可以发现 update(content) 是将新的样式内容更新到原 style 标签中，而 update() 则是移除注入的 style 标签，那么这里的 module.hot 究竟是什么呢？")]),e._v(" "),t("h3",[e._v("模块热替换插件（HotModuleReplacementPlugin）")]),e._v(" "),t("p",[e._v("上面的 module.hot 实际上是一个来自 webpack 的基础插件 HotModuleReplacementPlugin ，该插件作为热替换功能的基础插件，其 API 方法导出到了 module.hot 的属性中。")]),e._v(" "),t("p",[e._v("在上面代码的两个 API 中，hot.accept 方法传入依赖模块名称和回调方法，当依赖模块发生更新时，其回调方法就会被执行，而开发者就可以在回调中实现对应的替换逻辑，即上面的用更新的样式替换原标签中的样式。另一个 hot.dispose 方法则是传入一个回调，当代码上下文的模块被移除时，其回调方法就会被执行。例如当我们在源代码中移除导入的 CSS 模块时，运行时原有的模块中的 update() 就会被执行，从而在页面移除对应的 style 标签。")]),e._v(" "),t("p",[e._v("module.hot 中还包含了该插件提供的其他热更新相关的 API 方法，这里就不再赘述了，感兴趣的同学可以从 官方文档中进一步了解。")]),e._v(" "),t("p",[e._v("通过上面的分析，我们就了解了热替换的基本原理，这也解释了为什么我们替换 index1.js 中的输出文本内容时，并没有观察到热更新，而是看到了整个页面的刷新：因为代码中并未包含对热替换插件 API 的调用，代码的解析也没有配置额外能对特定代码调用热替换 API 的 Loader 。所以在最后，我们就来实现下 JS 中更新文本内容的热替换。")]),e._v(" "),t("h4",[e._v("示例：JS 代码中的热替换")]),e._v(" "),t("Content",{attrs:{"slot-key":"code-renew6"}}),e._v(" "),t("p",[e._v("在上面的代码中，我们将用于修改的文本单独作为一个 JS 模块，以便传入 hot.accept 方法。当文本发生变更时，可以观察到浏览器端显示最新内容的同时并未触发页面刷新，验证生效。此外， accept 方法也支持监控当前文件的变更，对应的 DOM 更新逻辑稍做调整也能达到无刷新效果，区别在于替换自身模块时示例中不可避免地需要更改 DOM 。")]),e._v(" "),t("p",[e._v("从上面的例子中我们可以看到，热替换的实现，既依赖 webpack 核心代码中 HotModuleReplacementPlugin 所提供的相关 API，也依赖在具体模块的加载器中实现相应 API 的更新替换逻辑。因此，在配置中开启 hot:true 并不意味着任何代码的变更都能实现热替换，除了示例中演示的 style-loader 外， vue-loader 、 react-hot-loader 等加载器也都实现了该功能。当开发时遇到 hmr 不生效的情况时，可以优先确认对应加载器是否支持该功能，以及是否使用了正确的配置。")]),e._v(" "),t("Content",{attrs:{"slot-key":"title-source"}}),e._v(" "),t("p",[e._v("热更新能帮助我们在开发时快速预览代码效果，免去了手动执行编译和刷新浏览器的操作.那么除了热更新以外，项目的开发环境还有哪些在影响着我们的开发效率呢？在过去的工作中，公司同事就曾问过我一个问题：为什么我的项目在开发环境下每次构建还是很卡？每次保存完代码都要过 1~2 秒才能看到效果，这是怎么回事呢？其实这里面的原因主要是这位同事在开发时选择的 Source Map 设定不对。今天我们就来具体讨论下这个问题。首先，什么是 Source Map 呢？")]),e._v(" "),t("h3",[e._v("什么是 Source Map")]),e._v(" "),t("p",[e._v("在前端开发过程中，通常我们编写的源代码会经过多重处理（编译、封装、压缩等），最后形成产物代码。于是在浏览器中调试产物代码时，我们往往会发现代码变得面目全非，例如：")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/webpack/source7.png")}}),e._v(" "),t("p",[e._v("因此，我们需要一种在调试时将产物代码显示回源代码的功能，source map 就是实现这一目标的工具。")]),e._v(" "),t("p",[e._v('source-map 的基本原理是，在编译处理的过程中，在生成产物代码的同时生成产物代码中被转换的部分与源代码中相应部分的映射关系表。有了这样一张完整的映射表，我们就可以通过 Chrome 控制台中的"Enable Javascript source map"来实现调试时的显示与定位源代码功能。')]),e._v(" "),t("p",[e._v("对于同一个源文件，根据不同的目标，可以生成不同效果的 source map 。它们在构建速度、质量（反解代码与源代码的接近程度以及调试时行号列号等辅助信息的对应情况）、访问方式（在产物文件中或是单独生成 source map 文件）和文件大小等方面各不相同。在开发环境和生产环境下，我们对于 source map 功能的期望也有所不同：")]),e._v(" "),t("p",[e._v("在开发环境中，通常我们关注的是构建速度快，质量高，以便于提升开发效率，而不关注生成文件的大小和访问方式。")]),e._v(" "),t("p",[e._v("在生产环境中，通常我们更关注是否需要提供线上 source map , 生成的文件大小和访问方式是否会对页面性能造成影响等，其次才是质量和构建速度。")]),e._v(" "),t("h3",[e._v("webpack 中的 source map 预设")]),e._v(" "),t("p",[e._v('在 webpack 中，通过设置 devtool 来选择 source map 的预设类型，文档中共有 20 余种source map 的预设（注意：其中部分预设实际效果与其他预设相同，即页面表格中空白行条目）可供选择，这些预设通常包含了 "eval" "cheap" "module" "inline" "hidden" "nosource" "source-map" 等关键字的组合，这些关键字的具体逻辑如下：')]),e._v(" "),t("Content",{attrs:{"slot-key":"code-source1"}}),e._v(" "),t("p",[e._v("如上面的代码所示， devtool 的值匹配并非精确匹配，某个关键字只要包含在赋值中即可获得匹配，例如：'foo-eval-bar' 等同于 'eval'，'cheapfoo-source-map' 等同于 'cheap-source-map' 。")]),e._v(" "),t("h3",[e._v("Source Map 名称关键字")]),e._v(" "),t("p",[e._v("各字段的作用各不相同，为了便于记忆，我们在这里简单整理下这些关键字的作用：")]),e._v(" "),e._m(11),e._v(" "),t("h3",[e._v("Source Map 处理插件")]),e._v(" "),t("li",[e._v("从上面的规则中我们还可以看到，根据不同规则，实际上 webpack 是从三种插件中选择其一作为 source map 的处理插件。")]),e._v(" "),t("li",[e._v("EvalDevToolModulePlugin：模块代码后添加 sourceURL=webpack:///+ 模块引用路径，不生成 source map 内容，模块产物代码通过 eval() 封装。")]),e._v(" "),t("li",[e._v("EvalSourceMapDevToolPlugin：生成 base64 格式的 source map 并附加在模块代码之后， source map 后添加 sourceURL=webpack:///+ 模块引用路径，不单独生成文件，模块产物代码通过 eval() 封装。")]),e._v(" "),t("li",[e._v("SourceMapDevToolPlugin：生成单独的 .map 文件，模块产物代码不通过 eval 封装。")]),e._v(" "),t("li",[e._v("通过上面的代码分析，我们了解了不同参数在 webpack 运行时起到的作用。那么这些不同参数组合下的各种预设对我们的 source map 生成又各自会产生什么样的效果呢？下面我们通过示例来看一下。")]),e._v(" "),t("h4",[e._v("不同预设的示例结果对比")]),e._v(" "),t("p",[e._v("下面，以课程示例代码 03_develop_environment为例，我们来对比下几种常用预设的差异（为了使时间差异更明显，示例中引入了几个大的类库文件）：")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/webpack/source1.png")}}),e._v(" "),t("p",[e._v("*注1： “/” 前后分别表示产物 js 大小和对应 .map 大小")]),e._v(" "),t("p",[e._v("*注2： “/” 前后分别表示初次构建时间和开启 watch 模式下 rebuild 时间。对应统计的都是 development 模式下的笔者机器环境下几次构建时间的平均值，只作为相对快慢与量级的比较。")]),e._v(" "),t("h4",[e._v("不同预设的效果总结")]),e._v(" "),t("p",[e._v("从上图的数据中我们不难发现，选择不同的 devtool 类型在以下几个方面会产生不同的效果。")]),e._v(" "),e._m(12),e._v(" "),t("h4",[e._v("不同质量的源码示例")]),e._v(" "),t("ul",[t("li",[e._v("源码且包含列信息")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/webpack/source2.png")}}),e._v(" "),t("li",[e._v("源码不包含列信息")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/webpack/source3.png")}}),e._v(" "),t("li",[e._v("loader转换后代码")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/webpack/source4.png")}}),e._v(" "),t("li",[e._v("生成后的产物代码")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/webpack/source5.png")}})]),e._v(" "),t("h4",[e._v("开发环境下 Source Map 推荐预设")]),e._v(" "),t("p",[e._v("在这里我们对开发环境下使用的推荐预设做一个总结（生产环境的预设我们将在之后的构建效率篇中再具体分析）：")]),e._v(" "),t("p",[e._v("通常来说，开发环境首选哪一种预设取决于 source map 对于我们的帮助程度。")]),e._v(" "),t("p",[e._v("如果对项目代码了如指掌，查看产物代码也可以无障碍地了解对应源代码的部分，那就可以关闭 devtool 或使用 eval 来获得最快构建速度。")]),e._v(" "),t("p",[e._v("反之如果在调试时，需要通过 source map 来快速定位到源代码，则优先考虑使用 eval-cheap-modulesource-map，它的质量与初次/再次构建速度都属于次优级，以牺牲定位到列的功能为代价换取更快的构建速度通常也是值得的。")]),e._v(" "),t("p",[e._v("在其他情况下，根据对质量要求更高或是对速度要求更高的不同情况，可以分别考虑使用 eval-source-map 或 eval-cheap-source-map。")]),e._v(" "),t("p",[e._v("了解了开发环境下如何选择 source map 预设后，我们再来补充几种工具和脚手架中的默认预设：")]),e._v(" "),t("p",[e._v("webpack 配置中，如果不设定 devtool ，则使用默认值 eval ，即速度与 devtool:false 几乎相同、但模块代码后多了 sourceURL 以帮助定位模块的文件名称。")]),e._v(" "),t("p",[e._v("create-react-app 中，在生产环境下，根据 shouldUseSourceMap 参数决定使用 ‘source-map’ 或 false ；在开发环境下使用 ‘cheap-module-source-map’（不包含列信息的源代码，但更快）。")]),e._v(" "),t("p",[e._v("vue-cli-service 中，与 creat-react-app 中相同。")]),e._v(" "),t("p",[e._v("除了上面讨论的这些简单的预设外， webpack 还允许开发者直接使用对应插件来进行更精细化的 source map 控制，在开发环境下我们首选的还是 EvalSourceMapDevToolPlugin 。下面我们再来看看如何直接使用这个插件进行优化。")]),e._v(" "),t("h4",[e._v("EvalSourceMapDevToolPlugin 的使用")]),e._v(" "),t("p",[e._v("在 EvalSourceMapDevToolPlugin 的 传入参数中，除了上面和预设相关的 filename 、append 、module 、columns 外，还有影响注释内容的 moduleFilenameTemplate 和 protocol，以及影响处理范围的 test 、include、exclude 。这里重点看处理范围的参数，因为通常我们需要调试的是开发的业务代码部分，而非依赖的第三方模块部分。因此在生成 source map 的时候如果可以排除第三方模块的部分而只生成业务代码的 source map ，无疑能进一步提升构建的速度，例如示例：")]),e._v(" "),t("Content",{attrs:{"slot-key":"code-source2"}}),e._v(" "),t("p",[e._v("在上面的示例中，我们将 devtool 设为 false ，而直接使用 EvalSourceMapDevToolPlugin ，通过传入 module: true 和 column:false，达到和预设 eval-cheap-module-source-map 一样的质量，同时传入 exclude 参数，排除第三方依赖包的 source map 生成。保存设定后通过运行可以看到，在文件体积减小（尽管开发环境并不关注文件大小）的同时，再次构建的速度相比上面表格中的速度提升了将近一倍，达到了最快一级。")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/webpack/source6.png")}}),e._v(" "),t("p",[e._v("类似这样的优化可以帮助我们在一些大型项目中，通过自定义设置来获取比预设更好的开发体验。")]),e._v(" "),t("p",[e._v("在今天这一课时中，我们主要了解了提升开发效率的另一个重要工具 —— source map 的用途和使用方法。我们分析了 webpack 中 devtool 的各种参数预设的组合规则、使用效果及其背后的原理。对于开发环境，我们根据一组示例对比分析来了解通常情况下的最佳选择，也知道了如何直接使用插件来达到更细致的优化。")]),e._v(" "),t("p",[e._v("限于篇幅原因，关于 source map 这一课时还有两个与提效无关的小细节没有提到，一个是生成的 source map 的内容，即浏览器工具是如何将 source map 内容映射回源文件的，如果你感兴趣可以通过这个链接进一步了解；另一个是我们在控制台的网络面板中通常看不到 source map 文件的请求，其原因是出于安全考虑 Chrome 隐藏了 source map 的请求，需要通过 net-log 来查询。")])],1)}),[function(){var e=this.$createElement,v=this._self._c||e;return v("ul",[v("li",[this._v("要准备好一个项目的基础开发设施，需要投入大量时间和精力，这部分的工作计量是以天为单位的。")]),this._v(" "),v("li",[this._v("一个完备的项目基础环境就像一个精密的仪器，只有各部分都充分协调后才能运转正常。要在较短时间内配置一个技术栈完整、辅助功能丰富、兼顾不同环境下构建优化目标的项目基础代码，通常需要开发人员在工程领域长久的知识储备与实践总结，而这对于经验相对较少的开发人员而言是一个不小的挑战。")]),this._v(" "),v("li",[this._v("不同的项目需求和团队情况，对应我们在使用基础设施时的选择可能也各不相同，因此我们并不能依靠一套固定不变的模板，而是需要根据不同的现状来使用不同的基础设施。这又增加了整体时间成本。")])])},function(){var e=this.$createElement,v=this._self._c||e;return v("ul",[v("li",[this._v("利用脚手架工具，我们可以经过几个简单的选项快速生成项目的基础代码。")]),this._v(" "),v("li",[this._v("使用脚手架工具生成的项目模板通常是经过经验丰富的开发者提炼和检验的，很大程度上代表某一类项目开发的最佳实践，相较于让开发者自行配置提供了更优选择。")]),this._v(" "),v("li",[this._v("同时，脚手架工具也支持使用自定义模板，我们也可以根据项目中的实际经验总结、定制一个脚手架模板。")])])},function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ul",[t("li",[e._v("首先我们需要有 package.json，它是 npm 依赖管理体系下的基础配置文件。")]),e._v(" "),t("li",[e._v("然后选择使用 npm 或 Yarn 作为包管理器，这会在项目里添加上对应的 lock 文件，来确保在不同环境下部署项目时的依赖稳定性。")]),e._v(" "),t("li",[e._v("确定项目技术栈，团队习惯的技术框架是哪种？使用哪一种数据流模块？是否使用 TypeScript？使用哪种 CSS 预处理器？等等。在明确选择后安装相关依赖包并在 src 目录中建立入口源码文件。")]),e._v(" "),t("li",[e._v("选择构建工具，目前来说，构建工具的主流选择还是 webpack （除非项目已先锋性地考虑尝试 nobundle 方案），对应项目里就需要增加相关的 webpack 配置文件，可以考虑针对开发/生产环境使用不同配置文件")]),e._v(" "),t("li",[e._v("打通构建流程，通过安装与配置各种 Loader 、插件和其他配置项，来确保开发和生产环境能正常构建代码和预览效果。")]),e._v(" "),t("li",[e._v("优化构建流程，针对开发/生产环境的不同特点进行各自优化。例如，开发环境更关注构建效率和调试体验，而生产环境更关注访问性能等。")]),e._v(" "),t("li",[e._v("选择和调试辅助工具，例如代码检查工具和单元测试工具，安装相应依赖并调试配置文件。")]),e._v(" "),t("li",[e._v("最后是收尾工作，检查各主要环节的脚本是否工作正常，编写说明文档 README.md，将不需要纳入版本管理的文件目录记入 .gitignore 等。")])])},function(){var e=this.$createElement,v=this._self._c||e;return v("ul",[v("li",[this._v("Yeoman 代表的是一般开源工具的理念。它不提供某一技术栈的最佳实践方案，而专注于实现脚手架生成器的逻辑和提供展示第三方生成器。作为基础工具，它的主要目标群体是生成器的开发者，而非那些需要使用生成器来开发项目的人员，尽管后者也能通过前者的实践而受益。")]),this._v(" "),v("li",[this._v("CRA 代表的是面向某一技术栈降低开发复杂度的理念。它通过提供一个包含各开发工具的集成工具集和标准化的开发-构建-测试三步流程脚本，使得开发者能无障碍地按照既定流程进行 React 项目的开发和部署。")]),this._v(" "),v("li",[this._v("Vue CLI 代表的是更灵活折中的理念。它一方面继承了 CRA 降低配置复杂度的优点，另一方面在创建项目的过程中提供了更多交互式选项来配置技术栈的细节，同时允许在项目中使用自定义配置。这样的设计在一定程度上增加了模板维护的复杂度，但是从最终效果来看，能够较大程度满足各类开发者的不同需求。")])])},function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ul",[t("li",[e._v("为项目引入新的通用特性。")]),e._v(" "),t("li",[e._v("针对构建环节的 webpack 配置优化，来提升开发环境的效率和生产环境的性能等。")]),e._v(" "),t("li",[e._v("定制符合团队内部规范的代码检测规则配置。")]),e._v(" "),t("li",[e._v("定制单元测试等辅助工具模块的配置项。")]),e._v(" "),t("li",[e._v("定制符合团队内部规范的目录结构与通用业务模块，例如业务组件库、辅助工具类、页面模板等。")])])},function(){var e=this.$createElement,v=this._self._c||e;return v("ul",[v("li",[this._v("生成器描述文件 package.json，其中限定了 name、file、keywords 等对应字段的规范赋值。")]),this._v(" "),v("li",[this._v("作为主体的 generators/app 目录，包含生成器的核心文件。该目录是执行 yo 命令时的默认查找目录， Yeoman 支持多目录的方式集成多个子生成器，篇幅原因我就不在这里展开了。")]),this._v(" "),v("li",[this._v("app/index.js 是生成器的核心控制模块，其内容是导出一个继承自 yeoman-generator 的类，并由后者提供运行时上下文、用户交互、生成器组合等功能。")]),this._v(" "),v("li",[this._v("app/templates/ 目录是我们需要复制到新项目中的脚手架模板目录。")])])},function(){var e=this.$createElement,v=this._self._c||e;return v("ul",[v("li",[this._v("README.md：用于在 npm 仓库中显示的模板说明。")]),this._v(" "),v("li",[this._v("package.json：用于描述模板本身的元信息 （例如名称、运行脚本、依赖包名和版本等） 。")]),this._v(" "),v("li",[this._v("template.json：用于描述基于模板创建的项目中的 package.json 信息。")]),this._v(" "),v("li",[this._v("template 目录：用于复制到创建后的项目中，其中 gitignore 在复制后重命名为 .gitignore ， public/index.html和src/index 为运行 react-scripts 的必要文件。")])])},function(){var e=this.$createElement,v=this._self._c||e;return v("ul",[v("li",[this._v("watch 示例中体现的，对本地源代码文件内容变更的监控。")]),this._v(" "),v("li",[this._v("instant reload 示例中体现的，浏览器网页端与本地服务器端的 Websocket 通信。")]),this._v(" "),v("li",[this._v("hmr 示例中体现的，也即是最核心的，模块解析与替换功能。")])])},function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ul",[t("li",[e._v("module：指在模块化编程中我们把应用程序分割成的独立功能的代码模块。")]),e._v(" "),t("li",[e._v("chunk：指模块间按照引用关系组合成的代码块，一个 chunk 中可以包含多个 module 。")]),e._v(" "),t("li",[e._v("chunk group：指通过配置入口点（entry point）区分的块组，一个 chunk group 中可包含一到多个 chunk 。")]),e._v(" "),t("li",[e._v("bundling：webpack 打包的过程。")]),e._v(" "),t("li",[e._v("asset/bundle：打包产物。")])])},function(){var e=this.$createElement,v=this._self._c||e;return v("ul",[v("li",[this._v("一切源代码文件均可通过各种 Loader 转换为 JS 模块 （module），模块之间可以互相引用。")]),this._v(" "),v("li",[this._v("webpack 通过入口点（entry point）递归处理各模块引用关系，最后输出为一个或多个产物包 js(bundle) 文件。")]),this._v(" "),v("li",[this._v("每一个入口点都是一个块组（chunk group），在不考虑分包的情况下，一个 chunk group 中只有一个 chunk，该 chunk 包含递归分析后的所有模块。每一个 chunk 都有对应的一个打包后的输出文件（asset/bundle）。")])])},function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ul",[t("li",[e._v("唯一 entry 创建一个块组（chunk group）， name 为 main ，包含了 ./src/index1.js 这一个模块。")]),e._v(" "),t("li",[e._v("在解析器中处理 ./src/index1.js 模块的代码，找到了其依赖的 './style.css' ，找到匹配的 loader: css-loader 和 style-loader 。")]),e._v(" "),t("li",[e._v("首先通过 css-loader 处理，将 css-loader/dist/cjs.js!./src/style.css 模块（即把 CSS 文件内容转化为 js 可执行代码的模块，这里简称为 Content 模块）和 css-loader/dist/runtime/api.js 模块打入 chunk 中。")]),e._v(" "),t("li",[e._v("然后通过 style-loader 处理，将 style-loader/dist/runtime/injectStylesIntoStyleTag.js 模块 （我们这里简称为 API 模块），以及处理后的 .src/style.css 模块（作用是运行时中通过 API 模块将 Content 模块内容注入 Style 标签）导入 chunk 中。")]),e._v(" "),t("li",[e._v("依次类推，直到将所有依赖的模块均打入到 chunk 中，最后输出名为 main.js 的产物（我们称为 Asset 或 Bundle）。")])])},function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ul",[t("li",[e._v("false：即不开启 source map 功能，其他不符合上述规则的赋值也等价于 false 。")]),e._v(" "),t("li",[e._v("eval：是指在编译器中使用 EvalDevToolModulePlugin 作为 sourcemap 的处理插件。")]),e._v(" "),t("li",[e._v("[xxx-...]source-map：根据 devtool 对应值中是否有 eval 关键字来决定使用 EvalSourceMapDevToolPlugin 或 SourceMapDevToolPlugin 作为 sourcemap 的处理插件，其余关键字则决定传入到插件的相关字段赋值。")]),e._v(" "),t("li",[e._v("inline：决定是否传入插件的 filename 参数，作用是决定单独生成 source map 文件还是在行内显示，该参数在 eval- 参数存在时无效。")]),e._v(" "),t("li",[e._v("hidden：决定传入插件 append 的赋值，作用是判断是否添加 SourceMappingURL 的注释，该参数在 eval- 参数存在时无效。")]),e._v(" "),t("li",[e._v("module：为 true 时传入插件的 module 为 true ，作用是为加载器（Loaders）生成 source map 。")]),e._v(" "),t("li",[e._v("cheap：这个关键字有两处作用。首先，当 module 为 false 时，它决定插件 module 参数的最终取值，最终取值与 cheap 相反。其次，它决定插件 columns 参数的取值，作用是决定生成的 source map 中是否包含列信息，在不包含列信息的情况下，调试时只能定位到指定代码所在的行而定位不到所在的列。")]),e._v(" "),t("li",[e._v("nosource：nosource 决定了插件中 noSource 变量的取值，作用是决定生成的 source map 中是否包含源代码信息，不包含源码情况下只能显示调用堆栈信息。")])])},function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ul",[t("li",[e._v("质量：生成的 source map 的质量分为 5 个级别，对应的调试便捷性依次降低：源代码 > 缺少列信息的源代码 > loader 转换后的代码 > 生成后的产物代码 > 无法显示代码（具体参见下面的不同质量的源码示例小节）。对应对质量产生影响的预设关键字优先级为 souce-map = eval-source-map > cheap-module- > cheap- > eval = none > nosource-。")]),e._v(" "),t("li",[e._v("\n      构建的速度：再次构建速度都要显著快于初次构建速度。不同环境下关注的速度也不同：\n      "),t("ul",[t("li",[e._v("在开发环境下：一直开着 devServer ，再次构建的速度对我们的效率影响远大于初次构建的速度。从结果中可以看到，eval- 对应的 EvalSourceMapDevToolPlugin 整体要快于不带 eval- 的 SourceMapDevToolPlugin 。尤其在质量最佳的配置下，eval-source-map 的再次构建速度要远快于其他几种。而同样插件配置下，不同质量配置与构建速度成反比，但差异程度有限，更多是看具体项目的大小而定。")]),e._v(" "),t("li",[e._v("在生产环境下：通常不会开启再次构建，因此相比再次构建，初次构建的速度更值得关注，甚至对构建速度以外因素的考虑要优先于对构建速度的考虑，这一部分我们在之后的构建优化的课程里会再次讨论到。")])])]),e._v(" "),t("li",[e._v("包的大小和生成方式：在开发环境下我们并不需要关注这些因素，正如在开发环境下也通常不考虑使用分包等优化方式。我们需要关注速度和质量来保证我们的高效开发体验，而其他的部分则是在生产环境下需要考虑的问题。")])])}],!1,null,"b4274174",null);v.default=o.exports}}]);