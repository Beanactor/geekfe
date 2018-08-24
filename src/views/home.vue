<template>
	<div class="section-home">
    <p>123</p>
    <com-button :click='click'>    </com-button>
	</div>
</template>

<script>
export default {
  data() {
    return {};
  },
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
  mounted() {},
  methods: {
    click(){
      console.log(123)
    }
  }
};
</script>
<style lang="scss" scoped>
.section-home {
  color: #f00;
}
</style>



