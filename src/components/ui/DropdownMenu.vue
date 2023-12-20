<template>
	<div class="menuContainer">
		<button ref="menuDiv" @click="dropIt" @blur="hideMenu">
			<i v-if="!isDropped" class="fa fa-bars fa-2x"></i>
			<i v-else class="fa fa-times fa-2x"></i>
		</button>
		<transition name="slide">
			<ul class="list" v-if="isDropped" :style="{ top: buttonTop + 'px', left: buttonLeft + 'px' }">
				<li v-for="item in menuItems" :key="item.id">
					<router-link :to="item.to">{{ item.label }}</router-link>
				</li>
			</ul>
		</transition>
	</div>
</template>

<script>
	export default {
		props: ['menuItems'],
		data: () => ({
			isDropped: false,
			buttonTop: 0,
			buttonLeft: 0,
		}),
		methods: {
			dropIt() {
				this.isDropped = !this.isDropped;
				if (this.isDropped) {
					const buttonRect = this.$refs.menuDiv.getBoundingClientRect();
					this.buttonTop = buttonRect.bottom;
					this.buttonLeft = buttonRect.left;
				}
			},
			hideMenu() {
				this.isDropped = false;
			},
			setupOutsideClickListener() {
				document.addEventListener('click', this.handleOutsideClick);
			},
			removeOutsideClickListener() {
				document.removeEventListener('click', this.handleOutsideClick);
			},
			handleOutsideClick(event) {
				if (!this.$refs.menuDiv.contains(event.target)) {
					this.hideMenu();
				}
			},
		},
	};
</script>

<style>
	.menuContainer {
		display: grid;
		height: 100%;
	}

	.menuDiv {
		/* Add your div styles here */
		padding: 10px;
		cursor: pointer;
		border: 1px solid #ccc;
		border-radius: 4px;
	}
	button {
		border: none;
		padding: 0;
		background-color: transparent;
	}
	.list {
		position: absolute;
		width: 204px;
		margin: 0;
		padding: 0;
		list-style-type: none;
		transform-origin: top;
		overflow: hidden;
		li {
			padding: 10px;
			background: white;
			border-bottom: solid thin #eee;
			border-left: solid medium #cbc;
		}
	}

	/* we will explain what these classes do next! */
	.slide-enter-active,
	.slide-leave-active {
		transition: opacity 0.5s ease;
	}

	.slide-enter-from,
	.slide-leave-to {
		opacity: 0;
	}
</style>
