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
  },
  methods: {
    bindEvents() {
      global.vbus.$on("global.dialog.show", msg => {
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
@import "./assets/style/index.scss";
#app {
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: #f3f2f7;
}
</style>