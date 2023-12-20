<template>
	<div>
		<Header />
	</div>
	<div>
		<router-view></router-view>
	</div>
</template>

<script>
	import Header from '@/components/layout/Header.vue';

	export default {
		name: 'App',
		components: {
			Header,
		},
	};
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 10px;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 100px 1fr;
	}
</style>
