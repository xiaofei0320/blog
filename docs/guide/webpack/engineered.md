::: slot title-tool
## 前端脚手架工具
:::

::: slot title-renew
## 热更新
:::

::: slot title-source
## SourceMap使用
:::

::: slot code-tool1
```js
package.json         1) npm 项目文件 
package-lock.json    2) npm 依赖 lock 文件 
public/              3) 预设的静态目录 
src/                 3) 源代码目录 
  main.ts            3) 源代码中的初始入口文件 
  router.ts          3) 源代码中的路由文件 
  store/             3) 源代码中的数据流模块目录 
webpack/             4) webpack 配置目录 
  common.config.js   4) webpack 通用配置文件 
  dev.config.js      4) webpack 开发环境配置文件 
  prod.config.js     4) webpack 生产环境配置文件 
.browserlistrc       5) 浏览器兼容描述 browserlist 配置文件 
babel.config.js      5) ES 转换工具 babel 配置文件 
tsconfig.json        5) TypeScript 配置文件 
postcss.config.js    5) CSS 后处理工具 postcss 配置文件 
.eslintrc            7) 代码检查工具 eslint 配置文件 
jest.config.js       7) 单元测试工具 jest 配置文件 
.gitignore           8) Git 忽略配置文件 
README.md            8) 默认文档文件

```
:::

::: slot code-tool2
```js
generator-[name]/ 
  package.json 
  generators/ 
    app/ 
      templates/... 
      index.js
```
:::

::: slot code-tool3
```js
var Generator = require('yeoman-generator') 
module.exports = class extends Generator { 
  writing() { 
    this.fs.copyTpl( 
      this.templatePath('.'),
      this.destinationPath('.')) 
  } 

  install() { 
    this.npmInstall() 
  } 
}

```
:::

::: slot code-tool4
```js
cra-template-[template-name]/ 
  README.md (for npm) 
  template.json 
  package.json 
  template/ 
    README.md (for projects created from this template) 
    gitignore 
    public/ 
      index.html 
    src/ 
      index.js (or index.tsx)

```
:::

::: slot code-tool5
```js
npx create-react-app [app-name] --template [template-name]

```
:::

::: slot code-tool6
```js
[template-name]/ 
  README.md (for npm) 
  meta.js or meta.json 
  template/

```
:::

::: slot code-tool7
```js
template/package.json 
... 
"dependencies": { 
  "vue": "^2.5.2"{{#router}}, 
  "vue-router": "^3.0.1"{{/router}} 
}, 
... 
meta.js 
... 
prompts: { 
  ... 
  router: { 
    when: 'isNotTest', 
    type: 'confirm', 
    message: 'Install vue-router?', 
  }, 
  ... 
}

```
:::

::: slot code-renew1
```js
src/index0.js 
function render() { 
  div = document.createElement('div') 
  div.innerHTML = 'Hello World0'; 
  document.body.appendChild(div) 
} 
render() 
webpack.config.basic.js 
module.exports = { 
  entry: './src/index0.js', 
  mode: 'development', 
} 
package.json 
"scripts": { 
  "build:basic": "webpack --config webpack.config.basic.js" 
}

```
:::


::: slot code-renew2
```js
webpack.config.watch.js 
{... 
  watch: true 
...} 
package.json 
"scripts": { 
  "build:watch": "webpack --config webpack.config.watch.js" 
}

```
:::

::: slot code-renew3
```js
webpack.config.reload.js 
{... 
  devServer: { 
    contentBase: './dist', //为./dist目录中的静态页面文件提供本地服务渲染 
    open: true          //启动服务后自动打开浏览器网页 
  } 
...} 
package.json 
"scripts": { 
  "dev:reload": "webpack-dev-server --config webpack.config.reload.js" 
}

```
:::

::: slot code-renew4
```js
src/index1.js 
import './style.css' 
... 
src/style.css 
div { color: red } 
webpack.config.hmr.js 
{... 
  entry: './src/index1.js', 
  ... 
  devServer: { 
    ... 
    hot: true 
  }, 
  module: { 
    rules: [ 
      { 
        test: /\.css$/, 
        use: ['style-loader', 'css-loader'] 
      } 
    ] 
  } 
} 
package.json 
"scripts": { 
  "dev:hmr": "webpack-dev-server --config webpack.config.hmr.js" 
}

```
:::

::: slot code-renew5
```js
//为了清晰期间，我们将模块名称注释以及与热更新无关的逻辑省略，并将 css 内容模块路径赋值为变量 cssContentPath 以便多处引用，实际代码可从示例运行时中查看 
var cssContentPath = "./node_modules/css-loader/dist/cjs.js!./src/style.css" 
var api = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"); 
            var content = __webpack_require__(cssContentPath); 
... 
var update = api(content, options); 
... 
module.hot.accept( 
  cssContentPath, 
  function(){ 
    content = __webpack_require__(cssContentPath); 
    ... 
    update(content); 
  } 
) 
module.hot.dispose(function() { 
  update(); 
});

```
:::

::: slot code-renew6
```js
./text.js 
export const text = 'Hello World' 
./index2.js 
import {text} from './text.js' 
const div = document.createElement('div') 
document.body.appendChild(div) 
function render() { 
  div.innerHTML = text; 
} 
render() 
if (module.hot) { 
  module.hot.accept('./text.js', function() { 
    render() 
  }) 
}

```
:::

::: slot code-source1
```js
webpack/lib/WebpackOptionsApply.js:232 
if (options.devtool.includes("source-map")) { 
  const hidden = options.devtool.includes("hidden"); 
  const inline = options.devtool.includes("inline"); 
  const evalWrapped = options.devtool.includes("eval"); 
  const cheap = options.devtool.includes("cheap"); 
  const moduleMaps = options.devtool.includes("module"); 
  const noSources = options.devtool.includes("nosources"); 

  const Plugin = evalWrapped 
    ? require("./EvalSourceMapDevToolPlugin") 
    : require("./SourceMapDevToolPlugin"); 

  new Plugin({ 
    filename: inline ? null : options.output.sourceMapFilename, 
    moduleFilenameTemplate: options.output.devtoolModuleFilenameTemplate, 
    fallbackModuleFilenameTemplate: 
      options.output.devtoolFallbackModuleFilenameTemplate, 
    append: hidden ? false : undefined, 
    module: moduleMaps ? true : cheap ? false : true, 
    columns: cheap ? false : true, 
    noSources: noSources, 
    namespace: options.output.devtoolNamespace 
  }).apply(compiler); 
} else if (options.devtool.includes("eval")) { 
  const EvalDevToolModulePlugin = require("./EvalDevToolModulePlugin"); 
  new EvalDevToolModulePlugin({ 
    moduleFilenameTemplate: options.output.devtoolModuleFilenameTemplate, 
    namespace: options.output.devtoolNamespace 
  }).apply(compiler); 
}

```
:::

::: slot code-source2
```js
webpack.config.js 
  ... 
  //devtool: 'eval-source-map', 
  devtool: false, 
  plugins: [ 
    new webpack.EvalSourceMapDevToolPlugin({ 
      exclude: /node_modules/, 
      module: true, 
      columns: false 
    }) 
  ], 
  ...

```
:::
::: slot code-tool2
```js
generator-[name]/ 
  package.json 
  generators/ 
    app/ 
      templates/... 
      index.js
```
:::
::: slot code-tool2
```js
generator-[name]/ 
  package.json 
  generators/ 
    app/ 
      templates/... 
      index.js
```
:::
::: slot code-tool2
```js
generator-[name]/ 
  package.json 
  generators/ 
    app/ 
      templates/... 
      index.js
```
:::

::: slot code-tool2
```js
generator-[name]/ 
  package.json 
  generators/ 
    app/ 
      templates/... 
      index.js
```
:::

::: slot code-tool2
```js
generator-[name]/ 
  package.json 
  generators/ 
    app/ 
      templates/... 
      index.js
```
:::


::: slot code-tool2
```js
generator-[name]/ 
  package.json 
  generators/ 
    app/ 
      templates/... 
      index.js
```
:::


::: slot code-tool2
```js
generator-[name]/ 
  package.json 
  generators/ 
    app/ 
      templates/... 
      index.js
```
:::


::: slot code-tool2
```js
generator-[name]/ 
  package.json 
  generators/ 
    app/ 
      templates/... 
      index.js
```
:::


::: slot code-tool2
```js
generator-[name]/ 
  package.json 
  generators/ 
    app/ 
      templates/... 
      index.js
```
:::


::: slot code-tool2
```js
generator-[name]/ 
  package.json 
  generators/ 
    app/ 
      templates/... 
      index.js
```
:::


::: slot code-tool2
```js
generator-[name]/ 
  package.json 
  generators/ 
    app/ 
      templates/... 
      index.js
```
:::


::: slot code-tool2
```js
generator-[name]/ 
  package.json 
  generators/ 
    app/ 
      templates/... 
      index.js
```
:::



::: slot code-tool2
```js
generator-[name]/ 
  package.json 
  generators/ 
    app/ 
      templates/... 
      index.js
```
:::


::: slot code-tool2
```js
generator-[name]/ 
  package.json 
  generators/ 
    app/ 
      templates/... 
      index.js
```
:::



::: slot code-tool2
```js
generator-[name]/ 
  package.json 
  generators/ 
    app/ 
      templates/... 
      index.js
```
:::



::: slot code-tool2
```js
generator-[name]/ 
  package.json 
  generators/ 
    app/ 
      templates/... 
      index.js
```
:::



::: slot code-tool2
```js
generator-[name]/ 
  package.json 
  generators/ 
    app/ 
      templates/... 
      index.js
```
:::



::: slot code-tool2
```js
generator-[name]/ 
  package.json 
  generators/ 
    app/ 
      templates/... 
      index.js
```
:::



::: slot code-tool2
```js
generator-[name]/ 
  package.json 
  generators/ 
    app/ 
      templates/... 
      index.js
```
:::


::: slot code-tool2
```js
generator-[name]/ 
  package.json 
  generators/ 
    app/ 
      templates/... 
      index.js
```
:::


::: slot code-tool2
```js
generator-[name]/ 
  package.json 
  generators/ 
    app/ 
      templates/... 
      index.js
```
:::


::: slot code-tool2
```js
generator-[name]/ 
  package.json 
  generators/ 
    app/ 
      templates/... 
      index.js
```
:::


::: slot code-tool2
```js
generator-[name]/ 
  package.json 
  generators/ 
    app/ 
      templates/... 
      index.js
```
:::



::: slot code-tool2
```js
generator-[name]/ 
  package.json 
  generators/ 
    app/ 
      templates/... 
      index.js
```
:::


::: slot code-tool2
```js
generator-[name]/ 
  package.json 
  generators/ 
    app/ 
      templates/... 
      index.js
```
:::



::: slot code-tool2
```js
generator-[name]/ 
  package.json 
  generators/ 
    app/ 
      templates/... 
      index.js
```
:::


::: slot code-tool2
```js
generator-[name]/ 
  package.json 
  generators/ 
    app/ 
      templates/... 
      index.js
```
:::


::: slot code-tool2
```js
generator-[name]/ 
  package.json 
  generators/ 
    app/ 
      templates/... 
      index.js
```
:::


::: slot code-tool2
```js
generator-[name]/ 
  package.json 
  generators/ 
    app/ 
      templates/... 
      index.js
```
:::

::: slot code-tool2
```js
generator-[name]/ 
  package.json 
  generators/ 
    app/ 
      templates/... 
      index.js
```
:::

::: slot code-tool2
```js
generator-[name]/ 
  package.json 
  generators/ 
    app/ 
      templates/... 
      index.js
```
:::

<webpack-engineered/>