<template>
    <div>
        <Content slot-key="title1"/>
        <ul>
            <li>每个js文件都是一个模块</li>
            <li>模块的导出 module.exports</li>
            <li>模块的导入require</li>
        </ul>
        <Content slot-key="title2"/>
        <ul>
            <li>核心模块/内置模块 fs http path 不需要安装 引入的时候不需要增加相对路径、绝对路径</li>
            <li>第三方模块需要安装</li>
            <li>自定义模块需要通过绝对路径或者相对路径进行引入</li>
        </ul>
        <Content slot-key="title3"/>
        <p>实现node中的模块化机制</p>
        <Content slot-key="code1"/>
        <Content slot-key="title4"/>
        <p>node中自己实现的发布订阅模块,订阅是将方法对应成一种一对多的关系，on方法用来订阅事件</p>
        <Content slot-key="code2"/>
        <p>off方法可以移除对应的事件监听</p>
        <Content slot-key="code3"/>
        <p>emit用来执行订阅的事件</p>
        <Content slot-key="code4"/>
        <p>once绑定事件当执行后自动删除订阅的事件</p>
        <Content slot-key="code5"/>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>