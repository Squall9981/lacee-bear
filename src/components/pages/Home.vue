<template>
	<div class="container">
		<div class="grid-item">
			<img src="../../assets/images/20220629_122714.jpg" alt="" />
		</div>
		<div>
			<p class="life-span">2011-02-14 ~ 2023-12-14</p>
		</div>
	</div>
</template>

<style scoped>
	.container {
		display: inline-grid;
		grid-template-columns: 1fr;
		gap: 20px;
		margin: 20px;
		justify-items: center;
	}

	.grid-item {
		display: grid;
		align-items: center;
		justify-items: center;
	}

	img {
		width: 40%;
		height: auto;
		border-radius: 10px;
		box-shadow: 3px 3px 8px #252525;
	}

	@media screen and (max-width: 440px) {
		img {
			width: 95%;
		}
	}

	@media screen and (min-width: 441px) and (max-width: 500px) {
		img {
			width: 80%;
		}
	}

	@media screen and (min-width: 501px) and (max-width: 650px) {
		img {
			width: 60%;
		}
	}

	.life-span {
		font-size: 1.5rem;
		font-weight: bold;
	}
</style>
