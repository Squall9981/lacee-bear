<template>
	<div v-if="open" class="backdrop" @click="closeModal"></div>
	<transition name="modal">
		<dialog open v-if="open">
			<div class="header">
				<div><button class="close-btn" @click="closeModal">x</button></div>
			</div>
			<div class="body">
				<slot name="default"></slot>
			</div>
			<div>
				<slot name="footer"></slot>
			</div>
		</dialog>
	</transition>
</template>

<script>
	export default {
		props: ['open', 'title'],
		emits: ['close-modal'],
		methods: {
			closeModal() {
				this.$emit('close-modal');
			},
		},
	};
</script>

<style scoped>
	.backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		z-index: 10;
		background-color: rgba(0, 0, 0, 0.75);
	}

	dialog {
		position: fixed;
		top: 10vh;
		width: 50rem;
		height: 40rem;
		left: calc(50% - 20rem);
		margin: 0;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		border-radius: 12px;
		padding: 1rem;
		background-color: white;
		z-index: 100;
		border: none;
		animation: modal 0.3s ease-out forwards;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(2, minmax(0, auto));
	}

	.modal-enter-active {
		animation: modal 0.3s ease-out;
	}

	.modal-leave-active {
		animation: modal 0.3s ease-in reverse;
	}

	@keyframes modal {
		from {
			opacity: 0;
			transform: translateY(-50px) scale(0.9);
		}

		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	.header {
		display: grid;
		grid-template-columns: 1fr auto;
	}

	.close-btn {
		cursor: pointer;
		background: none;
		border: none;
		font-size: 20px;
	}
</style>
