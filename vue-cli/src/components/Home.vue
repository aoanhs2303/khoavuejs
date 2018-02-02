<template>
	<div>
		<h1>Trade or view you Portfolio</h1>
		<h6>You may Sava & Load your Data</h6>
		<h6>Click End Day to begin a New Day !</h6>
		<hr>
		<b>Your Funds: {{ funds | currency}}</b>
	</div>
</template>

<script>
	export default {
		computed: {
			funds() {
				return this.$store.getters.funds;
			}
		}
	}
</script>