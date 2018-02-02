<template>
	<div>
		<h3>Some User Details</h3>
		<p>ID: {{ this.$route.params.id }}</p>
		<router-link :to="{name: 'userEdit', params: {id: $route.params.id}, query: {ten: 'Luc', age: 20}}"
			tag="button" class="btn btn-primary">Edit</router-link>

		<!-- :to="this.$route.params.id + '/edit'" -->	
	</div>
</template>