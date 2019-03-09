<template>
	<div class="section-home">
    <div class="projectDetail" @click='toProjectDetail'>

    </div>
	</div>
</template>

<script>

export default {
  data() {
    return {};
  },
  // 创建之前
  beforeCreate: function() {},
  // 创建之后
  created() {
    this.$progress.start();
    setTimeout(() => {
         this.$progress.finish()
    }, 30000);
    this.$axios(this.$api.eduList, { params: { pageNum: 1, pageSize: 2 } }).then(
      ({ rows }) => {
        console.log(rows);
      },
      (code, msg) => {
        // 当有特定 code 需要特殊处理，传入 noShowDefaultError:true，在这个回调处理就行
      }
    );
  },
  // 挂载之前
  beforeMount: function() {},
  // 挂载之后
  mounted: function() {},
  beforeDestroy: function() {},
  methods: {
    toProjectDetail() {
      this.$router.push({
        path: "/projectDetail"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.section-home {
  .projectDetail {
    width: 1rem;
    height: 1rem;
    background-color: #08f;
  }
}
</style>



