<template>
	<div class="header">
		<div class="row">
			<div class="box">Some Title</div>
		</div>
		<div class="row">
			<div class="box">
				<nav class="menu">
					<ul class="list">
						<router-link v-for="item in menuItems" :key="item.id" :to="item.to">
							<li>{{ item.label }}</li>
						</router-link>
					</ul>
				</nav>
			</div>
		</div>
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
		padding: 10px;
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
		li:hover {
			background: rgb(172, 172, 172);
		}
	}
</style>
