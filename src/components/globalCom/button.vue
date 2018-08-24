<template>
  <button class="com_button" :class="{'com_button_click': isClick}" @click="buttonClick">
    <slot>确认</slot>
  </button>
</template>

<script>
export default {
  name: 'comButton',
  data () {
    return {
      isClick: false
    };
  },
  methods: {
    buttonClick () {
      this.isClick = true;
      setTimeout(() => {
        this.isClick = false;
      }, 100);
      this.click();
    }
  },
  props: [
    'click'
  ]
};
</script>

<style lang="scss">
  @import '../../assets/style/base/common_style';
  .com_button {
    @include buttonAccountChangeStyle();
    transition: all .1s;
    color: #ffffff;
    font-size: 30px;
    box-shadow: 0 0 5px 2px #ccc;
    &.com_button_click {
      color: #ffffff;
      margin-top: 3px;
      margin-bottom: -3px;
    }
  }
</style>
