<template>
  <div style="display: inline-block">
    <input :value="value" @input="onInput" :placeholder="$attrs.placeholder" />
  </div>
</template>

<script>
import emitter from "./emitter";
export default {
  inheritAttrs: false,
  mixins: [emitter],
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
      // this.$parent.$emit('validate')
      this.dispatch("KFormItem", "validate");
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  width: 300px;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  border-radius: 4px;
  color: #606266;
  border: 1px solid #dcdfe6;
  background-color: #fff;
}
</style>