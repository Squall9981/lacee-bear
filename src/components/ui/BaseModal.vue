<template>
	<div v-if="open" class="backdrop" @click="closeModal"></div>
	<transition name="modal">
		<div class="dialog" open v-if="open">
			<div class="header">
				<div><button class="close-btn" @click="closeModal">x</button></div>
			</div>
			<div class="body">
				<slot name="default"></slot>
			</div>
			<div>
				<slot name="footer"></slot>
			</div>
		</div>
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

	.dialog {
		border: none;
		border-radius: 12px;
		padding: 1rem;
		background-color: #f4b6c2;
		width: 50%;
		height: 80%;
		position: fixed;
		top: 10%;
		left: 25%;
		transform: translate(-50%, -50%);
		margin: 0;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		z-index: 100;
		animation: modal 0.3s ease-out forwards;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(2, minmax(0, auto));
	}

	@media (max-width: 320px) {
		.dialog {
			width: 90%;
			margin: 10% auto;
			padding: 15%;
			max-width: 90%;
		}
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
