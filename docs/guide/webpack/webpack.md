
::: slot title-background
## webpack背景
:::

::: slot title-module
## webpack实现模块化打包
:::

::: slot title-loader
## webpack实现loader资源加载
:::

::: slot title-plugin
## webpack插件机制
:::

::: slot title-running
## webpack运行机制与工作原理
:::

::: slot title-Dev
## Dev Server使用
:::

::: slot title-SourceMap
## Webpack SourceMap
:::

::: slot title-HMR
## Webpack热替换（HMR）机制
:::

::: slot title-optimize
## Webpack特性
::: 

::: slot title-speed
## 优化 Webpack 的构建速度和打包结果
::: 

::: slot title-deploy
## webpack配置
:::


::: slot code-background1
```js
└─ stage-1
    ├── module-a.js
    ├── module-b.js
    └── index.html
```
:::

::: slot code-background2
```js
// module-a.js 
function foo () {
   console.log('moduleA#foo') 
}
```
:::

::: slot code-background3
```js
// module-b.js 
var data = 'something'
```
:::

::: slot code-background4
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Stage 1</title>
</head>
<body>
  <script src="module-a.js"></script>
  <script src="module-b.js"></script>
  <script>
    // 直接使用全局成员
    foo() // 可能存在命名冲突
    console.log(data)
    data = 'other' // 数据可能会被修改
  </script>
</body>
</html>

```
:::

::: slot code-background5
```js
// module-a.js
window.moduleA = {
  method1: function () {
    console.log('moduleA#method1')
  }
}

```
:::

::: slot code-background6
```js
// module-b.js
window.moduleB = {
  data: 'something'
  method1: function () {
    console.log('moduleB#method1')
  }
}

```
:::

::: slot code-background7
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Stage 2</title>
</head>
<body>
  <script src="module-a.js"></script>
  <script src="module-b.js"></script>
  <script>
    moduleA.method1()
    moduleB.method1()
    // 模块成员依然可以被修改
    moduleA.data = 'foo'
  </script>
</body>
</html>

```
:::

::: slot code-background8
```js
// module-a.js
;(function () {
  var name = 'module-a'

  function method1 () {
    console.log(name + '#method1')
  }

  window.moduleA = {
    method1: method1
  }
})()

```
:::

::: slot code-background9
```js
// module-b.js
;(function () {
  var name = 'module-b'

  function method1 () {
    console.log(name + '#method1')
  }

  window.moduleB = {
    method1: method1
  }
})()
```
:::

::: slot code-background10
```js
// module-a.js
;(function ($) { // 通过参数明显表明这个模块的依赖
  var name = 'module-a'

  function method1 () {
    console.log(name + '#method1')
    $('body').animate({ margin: '200px' })
  }

  window.moduleA = {
    method1: method1
  }
})(jQuery)

```
:::

::: slot code-background11
```html
<!DOCTYPE html>
<html>
<head>
  <title>Evolution</title>
</head>
<body>
  <script src="https://unpkg.com/jquery"></script>
  <script src="module-a.js"></script>
  <script src="module-b.js"></script>
  <script>
    moduleA.method1()
    moduleB.method1()
  </script>
</body>
</html>

```
:::


::: slot code-module1
```js
└─ 02-configuation
   ├── src
   │   ├── heading.js
   │   └── index.js
   └── index.html

```
:::

::: slot code-module2
```js
// ./src/heading.js
export default () => {
  const element = document.createElement('h2')
  element.textContent = 'Hello webpack'
  element.addEventListener('click', () => alert('Hello webpack'))
  return element
}

```
:::

::: slot code-module3
```js
// ./src/index.js
import createHeading from './heading.js'
const heading = createHeading()
document.body.append(heading)

```
:::

::: slot code-module4
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Webpack - 快速上手</title>
</head>
<body>
  <script type="module" src="src/index.js"></script>
</body>
</html>


```
:::

::: slot code-module5
```js
 └─ 02-configuation
    ├── src
    │ ├── heading.js
    │ └── main.js
    ├── index.html
    ├── package.json
+   └── webpack.config.js ···················· Webpack 配置文件

```
:::

::: slot code-module6
```js
// ./webpack.config.js
module.exports = {
  entry: './src/main.js'
}

```
:::

::: slot code-module7
```js
// ./webpack.config.js
const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'output')
  }
}

```
:::

::: slot code-module8
```js
$ npm init --yes
$ npm i webpack webpack-cli --save-dev

```
:::


::: slot code-module9
```js
$ npx webpack --version
v4.42.1

```
:::

::: slot code-module10
```js
$ npx webpack

```
:::

::: slot code-module11
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Webpack - 快速上手</title>
</head>
<body>
  <script src="dist/main.js"></script>
</body>
</html>

```
:::

::: slot code-module12
```js
{
  "name": "01-getting-started",
  "version": "0.1.0",
  "main": "n/a",
  "author": "zce <w@zce.me> (https://zce.me)",
  "license": "MIT",
  "scripts": {
    "build": "webpack"
  },
  "devDependencies": {
    "webpack": "^4.42.1",
    "webpack-cli": "^3.3.11"
  }
}

```
:::


::: slot code-loader1
```js
 └─ 03-webpack-loader ························ sample root dir
    ├── src ·································· source dir
+   │   └── main.css ························· main styles
    ├── package.json ························· package file
    └── webpack.config.js ···················· webpack config file

```
:::

::: slot code-loader2
```css
/* ./src/main.css */
body {
  margin: 0 auto;
  padding: 0 20px;
  max-width: 800px;
  background: #f4f8fb;
}

```
:::

::: slot code-loader3
```js
module.exports = {
  // 样式文件路径
  entry: './src/main.css',
  output: {
    filename: 'bundle.js'
  }
}

```
:::

::: slot code-loader4
```js
/* ./src/main.css */
console.log('This is a style sheet.') 
/* 只是为了证明 Webpack 默认按照 JS 语法解析模块 */


```
:::

::: slot code-loader5
```js
$ npm install css-loader --save-dev 
# or yarn add css-loader --dev

```
:::

::: slot code-loader6
```js
// ./src/webpack.config.js
module.exports = {
  entry: './src/main.css',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 根据打包过程中所遇到文件路径匹配是否使用这个 loader
        use: 'css-loader' // 指定具体的 loader
      }
    ]
  }
}

```
:::

::: slot code-loader7
```js
// ./src/webpack.config.js
module.exports = {
  entry: './src/main.css',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // 对同一个模块使用多个 loader，注意顺序
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}

```
:::

::: slot code-loader8
```js
 └─ 03-webpack-loader ······················· sample root dir
    ├── src ································· source dir
    │   ├── style.css ······················· style module
+   │   └── main.js ························· entry module
    ├── package.json ························ package file
    └── webpack.config.js ··················· webpack config file

```
:::

::: slot code-loader9
```js
// ./src/main.js
import './style.css'

// app logic...
console.log('App starts running~')

```
:::

::: slot code-loader10
```js
 └─ 03-webpack-loader ······················· sample root dir
    ├── src ································· source dir
    │   ├── about.md ························ markdown module
    │   └── main.js ························· entry module
    ├── package.json ························ package file
+   ├── markdown-loader.js ·················· markdown loader
    └── webpack.config.js ··················· webpack config file

```
:::

::: slot code-loader11
```js
<!-- ./src/about.md -->
# About

this is a markdown file.

```
:::

::: slot code-loader12
```js
// ./src/main.js
import about from './about.md'

console.log(about)
// 希望 about => '<h1>About</h1><p>this is a markdown file.</p>'

```
:::

::: slot code-loader13
```js
// ./markdown-loader.js
module.exports = source => {
  // 加载到的模块内容 => '# About\n\nthis is a markdown file.'
  console.log(source)
  // 返回值就是最终被打包的内容
  return 'hello loader ~'
}

```
:::

::: slot code-loader14
```js
// ./markdown-loader.js
module.exports = source => {
  // 加载到的模块内容 => '# About\n\nthis is a markdown file.'
  console.log(source)
  // 返回值就是最终被打包的内容
  return 'hello loader ~'
}

```
:::


::: slot code-loader15
```js
// ./markdown-loader.js
module.exports = source => {
  // 加载到的模块内容 => '# About\n\nthis is a markdown file.'
  console.log(source)
  // 返回值就是最终被打包的内容
  // return 'hello loader ~'
  return 'console.log("hello loader ~")'
}

```
:::

::: slot code-loader16
```js
// ./markdown-loader.js
const marked = require('marked')

module.exports = source => {
  // 1. 将 markdown 转换为 html 字符串
  const html = marked(source)
  // html => '<h1>About</h1><p>this is a markdown file.</p>'
  // 2. 将 html 字符串拼接为一段导出字符串的 JS 代码
  const code = `module.exports = ${JSON.stringify(html)}`
  return code 
  // code => 'export default "<h1>About</h1><p>this is a markdown file.</p>"'
}
```
:::

::: slot code-loader17
```js
// ./markdown-loader.js
const marked = require('marked')

module.exports = source => {
  const html = marked(source)
  // const code = `module.exports = ${JSON.stringify(html)}`
  const code = `export default ${JSON.stringify(html)}`
  return code 
}

```
:::

::: slot code-loader18
```js
// ./markdown-loader.js
const marked = require('marked')

module.exports = source => {
  // 1. 将 markdown 转换为 html 字符串
  const html = marked(source)
  return html
}

```
:::

::: slot code-loader19
```js
// ./webpack.config.js
module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          'html-loader',
          './markdown-loader'
        ]
      }
    ]
  }
}

```
:::

::: slot code-plugin1
```js
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

```
:::


::: slot code-plugin2
```js
// ./webpack.config.js

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}

```
:::


::: slot code-plugin3
```js
const HtmlWebpackPlugin = require('html-webpack-plugin')

```
:::



::: slot code-plugin4
```js
// ./webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin()
  ]
}

```
:::


::: slot code-plugin5
```js
// ./webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack Plugin Sample',
      meta: {
        viewport: 'width=device-width'
      }
    })
  ]
}

```
:::


::: slot code-plugin6
```html
<!-- ./src/index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title><%= htmlWebpackPlugin.options.title %></title>
</head>
<body>
  <div class="container">
    <h1>页面上的基础结构</h1>
    <div id="root"></div>
  </div>
</body>
</html>

```
:::


::: slot code-plugin7
```js
// ./webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack Plugin Sample',
      template: './src/index.html'
    })
  ]
}

```
:::

::: slot code-plugin8
```js
// ./webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    // 用于生成 index.html
    new HtmlWebpackPlugin({
      title: 'Webpack Plugin Sample',
      template: './src/index.html'
    }),
    // 用于生成 about.html
    new HtmlWebpackPlugin({
      filename: 'about.html'
    })
  ]
}

```
:::

::: slot code-plugin9
```js
// ./webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack Plugin Sample',
      template: './src/index.html'
    }),
    new CopyWebpackPlugin([
      'public' // 需要拷贝的目录或者路径通配符
    ])
  ]
}

```
:::

::: slot code-plugin10
```js
└─ 04-webpack-plugins ······················· sample root dir
    ├── public ······························· static dir
    │   └── favicon.ico ······················ static file
    ├── src ·································· source dir
    │   └── main.js ·························· entry module
    ├── package.json ························· package file
+   ├── remove-comments-plugin.js ············ my plugin
    └── webpack.config.js ···················· webpack config file

```
:::

::: slot code-plugin11
```js
// ./remove-comments-plugin.js
class RemoveCommentsPlugin {
  apply (compiler) {
    console.log('RemoveCommentsPlugin 启动')
    // compiler => 包含了我们此次构建的所有配置信息
  }
}

```
:::

::: slot code-plugin12
```js
// ./remove-comments-plugin.js
class RemoveCommentsPlugin {
  apply (compiler) {
    compiler.hooks.emit.tap('RemoveCommentsPlugin', compilation => {
      // compilation => 可以理解为此次打包的上下文
      for (const name in compilation.assets) {
        console.log(name) // 输出文件名称
      }
    })
  }
}

```
:::

::: slot code-plugin13
```js
// ./remove-comments-plugin.js
class RemoveCommentsPlugin {
  apply (compiler) {
    compiler.hooks.emit.tap('RemoveCommentsPlugin', compilation => {
      // compilation => 可以理解为此次打包的上下文
      for (const name in compilation.assets) {
        // console.log(name)
        console.log(compilation.assets[name].source()) // 输出文件内容
      }
    })
  }
}

```
:::


::: slot code-plugin14
```js
// ./remove-comments-plugin.js
class RemoveCommentsPlugin {
  apply (compiler) {
    compiler.hooks.emit.tap('RemoveCommentsPlugin', compilation => {
      // compilation => 可以理解为此次打包的上下文
      for (const name in compilation.assets) {
        if (name.endsWith('.js')) {
          const contents = compilation.assets[name].source()
          const noComments = contents.replace(/\/\*{2,}\/\s?/g, '')
          compilation.assets[name] = {
            source: () => noComments,
            size: () => noComments.length
          }
        }
      }
    })
  }
}

```
:::


::: slot code-Dev1
```js
# 可以先通过 npm 全局安装 browser-sync 模块，然后再使用这个模块
$ npm install browser-sync --global
$ browser-sync dist --watch

# 或者也可以使用 npx 直接使用远端模块
$ npx browser-sync dist --watch

```
:::

::: slot code-Dev2
```js
# 安装 webpack-dev-server
$ npm install webpack-dev-server --save-dev
# 运行 webpack-dev-server
$ npx webpack-dev-server

```
:::

::: slot code-Dev3
```js
// ./webpack.config.js
const path = require('path')

module.exports = {
  // ...
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
    // ...
    // 详细配置文档：https://webpack.js.org/configuration/dev-server/
  }
}

```
:::


::: slot code-Dev4
```js
// ./webpack.config.js
module.exports = {
  // ...
  devServer: {
    contentBase: 'public'
  }
}

```
:::

::: slot code-Dev5
```js
// ./webpack.config.js
module.exports = {
  // ...
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.github.com'
      }
    }
  }
}

```
:::

::: slot code-Dev6
```js
// ./webpack.config.js
module.exports = {
  // ...
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.github.com',
        pathRewrite: {
          '^/api': '' // 替换掉代理地址中的 /api
        }
      }
    }
  }
}

```
:::

::: slot code-Dev7
```js
// ./webpack.config.js
module.exports = {
  // ...
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.github.com',
        pathRewrite: {
          '^/api': '' // 替换掉代理地址中的 /api
        },
        changeOrigin: true // 确保请求 GitHub 的主机名就是：api.github.com
      }
    }
  }
}

```
:::

::: slot code-SourceMap1
```js
// ./webpack.config.js
module.exports = {
  devtool: 'source-map' // source map 设置
}
```
:::

::: slot code-SourceMap2
```js
const code = 'console.log("foo~")'
eval(code) // 将 code 中的字符串作为 JS 代码执行

```
:::

::: slot code-SourceMap3
```js
// ./webpack.config.js
module.exports = {
  devtool: 'eval'
}

```
:::

::: slot code-SourceMap4
```js
└─ 07-devtool-diff
   ├── src
   │   ├── heading.js
   │   └── main.js
   ├── package.json
   └── webpack.config.js

```
:::

::: slot code-SourceMap5
```js
// ./src/main.js
import createHeading from './heading.js'
const heading = createHeading()
document.body.append(heading)
console.log('main.js running')
// 运行时错误
console.log111('main.js running')

```
:::

::: slot code-SourceMap6
```js
const allDevtoolModes = [
  'eval',
  'cheap-eval-source-map',
  'cheap-module-eval-source-map',
  'eval-source-map',
  'cheap-source-map',
  'cheap-module-source-map',
  'inline-cheap-source-map',
  'inline-cheap-module-source-map',
  'source-map',
  'inline-source-map',
  'hidden-source-map',
  'nosources-source-map'
]

```
:::

::: slot code-SourceMap7
```js
// ./webpack.config.js
module.exports = [
  {
    entry: './src/main.js',
    output: {
      filename: 'output1.js'
    }
  },
  {
    entry: './src/main.js',
    output: {
      filename: 'output2.js'
    }
  }
]

```
:::

::: slot code-SourceMap8
```js
// ./webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')

const allModes = [
  'eval',
  'cheap-eval-source-map',
  'cheap-module-eval-source-map',
  'eval-source-map',
  'cheap-source-map',
  'cheap-module-source-map',
  'inline-cheap-source-map',
  'inline-cheap-module-source-map',
  'source-map',
  'inline-source-map',
  'hidden-source-map',
  'nosources-source-map'
]

module.exports = allModes.map(item => ({
  devtool: item,
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: `js/${item}.js`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: `${item}.html`
    })
  ]
}))

```
:::


::: slot code-HMR1
```js
// ./webpack.config.js
const webpack = require('webpack')

module.exports = {
  // ...
  devServer: {
    // 开启 HMR 特性，如果资源不支持 HMR 会 fallback 到 live reloading
    hot: true
    // 只使用 HMR，不会 fallback 到 live reloading
    // hotOnly: true
  },
  plugins: [
    // ...
    // HMR 特性所需要的插件
    new webpack.HotModuleReplacementPlugin()
  ]
}

```
:::

::: slot code-HMR2
```js
// ./src/main.js
import createEditor from './editor'
import logo from './icon.png'
import './global.css'

const img = new Image()
img.src = logo
document.body.appendChild(img)

const editor = createEditor()
document.body.appendChild(editor)

```
:::

::: slot code-HMR3
```js
// ./main.js

// ... 原本的业务代码

module.hot.accept('./editor', () => {
  // 当 ./editor.js 更新，自动执行此函数
  console.log('editor 更新了～～')
})

```
:::

::: slot code-HMR4
```js
// ./main.js
import createEditor from './editor'

// ... 原本的业务代码

console.log(createEditor)
module.hot.accept('./editor', () => {
  console.log(createEditor)
})

```
:::

::: slot code-HMR5
```js
// ./main.js
import createEditor from './editor'

const editor = createEditor()
document.body.appendChild(editor)

// ... 原本的业务代码

// HMR -----------------------------------
module.hot.accept('./editor', () => {
  document.body.removeChild(editor) // 移除之前创建的元素
  const newEditor = createEditor() // 用新模块创建新元素
  document.body.appendChild(newEditor)
})

```
:::

::: slot code-HMR6
```js
// ./main.js
import createEditor from './editor'

const editor = createEditor()
document.body.appendChild(editor)

// ... 原本的业务代码

// HMR -----------------------------------
let lastEditor = editor
module.hot.accept('./editor', () => {
  document.body.removeChild(lastEditor) // 移除之前创建的元素
  lastEditor = createEditor() // 用新模块创建新元素
  document.body.appendChild(lastEditor)
})

```
:::

::: slot code-HMR7
```js
// ./main.js
import createEditor from './editor'

const editor = createEditor()
document.body.appendChild(editor)

// ... 原本的业务代码

// HMR --------------------------------
let lastEditor = editor
module.hot.accept('./editor', () => {
  // 当 editor.js 更新，自动执行此函数
  // 临时记录更新前编辑器内容
  const value = lastEditor.innerHTML
  // 移除更新前的元素
  document.body.removeChild(lastEditor)
  // 创建新的编辑器
  // 此时 createEditor 已经是更新过后的函数了
  lastEditor = createEditor()
  // 还原编辑器内容
  lastEditor.innerHTML = value
  // 追加到页面
  document.body.appendChild(lastEditor)
})

```
:::


::: slot code-HMR8
```js
// ./src/main.js
import logo from './icon.png'
// ... 其他代码
module.hot.accept('./icon.png', () => {
  // 当 icon.png 更新后执行
  // 重写设置 src 会触发图片元素重新加载，从而局部更新图片
  img.src = logo
})

```
:::

::: slot code-HMR9
```js
// ./src/main.js
// ... 其他代码
module.hot.accept('./editor', () => {
  // 刻意造成运行异常
  undefined.foo()
})

```
:::

::: slot code-HMR10
```js
// ./webpack.config.js
const webpack = require('webpack')

module.exports = {
  // ...
  devServer: {
    // 只使用 HMR，不会 fallback 到 live reloading
    hotOnly: true
  },
  plugins: [
    // ...
    // HMR 特性所需要的插件
    new webpack.HotModuleReplacementPlugin()
  ]
}

```
:::

::: slot code-HMR11
```js
// HMR -----------------------------------
if (module.hot) { // 确保有 HMR API 对象
  module.hot.accept('./editor', () => {
    // ...
  })
}

```
::: 

::: slot code-optimize1
```js
└─ 09-tree-shaking
   ├── src
   │   ├── components.js
   │   └── main.js
   ├── package.json
   └── webpack.config.js

```
:::

::: slot code-optimize2
```js
// ./src/components.js
export const Button = () => {
  return document.createElement('button')
  console.log('dead-code')
}

export const Link = () => {
  return document.createElement('a')
}

export const Heading = level => {
  return document.createElement('h' + level)
}

```
:::

::: slot code-optimize3
```js
// ./src/main.js
import { Button } from './components'
document.body.appendChild(Button())

```
:::

::: slot code-optimize4
```js
// ./src/components.js
export const Button = () => {
  return document.createElement('button')
  // 未引用代码
  console.log('dead-code')
}
// 未引用代码
export const Link = () => {
  return document.createElement('a')
}
// 未引用代码
export const Heading = level => {
  return document.createElement('h' + level)
}

```
:::

::: slot code-optimize5
```js
// ./webpack.config.js
module.exports = {
  // ... 其他配置项
  optimization: {
    // 模块只导出被使用的成员
    usedExports: true
  }
}

```
:::

::: slot code-optimize6
```js
// ./webpack.config.js
module.exports = {
  // ... 其他配置项
  optimization: {
    // 模块只导出被使用的成员
    usedExports: true,
    // 压缩输出结果
    minimize: true
  }
}

```
:::

::: slot code-optimize7
```js
// ./webpack.config.js
module.exports = {
  // ... 其他配置项
  optimization: {
    // 模块只导出被使用的成员
    usedExports: true,
    // 尽可能合并每一个模块到一个函数中
    concatenateModules: true,
    // 压缩输出结果
    minimize: false
  }
}

```
:::

::: slot code-optimize8
```js
// ./webpack.config.js
module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env']
            ]
          }
        }
      }
    ]
  },
  optimization: {
    usedExports: true
  }
}

```
:::


::: slot code-optimize9
```js
// ./webpack.config.js
module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { modules: 'commonjs' }]
            ]
          }
        }
      }
    ]
  },
  optimization: {
    usedExports: true
  }
}

```
:::

::: slot code-optimize10
```js
.
├── src
│   ├── components
│   │   ├── button.js
│   │   ├── heading.js
│   │   ├── index.js
│   │   └── link.js
│   └── main.js
├── package.json
└── webpack.config.js
```
:::

::: slot code-optimize11
```js
// ./src/components/index.js
export { default as Button } from './button'
export { default as Link } from './link'
export { default as Heading } from './heading'

```
:::

::: slot code-optimize12
```js
// ./src/components/button.js
console.log('Button component~') // 副作用代码

export default () => {
  return document.createElement('button')
}

//我们再到打包入口文件（main.js）中去载入 components 中的 Button 成员，具体代码如下：

// ./src/main.js
import { Button } from './components'

document.body.appendChild(Button())

```
:::

::: slot code-optimize13
```js
// ./webpack.config.js
module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js'
  },
  optimization: {
    sideEffects: true
  }
}

```
:::

::: slot code-optimize14
```js
{
  "name": "09-side-effects",
  "version": "0.1.0",
  "author": "zce <w@zce.me> (https://zce.me)",
  "license": "MIT",
  "scripts": {
    "build": "webpack"
  },
  "devDependencies": {
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.11"
  },
  "sideEffects": false
}

```
:::

::: slot code-optimize15
```js
// ./src/extend.js
// 为 Number 的原型添加一个扩展方法
Number.prototype.pad = function (size) {
  const leadingZeros = Array(size + 1).join(0)
  return leadingZeros + this
}

```
:::

::: slot code-optimize16
```js
// ./src/main.js
import './extend' // 内部包含影响全局的副作用

console.log((8).pad(3)) // => '0008'

```
:::

::: slot code-optimize17
```js
{
  "name": "09-side-effects",
  "version": "0.1.0",
  "author": "zce <w@zce.me> (https://zce.me)",
  "license": "MIT",
  "scripts": {
    "build": "webpack"
  },
  "devDependencies": {
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.11"
  },
  "sideEffects": [
    "./src/extend.js",
    "*.css"
  ]
}

```
:::

::: slot code-optimize18
```js
.
├── dist
├── src
│   ├── common
│   │   ├── fetch.js
│   │   └── global.css
│   ├── album.css
│   ├── album.html
│   ├── album.js
│   ├── index.css
│   ├── index.html
│   └── index.js
├── package.json
└── webpack.config.js

```
:::

::: slot code-optimize19
```js
// ./webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    index: './src/index.js',
    album: './src/album.js'
  },
  output: {
    filename: '[name].bundle.js' // [name] 是入口名称
  },
  // ... 其他配置
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Multi Entry',
      template: './src/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Multi Entry',
      template: './src/album.html',
      filename: 'album.html'
    })
  ]
}

```
:::

::: slot code-optimize20
```js
// ./webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    index: './src/index.js',
    album: './src/album.js'
  },
  output: {
    filename: '[name].bundle.js' // [name] 是入口名称
  },
  // ... 其他配置
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Multi Entry',
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index'] // 指定使用 index.bundle.js
    }),
    new HtmlWebpackPlugin({
      title: 'Multi Entry',
      template: './src/album.html',
      filename: 'album.html',
      chunks: ['album'] // 指定使用 album.bundle.js
    })
  ]
}

```
:::

::: slot code-optimize21
```js
// ./webpack.config.js
module.exports = {
  entry: {
    index: './src/index.js',
    album: './src/album.js'
  },
  output: {
    filename: '[name].bundle.js' // [name] 是入口名称
  },
  optimization: {
    splitChunks: {
      // 自动提取所有公共模块到单独 bundle
      chunks: 'all'
    }
  }
  // ... 其他配置
}

```
:::

::: slot code-optimize22
```js
.
├── src
│   ├── album
│   │   ├── album.css
│   │   └── album.js
│   ├── common
│   │   ├── fetch.js
│   │   └── global.css
│   ├── posts
│   │   ├── posts.css
│   │   └── posts.js
│   ├── index.html
│   └── index.js
├── package.json
└── webpack.config.js

```
:::


::: slot code-optimize23
```js
// ./src/index.js
import posts from './posts/posts'
import album from './album/album'
const update = () => {
  const hash = window.location.hash || '#posts'
  const mainElement = document.querySelector('.main')
  mainElement.innerHTML = ''
  if (hash === '#posts') {
    mainElement.appendChild(posts())
  } else if (hash === '#album') {
    mainElement.appendChild(album())
  }
}
window.addEventListener('hashchange', update)
update()

```
:::


::: slot code-optimize24
```js
// ./src/index.js
// import posts from './posts/posts'
// import album from './album/album'
const update = () => {
  const hash = window.location.hash || '#posts'
  const mainElement = document.querySelector('.main')
  mainElement.innerHTML = ''
  if (hash === '#posts') {
    // mainElement.appendChild(posts())
    import('./posts/posts').then(({ default: posts }) => {
      mainElement.appendChild(posts())
    })
  } else if (hash === '#album') {
    // mainElement.appendChild(album())
    import('./album/album').then(({ default: album }) => {
      mainElement.appendChild(album())
    })
  }
}
window.addEventListener('hashchange', update)
update()

```
:::


::: slot code-optimize25
```js
// 魔法注释
import(/* webpackChunkName: 'posts' */'./posts/posts')
  .then(({ default: posts }) => {
    mainElement.appendChild(posts())
  })

```
:::


::: slot code-speed1
```js
// ./webpack.config.js
module.exports = (env, argv) => {
  return {
    // ... webpack 配置
  }
}

```
:::

::: slot code-speed2
```js
// ./webpack.config.js
module.exports = (env, argv) => {
  const config = {
    // ... 不同模式下的公共配置
  }
  return config
}

```
:::

::: slot code-speed3
```js
// ./webpack.config.js
module.exports = (env, argv) => {
  const config = {
    // ... 不同模式下的公共配置
  }

  if (env === 'development') {
    // 为 config 添加开发模式下的特殊配置
    config.mode = 'development'
    config.devtool = 'cheap-eval-module-source-map'
  } else if (env === 'production') {
    // 为 config 添加生产模式下的特殊配置
    config.mode = 'production'
    config.devtool = 'nosources-source-map'
  }

  return config
}

```
:::

::: slot code-speed4
```js
.
├── webpack.common.js ···························· 公共配置
├── webpack.dev.js ······························· 开发模式配置
└── webpack.prod.js ······························ 生产模式配置

```
:::

::: slot code-speed5
```js
// ./webpack.common.js
module.exports = {
  // ... 公共配置
}
// ./webpack.prod.js
const common = require('./webpack.common')
module.exports = Object.assign(common, {
  // 生产模式配置
})
// ./webpack.dev.js
const common = require('./webpack.common')
module.exports = Object.assign(common, {
  // 开发模式配置
})

```
:::

::: slot code-speed6
```js
// ./webpack.common.js
module.exports = {
  // ... 公共配置
}
// ./webpack.prod.js
const merge = require('webpack-merge')
const common = require('./webpack.common')
module.exports = merge(common, {
  // 生产模式配置
})
// ./webpack.dev.jss
const merge = require('webpack-merge')
const common = require('./webpack.common')
module.exports = merge(common, {
  // 开发模式配置
})

```
:::


::: slot code-speed7
```js
// ./webpack.config.js
const webpack = require('webpack')
module.exports = {
/  // ... 其他配置
  plugins: [
    new webpack.DefinePlugin({
      API_BASE_URL: 'https://api.example.com'
    })
  ]
}

```
:::


::: slot code-speed8
```js
// ./src/main.js
console.log(API_BASE_URL)

```
:::


::: slot code-speed9
```js
// ./webpack.config.js
const webpack = require('webpack')
module.exports = {
  // ... 其他配置
  plugins: [
    new webpack.DefinePlugin({
      // 值要求的是一个代码片段
      API_BASE_URL: '"https://api.example.com"'
    })
  ]
}

```
:::


::: slot code-speed10
```js
// ./webpack.config.js
const webpack = require('webpack')
module.exports = {
  // ... 其他配置
  plugins: [
    new webpack.DefinePlugin({
      // 值要求的是一个代码片段
      API_BASE_URL: JSON.stringify('https://api.example.com')
    })
  ]
}

```
:::

::: slot code-speed11
```js
// ./webpack.config.js
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  mode: 'none',
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 'style-loader', // 将样式通过 style 标签注入
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
}

```
:::


::: slot code-speed12
```js
// ./webpack.config.js
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = {
  mode: 'none',
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new OptimizeCssAssetsWebpackPlugin()
  ]
}

```
:::


::: slot code-speed13
```js
// ./webpack.config.js
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = {
  mode: 'none',
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js'
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin()
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
}

```
:::



::: slot code-speed14
```js
// ./webpack.config.js
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
module.exports = {
  mode: 'none',
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js'
  },
  optimization: {
    minimizer: [
      new TerserWebpackPlugin(),
      new OptimizeCssAssetsWebpackPlugin()
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
}

```
:::


::: slot code-speed11
```js
// ./src/extend.js
// 为 Number 的原型添加一个扩展方法
Number.prototype.pad = function (size) {
  const leadingZeros = Array(size + 1).join(0)
  return leadingZeros + this
}

```
:::


::: slot code-speed11
```js
// ./src/extend.js
// 为 Number 的原型添加一个扩展方法
Number.prototype.pad = function (size) {
  const leadingZeros = Array(size + 1).join(0)
  return leadingZeros + this
}

```
:::


::: slot code-speed11
```js
// ./src/extend.js
// 为 Number 的原型添加一个扩展方法
Number.prototype.pad = function (size) {
  const leadingZeros = Array(size + 1).join(0)
  return leadingZeros + this
}

```
:::

::: slot code-speed11
```js
// ./src/extend.js
// 为 Number 的原型添加一个扩展方法
Number.prototype.pad = function (size) {
  const leadingZeros = Array(size + 1).join(0)
  return leadingZeros + this
}

```
:::

::: slot code-deploy1
```js
const path = require('path')
module.exports = {
    entry: '',  // 入口文件地址,可以是数组，字符串，对象形式，多入口对应多出口
    mode:  '', // 默认为生产模式production   开发模式development  不开启none
    output: {
        // 把输出的打包文件放在下面地址，path必须是绝对路径
        path: path.resolve(__dirname, ''),
        filename: '', //打包好的文件名称，'[name].js',[name]占位符
    },
    // 单入口文件，一个bundle文件，包含一至多个chunks，一个chunk包含一至多个module
    // 多入口文件，多个bundle文件
    devtool: "source-map"
//     eval:速度最快,使用eval包裹模块代码,
//     source-map： 产生 .map 文件
//     cheap:较快，不包含列信息
//     Module：第三方模块，包含loader的sourcemap（比如jsx to js ，babel的sourcemap）
//     inline： 将 .map 作为DataURI嵌入，不单独生成 .map 文件
    devtool:"cheap-module-eval-source-map",// 开发环境配置
//线上不推荐开启
    devtool:"cheap-module-source-map", // 线上⽣生成配置
    // webpack默认能解析js和json文件，loader可以让webpack支持更多类型文件
    module: {
        rules: [
            {
                test: /\.png$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name]_[hash: 6].[ext]",
                        outputPath: "",
                        limit: 1024, //超出限制使用base64
                    }
                }
                use: ['style-loader', 'css-loader'] // 多个loader从后往前执行
            }
        ]
    },
    // 插件是一种作用于webpack整个打包生命周期的机制，每一个插件都会对应一个生命周期
    plugins: [new CleanWebpackPlugin({
        title: '' //用来生成页面的 title 元素
        filename: '' //输出的 HTML 文件名，默认是 index.html, 也可以直接配置带有子目录。
        template: '' //模板文件路径，支持加载器，比如 html./index.html
        inject: true | 'head' | 'body' | false //注入所有的资源到特定的 template 或者templateContent 中，如果设置为 true 或者 body，所有的 javascript 资源将被放置到 body元素的底部，'head' 将放置到 head 元素中。
        favicon: //添加特定的 favicon 路径到输出的 HTML 文件中。
        minify: {} | false //传递 html-minifier 选项给 minify 输出
        hash: true | false //如果为 true, 将添加一个唯一的 webpack 编译 hash 到所有包含的脚本和CSS 文件，对于解除 cache 很有用。
        cache: true | false //如果为 true, 这是默认值，仅在文件修改之后才会发布文件。
        showErrors: true | false//如果为 true, 这是默认值，错误信息会写入到 HTML 页面中
        chunks: //允许只添加某些块 (比如，仅 unit test 块)
        chunksSortMode: //允许控制块在添加到页面之前的排序方式，支持的值：'none' | 'default' | {function}-default:'auto'
        excludeChunks: //允许跳过某些块，(比如，跳过单元测试的块)
    }), new htmlWebpackPlugin()],
}

// 修改下package.json
"scripts": {
    "server": "webpack-dev-server" //webpack-dev-server需要安装，不需要重新启动并手动刷新页面
},
// 在webpack.config.js配置：
devServer: {
    contentBase: "./dist",
    open: true,
    port: 8081,
    proxy: {
        "/api": {
            target: "http://localhost:9092"
        }
    },
    //Hot Module Replacement (HMR:热模块替换)
    open: true,
    hot:true, // 开启HMR
    //即便HMR不生效，浏览器也不自动刷新，就开启hotOnly
    hotOnly:true
},

npm run server // 启动，启动服务后，会发现dist目录没有了了，这是因为devServer把打包后的模块不会放在dist目录下，而是放到内存中，从而提升速度
```
:::

<webpack-webpack/>