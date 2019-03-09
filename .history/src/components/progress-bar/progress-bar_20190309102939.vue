.<template>
  <div :style="style"></div>
</template>

<script>
export default {
  name: "progressBar",
  data() {
    return {
      percent: 0, // 进度条长度
      show: false, // 显示和隐藏
      canSuccess: true // 是否是成功的状态
    };
  },
  props: {
    options: {
      type: Object,
      default() {
        return {
          succColor: "rgb(76, 164, 214)",
          failColor: "rgb(218, 26, 101)",
          position: "top",
          transition: {
            widthSpeed: 200,
            opacitySpeed: 400,
            duration: 300 // 定义消失时间 ms
          },
          inverse: false, // 进度条的加载方向
          thickness: 2 // 进度条的高度
        };
      }
    }
  },
  // 创建之前
  beforeCreate() {},
  // 创建之后
  created() {},
  // 挂载之前
  beforeMount() {},
  // 挂载之后
  mounted() {},
  //激活之后
  activated() {},
  components: {}
};
</script>

<style scoped>
.bar {
  position: fixed;
  z-index: 99999;
  opacity: 1;
}
</style>