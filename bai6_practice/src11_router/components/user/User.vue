<template>
	<div>
		<h1>The User Page</h1>
		<p>Load ID: {{ id }}</p>
		<hr>
		<router-view></router-view>
		<button class="btn btn-primary" @click="gotoHome()">Go to Home</button>
	</div>

</template>

<script>
	export default {
		// data() {
		// 	return {
		// 		id: this.$route.params.id
		// 	}
		// },
		methods: {
			gotoHome() {
				this.$router.push('/');
			}
		}
	}
</script>