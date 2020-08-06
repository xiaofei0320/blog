const navConfig = require('./navConfig.js')
const sidebarConfig = require('./sidebarConfig.js')

module.exports = {
    title: '小匪肥肥的游乐场',
    description: 'VuePress',
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['link', { rel: 'icon', href: '/img/logo.jpg' }],
        //     ['script', { src: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js' }],
        // ['script', { src: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js' }],
        // ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
        // ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }],
    ],
    plugins: [
        // 'demo-block'
    ],
    base: '/blog/',
    themeConfig: {
        logo: '/img/logo.jpg',
        search: true,
        nav: navConfig,
        sidebar: sidebarConfig
    }
}