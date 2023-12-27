<template>
	<div class="gallery">
		<GalleryImage v-for="(image, index) in images" :key="index" :imagePath="image" @open-modal="openModal" />
		<base-modal v-if="isModalOpen" :open="isModalOpen" @close-modal="closeModal" title="Test Title">
			<img :src="modalImageSrc" alt="modal image" />
		</base-modal>
	</div>
</template>

<script>
	import GalleryImage from '@/components/layout/GalleryImage.vue';
	import BaseModal from '@/components/ui/BaseModal.vue'; // Create Modal component separately
	// import axios from 'axios';

	export default {
		components: {
			GalleryImage,
			BaseModal,
		},
		data() {
			return {
				images: ['1.jpg', '2.jpg', '3.jpg'],
				isModalOpen: false,
				modalImageSrc: '',
			};
		},
		methods: {
			openModal(imageSrc) {
				console.log(imageSrc);
				this.isModalOpen = true;
				this.modalImageSrc = imageSrc;
			},
			closeModal() {
				this.isModalOpen = false;
				this.modalImageSrc = '';
			},
		},
		created() {},
	};
</script>

<style>
	/* CSS styles for gallery */
	.gallery {
		display: grid;
		grid-template-columns: repeat(3, minmax(200px, 1fr));
		gap: 1rem;
	}
</style>
