<template>
    <div>
        <Content slot-key="title-index1"/>
        <p>单⻚应⽤优秀的⽤户体验，使其逐渐成为主流，⻚⾯内容由JS渲染出来，这种⽅式称为客户端渲染</p>
        <img style="width: 250px; height: 500px;" :src="$withBase('/vue-img/ssr.png')">
        <Content slot-key="title-index2"/>
        <p>SSR解决⽅案，后端渲染出完整的⾸屏的dom结构返回，前端拿到的内容包括⾸屏及完整spa结构，应
⽤激活后依然按照spa⽅式运⾏，这种⻚⾯渲染⽅式被称为服务端渲染 (server side render)</p>
        <img style="width: 250px; height: 500px;" :src="$withBase('/vue-img/ssr1.png')">

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>