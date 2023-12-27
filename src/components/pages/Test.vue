<template>
	<button @click="showModal">Show Modal</button>
	<base-modal v-if="isModalOpen" :open="isModalOpen" @close-modal="closeModal">
		<h2>Test</h2>
	</base-modal>
</template>

<script>
	import BaseModal from '@/components/ui/BaseModal.vue';

	export default {
		data() {
			return {
				isModalOpen: false,
			};
		},
		components: {
			BaseModal,
		},
		methods: {
			showModal() {
				this.isModalOpen = true;
			},
			closeModal() {
				this.isModalOpen = false;
			},
		},
	};
</script>
