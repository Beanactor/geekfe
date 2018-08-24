<template>
	<div class="section-home">
    
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
    this.$axios("mp/edu/index?pageNum=1&pageSize=6").then(
      ({ rows }) => {
        // console.log(rows);
      },
      (code, msg) => {
        // 当有特定 code 需要特殊处理，传入 noShowDefaultError:true，在这个回调处理就行
      }
    );
  },
  // 挂载之前
  beforeMount: function() {},
  // 挂载之后
  mounted: function() {
 
  },
  beforeDestroy: function() {
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.section-home {
  color: #f00;
}
</style>



