<template>
	<div class="card" v-if="imageSrc" @click="openModal">
		<div class="image-section">
			<img :src="imageSrc" alt="Gallery Image" />
		</div>
		<div class="footer-section">
			<p class="short-desc">{{ image.shortDesc }}</p>
		</div>
	</div>
	<div v-else>Loading...</div>
</template>

<script>
	export default {
		props: {
			image: Object, // Pass image source as a prop
		},
		data() {
			return {
				imageSrc: null,
			};
		},
		emits: ['open-modal'], // Emit an event to open modal with image source
		methods: {
			openModal() {
				this.$emit('open-modal', { imageSrc: this.imageSrc, imageId: this.image.id }); // Emit an event to open modal with image source
			},
			async loadImage() {
				try {
					const loadedImage = await import(`@/assets/images/${this.image.imagePath}`);
					this.imageSrc = loadedImage.default || loadedImage;
				} catch (error) {
					console.log(error);
				}
			},
		},
		async created() {
			await this.loadImage();
		},
	};
</script>

<style scoped>
	/* CSS styles for gallery image */

	.card {
		display: grid;
		grid-template-rows: auto 1fr; /* Two rows: auto for image height, 1fr for remaining space */
		border: 1px solid #ccc;
		border-radius: 8px;
		overflow: hidden;
	}

	.image-section {
		grid-row: 1; /* Place this section in the first row */
		overflow: hidden;
	}

	.image-section img {
		width: 100%; /* Make the image width fill its parent container */
		height: 100%; /* Make the image height fill its parent container */
		object-fit: contain; /* Maintain the image's aspect ratio within the container */
	}

	.footer-section {
		grid-row: 2; /* Place this section in the second row */
		padding: 10px;
	}

	.short-desc {
		margin: 0;
	}

	.footer-section {
		grid-row: 2;
		padding: 10px;
	}

	.short-desc {
		margin: 0;
	}
</style>
