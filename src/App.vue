<template>
	<div class="app-container">
		<div>
			<Header />
		</div>
		<div>
			<router-view></router-view>
		</div>
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
		margin-top: 10px;
	}

	.app-container {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr;
	}
</style>
