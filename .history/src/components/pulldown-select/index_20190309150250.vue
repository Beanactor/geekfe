<template>
  <div class="pop-over">
    <a @click="toggleOpen" class="pop-button" href="javascript: void(0);">按钮</a>
    <ul v-clickoutside="close" v-show="open" class="pop-list">
      <li>选项1</li>
      <li>选项2</li>
      <li>选项3</li>
      <li>选项4</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "pulldownSelect",
  data() {
    return {
      open: false
    };
  },
  methods: {
    toggleOpen: function() {
      this.open = !this.open;
    },
    close: function(e) {
      if (this.$el.contains(e.target)) return;
      this.open = false;
    }
  },
  directives: {
    clickoutside: {
      bind: function(el, binding, vnode) {
        const documentHandler = function(e) {
            console.log(el);
          if (!vnode.context || el.contains(e.target)) return;
          binding.value(e);
        };

        setTimeout(() => {
          document.addEventListener("click", documentHandler);
        }, 0);
      }
    }
  }
};
</script>
<style scoped>
.pop-over {
  position: relative;
  width: 100%;
  height: 100%;
}
.pop-button {
  position: relative;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
  border: 1px solid #000;
}
.pop-list {
  position: absolute;
  left: 0;
  top: 0;
  border: 1px solid #000;
}
.pop-list li {
  width: 100%;
  height: 100%;
  padding: 8px 3px;
  list-style: none;
}
</style>