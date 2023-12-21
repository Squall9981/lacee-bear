<template>
	<div class="header">
		<div>
			<header class="top-header">
				<dropdown-menu :menuItems="menuItems" />
			</header>
		</div>
		<div>Content</div>
	</div>
</template>

<script>
	import DropdownMenu from '@/components/ui/DropdownMenu.vue';
	export default {
		name: 'Header',
		components: {
			DropdownMenu,
		},
		data() {
			return {
				menuItems: [
					{ id: 1, to: '/', label: 'Home' },
					{ id: 2, to: '/about', label: 'About' },
					{ id: 3, to: '/gallery', label: 'Gallery' },
				],
			};
		},
	};
</script>

<style scoped>
	.header {
		display: grid;
		grid-template-columns: 25px 1fr;
	}
</style>
