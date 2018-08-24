<template>
	<div class="section-home">
		<div>{{ msg }}</div>
		<div class="test">
			<span>
				123
			</span>
		</div>
    <com-button :click='click'></com-button>
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
  methods: {
    click() {
      alert(123)
    }
  }
};
</script>

<style lang="scss" scoped type="text/css">
.test {
  width: 1rem;
  height: 1rem;
  background-color: #0f8;
	span {
		color: #f00;
	}
}
</style>
