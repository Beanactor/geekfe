<template>
	<div class="section-home">
    <com-header>
      <span slot='top'>top</span>
      <span slot='bottom'>header</span>
    </com-header>
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


