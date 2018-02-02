<template>
	<form action="">
		<div class="col-sm-8 push-sm-2 form-group">
			<label for="">Quote</label>
			<textarea class="form-control" v-model="quote"></textarea>
		</div>		
		<div class="col-sm-8 push-sm-2 form-group">
			<button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
		</div>	 
	</form>

</template>

<script>
	export default {
		data: function() {
			return {
				quote: ''
			}
		},
		methods: {
			createNew() {
				this.$emit('quoteAdded', this.quote);
				this.quote = "";

			}
		}
	}
</script>
<style>

</style>