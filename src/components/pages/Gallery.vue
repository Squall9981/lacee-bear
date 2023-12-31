<template>
	<div class="gallery">
		<GalleryImage v-for="(image, index) in images" :key="index" :image="image" @open-modal="openModal" />
		<base-modal v-if="isModalOpen" :open="isModalOpen" @close-modal="closeModal" title="Test Title">
			<img :src="modalImageSrc" style="width: 100%; height: 100%; object-fit: contain" alt="modal image" />
			<template v-slot:footer>
				<div>
					<p>{{ selectedImage.longDesc }}</p>
				</div>
			</template>
		</base-modal>
	</div>
</template>

<script>
	import GalleryImage from '@/components/layout/GalleryImage.vue';
	import BaseModal from '@/components/ui/BaseModal.vue'; // Create Modal component separately
	// import axios from 'axios';
	import { laceePictures } from '@/assets/images/index.js';

	export default {
		components: {
			GalleryImage,
			BaseModal,
		},
		data() {
			return {
				images: laceePictures,
				isModalOpen: false,
				modalImageSrc: '',
				selectedImage: null,
			};
		},
		methods: {
			openModal(imageObject) {
				// console.log(imageSrc);
				this.isModalOpen = true;
				this.modalImageSrc = imageObject.imageSrc;
				this.selectedImage = this.images.find((image) => image.id === imageObject.imageId);
			},
			closeModal() {
				this.isModalOpen = false;
				this.modalImageSrc = '';
			},
		},
		created() {
			this.images = laceePictures.sort((a, b) => a.id - b.id);
		},
	};
</script>

<style>
	/* CSS styles for gallery */
	.gallery {
		display: grid;
		grid-template-columns: repeat(auto-fill, 300px);
		grid-template-rows: repeat(auto-fill, 300px);
		grid-auto-flow: dense;
		grid-auto-rows: 300px;
		grid-auto-flow: dense;
		gap: 10px;
	}
</style>
