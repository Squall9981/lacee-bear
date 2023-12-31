<template>
	<div class="header">
		<div class="row">
			<div class="box"><span class="title">Lacee Remembered</span></div>
		</div>
		<hr />
		<div class="row">
			<div class="box">
				<nav class="menu">
					<ul class="list">
						<router-link v-for="item in menuItems" :key="item.id" :to="item.to" class="custom-link" exact>
							<li>{{ item.label }}</li>
						</router-link>
					</ul>
				</nav>
			</div>
		</div>
		<hr />
	</div>
</template>

<script>
	export default {
		name: 'Header',
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
		display: flex;
		flex-direction: column; /* Arrange rows vertically */
		/* Add any additional styles for the container */
	}

	.row {
		display: flex;
		/* Add styles for the rows if needed */
	}

	.box {
		flex: 1; /* Each box will take equal space within the row */
		display: flex;
		justify-content: center; /* Center horizontally */
		align-items: center; /* Center vertically */
		/* Additional box styles */
		margin: 5px;
	}

	.menu {
		display: flex;
		justify-content: center;
	}

	.menu ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex; /* Display list items horizontally */
	}

	.menu li {
		margin: 0 10px;
	}

	.menu a {
		text-decoration: none;
		/* Other link styles */
	}

	.list {
		margin: 0;
		padding: 0;
		list-style-type: none;
		transform-origin: top;
		overflow: hidden;
		a {
			text-decoration: none;
			color: #000000;
		}
		li {
			padding: 10px;
		}
	}

	.title {
		font-size: 2rem;
		font-weight: bold;
		padding: 20px;
	}

	hr {
		margin: 0;
		border-top: 1px solid #000000;
		width: 100%;
		margin: auto;
	}

	.router-link-exact-active {
		font-weight: bold;
		background: #d6c1b3;
	}

	.custom-link:hover {
		background: rgb(172, 172, 172);
	}
</style>
