<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      // 保存屏幕宽高
      userClient: {
        width: document.children[0].clientWidth,
        height: document.children[0].clientHeight
      }
    };
  },
  created() {
    this.bindEvents();
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // 创建根rem
      this.resetRem();
    },
    // 实例化根rem大小
    resetRem() {
      // 如果屏幕高大于屏幕宽
      if (this.userClient.height > this.userClient.width) {
        // 对html进行赋值rem大小
        document.children[0].style.fontSize =
          this.userClient.width / 750 * 100 + "px";
        // 将body的宽度设置为auto
        document.body.style.width = "auto";
      } else {
        // 如果屏幕高不大于屏幕宽
        // 对可视区域重新定义
        document.body.style.width = this.userClient.height / 1.77 + "px";
        // 将body设置为居中
        document.body.style.margin = "0 auto";
        // 将body的宽度设置为高度的1.77分之一
        document.children[0].style.fontSize =
          this.userClient.height / 1.77 / 750 * 100 + "px";
      }
    },
    bindEvents() {
      GLOBAL.vbus.$on("global.dialog.show", msg => {
        if (msg) return;
        // 我们会在这里注册全局需要操控试图层的事件，方便在非业务代码中通过发布订阅调用
        this.$dialog.popup({
          content: msg
        });
      });
    }
  }
};
</script>

<style lang="scss">
@import "./assets/css/reset.css";
#app {
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: #f3f2f7;
}
</style>