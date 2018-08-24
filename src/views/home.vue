<template>
	<div class="section-home">
		<div class="home-title">{{ msg }}</div>
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
  }
};
</script>


