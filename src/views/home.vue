<template>
	<div class="section-home">
		<div>{{ msg }}</div>
		<div class="test">
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      msg: "home"
    };
  },
  created() {
    this.$axios("mp/edu/index?pageNum=1&pageSize=6").then(
      ({ rows }) => {
        console.log(rows);
      },
      (code, msg) => {
        // 当有特定 code 需要特殊处理，传入 noShowDefaultError:true，在这个回调处理就行
      }
    );
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped type="text/css">
.test {
  width: 1rem;
  height: 1rem;
  background-color: #0f8;
}
</style>
