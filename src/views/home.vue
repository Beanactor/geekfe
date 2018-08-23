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
				msg: 'home'
			}
		},
		created() {

		},
		mounted() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped type="text/css">
	.test {
		width: 1rem;
		height: 1rem;
		background-color: #0f8;
	}
</style>
