.<template>
  <div :style="style"></div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  // 创建之前
  beforeCreate() {},
  // 创建之后
  created() {
  },
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