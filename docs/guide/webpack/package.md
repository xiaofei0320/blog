::: slot title-index
### package配置
:::

::: slot code-method1
```js
{
    "name": ''  //包的名称，发布到npm平台上，显示的名称，业务引入是require(name)的名称。
    "version": '' //包版本，对于业务项目来说，这个往不太重要，但是如果你要发布自⼰己的项目，这个就显得十分重要了。name和version共同决定了唯一一份代码。npm是用npm-semver来解析版本号的
    "description": ''  //包的描述，字符串格式，发布包之后，⽤用户在npmjs.com使用搜索，在结果列表里发现你的包，和对应的描述。
    "keywords": '' //字段是一个字符串数组，其作用与描述相似。 NPM 注册表会为该字段建立索引，能够在有人搜索软件包时帮助找到它们。数组中的每个值都是与你的程序包关联的一个关键字   
    "author": '' //项目的作者。可以为字符串，对象
    "contributors": [] //项目的贡献者
    //author 和 contributors 字段的功能类似。它们都是 people字段，可以是 "Name" 格式的字符串，也可以是具有 name，email，url 字段的对象。email 和 url 都是可选的。author 只供一个人使用， contributors 则可以由多个人组成。
    "homepage": '' //主页信息，一个表示项目首页的url
    "bugs": {} //一个表示接收问题反馈的url地址，也可以是email地址。一般是Github项目下的issues
    "repository": {
        "type": "git",
        "url": "git+https://github.com/xxx.git"
    } //指明你的项目源代码仓库所在位置，这有助于其他人为你的项目贡献(contribute)代码，如果你的git项目是托管在GitHub上的，那么 npm docs 命令是能够找到的。
    "files": [] //表示代码包下载安装完成时包括的所有文件作用和gitignore类似，只不过是反过来的，如果要包含所有文件可以使用[*]表示。  
    "private": true //如果设为true，无法通过 npm publish 发布代码。
    "engines": {
        "node": ">=8",
        "npm": ">= 4.0.0"
    }, //指定项目所依赖的node环境、npm版本等
    "main": '' //项目的主要入口，启动项目的文件,可以指定项目的主要入口，用户安装使用，require()就能返回主要入口文件的export module.exports暴露的对象，
    "license":  //包的许可证，根据许可证的类型，用户知道如何使用它，有哪些限制。
    "license": "ISC" //ISC 许可证
    "license": "MIT" //MIT 许可证 如果你不想提供许可证，或者明确不想授予使用私有或未发布的软件包的权限，则可以将 UNLICENSED 作为许可证
    "dependencies": //业务依赖,列出了项目使用的所有依赖项,使用 npm CLI 安装软件包时，它将下载到你的 node_modules/文件夹中，并将一个条目添加到你的依赖项属性中,⽤用于指定应用依赖的外部包，一些依赖是应用发布上线后，正常执行时所需要的。意思就是这些依赖项应该是线上代码的一部分。所以我们在装包的时候一定要考虑这个包在线上是否用的到， 不要全都放到dependencies中，增加我们打包的体积和效率。
    // npm i packageName --save
    // npm i packageName -S
    // npm install packageName --save
    // npm install packageName -S
    // npm i packageName //npm 5.x版本，不不需要-S/--save指令就会把
    // 依赖添加到dependencies中去。
    "dependencies": {
        "foo" : "1.0.0 - 2.9999.9999", // 指定版本范围
        "bar" : ">=1.0.2 <2.1.2",
        "baz" : ">1.0.2 <=2.3.4",
        "boo" : "2.0.1", // 指定版本
        "qux" : "<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2<3.0.0",
        "asd" : "http://asdf.com/asdf.tar.gz", // 指定包地址
        "til" : "~1.2", // 最近可⽤用版本
        "elf" : "~1.2.3",
        "elf" : "^1.2.3", // 兼容版本
        "two" : "2.x", // 2.1、2.2、...、2.9皆可⽤用
        "thr" : "*", // 任意版本
        "thr2": "", // 任意版本
        "lat" : "latest", // 当前最新
        "dyl" : "file:../dyl", // 本地地址
        "xyz" :
        "git+ssh://git@github.com:npm/npm.git#v1.0.27", // git地址
        "fir" :
        "git+ssh://git@github.com:npm/npm#semver:^5.0",
        "wdy" : "git+https://isaacs@github.com/npm/npm.git",
        "xxy" : "git://github.com/npm/npm.git#v1.0.27",
    }
// 主要版本匹配
// 指定版本：比如 1.2.2 ，遵循“大版本.次要版本.小版本”的格式规定，安装时只安装指定版本。
// 波浪号（tilde）+指定版本：比如 ~1.2.2 ，表示安装1.2.x的最新版本（不低于1.2.2），但是不安装1.3.x，也就是说安装时不改变大版本号和次要版本号。
// 插入号（caret）+指定版本：比如ˆ1.2.2，表示安装1.x.x的最新版本（不低于1.2.2），但是不安装2.x.x，也就是说安装时不改变
// 大版本号。需要注意的是，如果大版本号为0，则插入号的行为与波浪号相同，这是因为此时处于开发阶段，即使是次要版本号变动，也可能带来程序的不兼容。
// latest：安装最新版本
// devDependencies:开发依赖
// 项目开发时需要的依赖，不应该是线上代码的一部分。通常是单
// 元测试或者打包工具等
    "devDependencies": //开发依赖,项目开发时需要的依赖，不应该是线上代码的一部分。通常是单元测试或者打包工具等
    "peerDependencies": //同等/同伴依赖,这种依赖的作用是提示宿主环境去安装插件在 peerDependencies中所指定依赖的包，最终解决插件与所依赖包不一致的问题。
// 举个例子来说明。 element-ui@2.6.3 只是提供一套基于 vue 的 ui 组件库，但它要求宿主环境需要安装指定的 vue 版本，所以你可以看到 element 项目中的 package.json 中具有一项配置："peerDependencies": {"vue": "^2.5.16"},它要求宿主环境安装 3.0.0 > vue@ >= 2.5.16 的版本，也就是 element-ui 的运行依赖宿主环境提供的该版本范围的 vue 依赖包。
    "bundledDependencies": //打包依赖,这种依赖跟 npm pack 打包命令有关,在 bundledDependencies 中指定的依赖包，必须先在 dependencies 和devDependencies 声明过，否则打包会报错。
    "bundleDependencies": ["fe1","fe2"] //执行打包命令 npm pack ，会生成 front-end-1.0.0.tgz 压缩包，并且该压缩包中包含 fe1 和 fe2 两个安装包，这样使用者执行 npm install front-end-1.0.0.tgz 也会安装这两个依赖
    "optionalDependencies": //可选依赖,这种依赖中的依赖项即使安装失败了，也不影响整个安装的过程。需要注意的是，如果一个依赖同时出现在 dependencies 和optionalDependencies 中，那么 optionalDependencies 会获得更高的优先级，可能造成一些预期之外的效果，所以尽量要避免这种情况发生
    "scripts": {
        "build": "cd packages/react-scripts && node bin/react-scripts.js build",
        "changelog": "lerna-changelog",
        "create-react-app": "node tasks/cra.js",
        "e2e": "tasks/e2e-simple.sh",
        "e2e:docker": "tasks/local-test.sh",
        "postinstall": "cd packages/react-error-overlay/ && yarn build:prod",
        "publish": "tasks/publish.sh",
        "start": "cd packages/react-scripts && node bin/react-scripts.js start",
        "test": "cd packages/react-scripts && node bin/react-scripts.js test",
    "format": "prettier --trailing-comma es5 --single-quote --write 'packages/*/*.js' 'packages/*/!(node_modules)/**/*.js'",
        "dev": "rimraf \"config/.conf.json\" && rimraf\"src/next.config.js\",
        "clean": "rimraf ./dist && mkdir dist",
        "prebuild": "npm run clean",
        "build:test": "cross-env NODE_ENV=production webpack"
    } //npm 脚本的原理非常简单。每当执行npm run，就会自动新建一个Shell，在这个 Shell 里面执行指定的脚本命令。因此，只要是Shell（一般是 Bash）可以运行的命令，就可以写在 npm 脚本里面。
    "scripts": {
        "build": "webpack --config build.js",
        "start": "node index.js",
        "test": "tap test/*.js"
    } //然后我们就可以使用npm run ${name}来执行对应脚本
    "bin": {} //package.json 中的字段 bin 表示的是一个可执行文件到指定文件源的映射。通过 npm bin 指令显示当前项目的 bin 目录的路径。例如在 @vue/cli 的 package.json 中："bin": {"vue": "bin/vue.js"},如果全局安装 @vue/cli 的话， @vue/cli 源文件会被安装在全局源文件安装目录（ /user/local/lib/node_modules ）下，而 npm 会在全局可执行 bin 文件安装目录（ /usr/local/bin ）下创建一个指向 /usr/local/lib/node_modules/@vue/cli/bin/vue.js文件的名为 vue 的软链接，这样就可以直接在终端输入 vue 来执行相关命令
    //如果局部安装 @vue/cli 的话， npm 则会在本地项目 ./node_modules/.bin 目录下创建一个指向 ./node_moudles/@vue/cli/bin/vue.js 名为 vue 的软链接，这个时候需要在终端中输入 ./node_modules/.bin/vue 来执行（也可以使用 npx vue 命令来执行，npx 的作用就是为了方便调用项目内部安装的模块）。
    //软链接（符号链接）是一类特殊的可执行文件， 其包含有一条以绝对路径或者相对路径的形式指向其它⽂件或者目录的引用。在 bin 目录下执行 ll 指令可以查看具体的软链接指向。在对链接文件进行读或写操作的时候，系统会自动把该操作转换为对源文件的操作，但删除链接文件时，系统仅删除链接文件，而不删除源文件本身。
}

// Package-lock.json
//现在执行 npm install 的时候，就会在当前目录生成一个 package-lock.json 的文件。用以记录当前状态下实际安装的各个npm package的具体来源和版本号。
//在大版本相同的前提下，如果一个模块在 package.json 中的小版本要大于 package-lock.json 中的小版本，则在执行 npm install 时，会将该模块更新到大版本下的最新的版本，并将版本号更新至 package-lock.json 。如果小于，则被package-lock.json 中的版本锁定。
// 如果一个模块在 package.json 和 package-lock.json 中的大版本不相同，则在执行 npm install 时，都将根据 package.json 中大版本下的最新版本进x行更新，并将版本号更新至 package-lock.json 。
// 如果一个模块在 package.json 中有记录，而在 package-lock.json 中无记录，执行 npm install 后，则会在 package-lock.json 生成该模块的详细记录。同理，一个模块在 package.json 中无记录，而在 package-lock.json 中有记录，执行 npm install 后，则会在 package-lock.json 删除该模块的详细记录。
```
:::

<webpack-package/>