<template>
  <div style="margin: 10px">
    <label v-if="label" style="margin-right: 10px; width: 80px">{{ label }}</label>
    <slot></slot>
    <p class="error" v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import Schema from "async-validator";
import emitter from "./emitter";
export default {
  name: "KFormItem",
  componentName: "KFormItem",
  mixins: [emitter],
  inject: ["form"],
  data() {
    return {
      error: "",
    };
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: String,
  },
  mounted() {
    this.$on("validate", () => {
      this.validate();
    });
    if (this.prop) {
      this.dispatch("KForm", "kkb.form.addField", [this]);
    }
  },
  methods: {
    validate() {
      // 获取校验规则和值
      const rules = this.form.rules[this.prop];
      const value = this.form.model[this.prop];

      // 获取校验器,Schema的参数，key是校验字段名，值是校验规则
      const validator = new Schema({ [this.prop]: rules });

      // 执行校验,参数1是校验目标
      return new Promise((resolve, reject) => {
        validator.validate({ [this.prop]: value }, (error) => {
          if (error) {
            this.error = error[0].message;
            reject();
          } else {
            this.error = "";
            resolve();
          }
        });
      });
    },
  },
};
</script>

<style scoped>
.error {
  margin: 0 0 0 92px;
  font-size: 10px;
  color: red;
}
label {
  text-align: right;
  float: left;
  color: #606266;
  padding: 0 12px 0 0;
  box-sizing: border-box;
}
</style>