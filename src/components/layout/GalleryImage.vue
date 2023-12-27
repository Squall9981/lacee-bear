<template>
	<div class="gallery-image item" v-if="imageSrc">
		<img :src="imageSrc" alt="Gallery Image" />
		<div class="item__overlay" @click="openModal">
			<button>View →</button>
		</div>
	</div>
	<div v-else>Loading...</div>
</template>

<script>
	export default {
		props: {
			imagePath: String, // Pass image source as a prop
		},
		data() {
			return {
				imageSrc: null,
			};
		},
		emits: ['open-modal'], // Emit an event to open modal with image source
		methods: {
			openModal() {
				this.$emit('open-modal', this.imageSrc); // Emit an event to open modal with image source
			},
			async loadImage() {
				console.log(`Loading: @/assets/images/${this.imagePath}`);
				try {
					const image = await import(`@/assets/images/${this.imagePath}`);
					console.log('Image: ', image);
					this.imageSrc = image.default || image;
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

	.item {
		overflow: hidden;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
	}

	.item img {
		grid-column: 1 / -1;
		grid-row: 1 / -1;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.item__overlay {
		background: #ffc60032;
		grid-column: 1 / -1;
		grid-row: 1 / -1;
		position: relative;
		display: grid;
		justify-items: center;
		align-items: center;
		transition: 0.2s;
		transform: translateY(100%);
	}

	.item__overlay button {
		background: none;
		border: 2px solid white;
		color: white;
		text-transform: uppercase;
		background: rgba(0, 0, 0, 0.7);
		padding: 5px;
	}

	.item:hover .item__overlay {
		transform: translateY(0);
	}
</style>
