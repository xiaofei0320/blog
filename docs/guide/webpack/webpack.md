::: slot title-index
### webpack配置
:::

::: slot code-method1
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