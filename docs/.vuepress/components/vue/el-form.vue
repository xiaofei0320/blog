<template>
    <div>
        <Content slot-key="header"/>
        <Content slot-key="title-index"/>
        <KForm :model="model" :rules="rules" ref="loginForm">
            <KFormItem label="用户名" prop="username">
                <KInput v-model="model.username" placeholder="请输入用户名"></KInput>
            </KFormItem>
            <KFormItem label="密码" prop="password">
                <KInput v-model="model.password" placeholder="请输入密码"></KInput>
            </KFormItem>
            <KFormItem>
                <button @click="onClick">登录</button>
            </KFormItem>
        </KForm>
        <h4>代码使用方式如下</h4>
        <Content slot-key="code-index"/>
        <p>KForm组件中代码如下</p>
        <Content slot-key="code-kform"/>
        <p>KFormItem组件中代码如下</p>
        <Content slot-key="code-kformItem"/>
        <p>KFormInput组件中代码如下</p>
        <Content slot-key="code-kformInput"/>
        <Content slot-key="title-emitter"/>
        <Content slot-key="code-emitter"/>
    </div>
</template>

<script>
    import KInput from './form/KInput.vue'
    import KFormItem from './form/KFormItem.vue'
    import KForm from './form/KForm.vue'
    import Notice from './form/Notice.vue'
    import create from './form/create.js'
    export default {
        components: {
            KInput,
            KFormItem,
            KForm
        },
        data() {
            return {
                rules: {
                    username: [{ required: true, message: "请输⼊⽤户名" }],
                    password: [{ required: true, message: "请输⼊密码" }]
                },
                model: {
                    username: '',
                    password: ''
                }
            };
        },
        methods: {
            onClick() {
                this.$refs.loginForm.validate(isValid => {
                    if(isValid) {
                    //     create(Notice, {
                    //        title: '校验成功',
                    //    }).show()
                    } else {
                    //     create(Notice, {
                    //        title: '校验失败',
                    //        message: '校验错误请重试'
                    //    }).show()
                    }
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>