<template>
  <div class="box" v-if="isShow">
    <h3 class="title">{{title}}</h3>
    <p class="box-content">{{message}}</p>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
    duration: {
      type: Number,
      default: 3000,
    },
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    show() {
      this.isShow = true;
      setTimeout(this.hide, this.duration);
    },
    hide() {
      this.isShow = false;
      this.remove();
    },
  },
};
</script>
<style>
.box {
  position: fixed;
  width: 20%;
  top: 60px;
  right: 5px;
  /* text-align: center; */
  pointer-events: none;
  background-color: #fff;
  border: 1px solid #ebeef5;
  box-sizing: border-box;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.title {
  text-align: left;
  margin: 15px 15px 0 15px;
}
.box-content {
  width: 200px;
  margin: 0;
  font-size: 14px;
  padding: 8px 16px;
  background: #fff;
  border-radius: 3px;
  margin-bottom: 8px;
}
</style>