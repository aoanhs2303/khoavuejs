<template>
	<div class="col-sm-4">
		<div class="card card-dafault">
			<div class="panel-body quote">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['quotes']
	}
</script>
<style>
	.panel-body {
		font-family: 'Supermercado One', cursive;
		font-size: 24px;
		color: #6e6e6e;
		text-align: center;
		padding: 10px

	}
	.quote {
		cursor: pointer;
	}
	.quote:hover {
		background-color: #ffe2e2;
	}
</style>