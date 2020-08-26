::: slot title-rollup
## Rollup与Webpack
:::

::: slot title-Parcel
## Parcel零配置完成打包
:::

::: slot code-rollup1
```js
.
├── src
│   ├── index.js
│   ├── logger.js
│   └── messages.js
└── package.json

```
:::

::: slot code-rollup2
```js
// ./src/messages.js
export default {
  hi: 'Hey Guys, I am zce~'
}
// ./src/logger.js
export const log = msg => {
  console.log('---------- INFO ----------')
  console.log(msg)
  console.log('--------------------------')
}
export const error = msg => {
  console.error('---------- ERROR ----------')
  console.error(msg)
  console.error('---------------------------')
}
// ./src/index.js
import { log } from './logger'
import messages from './messages'
log(messages.hi)

```
:::


::: slot code-rollup3
```js
 .
 ├── src
 │   ├── index.js
 │   ├── logger.js
 │   └── messages.js
 ├── package.json
+└── rollup.config.js

```
:::


::: slot code-rollup4
```js
// ./rollup.config.js
export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'es' // 输出格式
  }
}

```
:::


::: slot code-rollup5
```js
// ./rollup.config.js
// 所有 Rollup 支持的格式
const formats = ['es', 'amd', 'cjs', 'iife', 'umd', 'system']
export default formats.map(format => ({
  input: 'src/index.js',
  output: {
    file: `dist/bundle.${format}.js`,
    format
  }
}))

```
:::


::: slot code-rollup6
```js
// ./rollup.config.js
import json from '@rollup/plugin-json'
export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'es'
  },
  plugins: [
    json()
  ]
}

```
:::

::: slot code-rollup7
```js
// ./src/index.js
import { name, version } from '../package.json'
console.log(name, version)
```
:::

::: slot code-rollup8
```js
// ./rollup.config.js
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'es'
  },
  plugins: [
    json(),
    resolve()
  ]
}

```
:::

::: slot code-rollup9
```js
// ./src/index.js
import { camelCase } from 'lodash-es'
console.log(camelCase('hello rollup'))

```
:::

::: slot code-rollup10
```js
// ./src/cjs-module.js
module.exports = {
  foo: 'bar'
}

```
:::

::: slot code-rollup11
```js
// ./src/index.js
// 导入 CommonJS 模块成员
import cjs from './cjs-module'
// 使用模块成员
console.log(cjs) // cjs => { foo: 'bar' }

```
:::


::: slot code-rollup12
```js
// ./src/index.js
// 动态导入的模块会自动分包
import('./logger').then(({ log }) => {
  log('code splitting~')
})

```
:::

::: slot code-rollup13
```js
// ./rollup.config.js
export default {
  input: 'src/index.js',
  output: {
    // file: 'dist/bundle.js', // code splitting 输出的是多个文件
    dir: 'dist',
    format: 'es'
  }
}

```
:::

::: slot code-rollup14
```js
// ./rollup.config.js
export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'amd'
  }
}

```
:::


::: slot code-rollup15
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>AMD Format output</title>
</head>
<body>
  <script src="https://unpkg.com/requirejs@2.3.6/require.js" data-main="dist/index.js"></script>
</body>
</html>

```
:::


::: slot code-Parcel1
```js
.
├── src
│   ├── index.html
│   ├── logger.js
│   └── main.js
└── package.json

```
:::

::: slot code-Parcel2
```html
<!-- ./src/index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Parcel Tutorials</title>
</head>
<body>
  <script src="main.js"></script>
</body>
</html>

```
:::


::: slot code-Parcel3
```js
// ./src/main.js
import { log } from './logger'
log('hello parcel')
// ./src/logger.js
export const log = msg => {
  console.log('---------- INFO ----------')
  console.log(msg)
}

```
:::


::: slot code-Parcel4
```js
// ./src/main.js
import { log } from './logger'
log('hello parcel')
// HMR API
if (module.hot) {
  module.hot.accept(() => {
    console.log('HMR～')
  })
}

```
:::


::: slot code-Parcel5
```js
 .
 ├── src
 │   ├── index.html
 │   ├── logger.js
 │   ├── main.js
+│   └── style.css
 └── package.json

```
:::


::: slot code-Parcel6
```js
// ./src/main.js
import { log } from './logger'
import './style.css'
log('hello parcel')

```
:::


::: slot code-Parcel7
```js
// ./src/main.js
// import $ from 'jquery'
import { log } from './logger'
log('hello parcel')
import('jquery').then($ => {
  $(document.body).append('<h1>Hello Parcel</h1>')
})

```
:::



<webpack-Rollup/>