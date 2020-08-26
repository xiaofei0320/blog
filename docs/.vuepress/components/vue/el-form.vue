<template>
  <div>
    <Content slot-key="header" />
    <Content slot-key="title-index" />
    <div class="demo-block demo-zh-CN demo-form">
      <KForm :model="model" :rules="rules" ref="loginForm">
        <KFormItem label="用户名" prop="username">
          <KInput v-model="model.username" placeholder="请输入用户名"></KInput>
        </KFormItem>
        <KFormItem label="密码" prop="password">
          <KInput v-model="model.password" placeholder="请输入密码"></KInput>
        </KFormItem>
        <KFormItem>
          <button class="el-button--primary" @click="onClick">登录</button>
        </KFormItem>
      </KForm>
    </div>
    <p>该功能使用了表单功能，挂载功能，以及element中的Notification 通知功能，这里不展示Notification的代码，比较简单，可以去源码中看。这里主要展示表单功能的代码以及需要注意的点，实现简单的挂载功能</p>
    <h4>代码使用方式如下</h4>
    <Content slot-key="code-index" />
    <Content slot-key="title-kform" />
    <Content slot-key="code-kform" />
    <Content slot-key="title-kformItem" />
    <Content slot-key="code-kformItem" />
    <Content slot-key="title-kformInput" />
    <Content slot-key="code-kformInput" />
    <Content slot-key="title-emitter" />
    <Content slot-key="code-emitter" />
  </div>
</template>

<script>
import KInput from "./form/KInput.vue";
import KFormItem from "./form/KFormItem.vue";
import KForm from "./form/KForm.vue";
import Notice from "./form/Notice.vue";
import Vue from "vue";
import { create } from "./form/create.js";
Vue.prototype.$create = create;
export default {
  components: {
    KInput,
    KFormItem,
    KForm,
  },
  data() {
    return {
      rules: {
        username: [{ required: true, message: "请输⼊⽤户名" }],
        password: [{ required: true, message: "请输⼊密码" }],
      },
      model: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    onClick() {
      this.$refs.loginForm.validate((isValid) => {
        if (isValid) {
          this.$create(Notice, {
            title: "校验成功",
          }).show();
        } else {
          this.$create(Notice, {
            title: "校验失败",
            message: "校验错误请重试",
          }).show();
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.demo-block {
  margin-bottom: 24px;
  padding: 24px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
}
.el-button--primary {
  text-align: center;
  padding: 8px 20px;
  margin-left: 92px;
  font-size: 14px;
  border-radius: 4px;
  color: #fff;
  background-color: #005bac;
  border-color: #005bac;
  border: 1px solid #dcdfe6;
}
</style>