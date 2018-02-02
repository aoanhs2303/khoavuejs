<template>
	<div>
		<div class="title">
			<slot name="title"></slot>
			<span style="color: #ccc"><slot name="subtitle"> The Subtitle</slot></span>
		</div>
		<div class="content">
			<slot name="content"></slot>	
		</div>		
	</div>

</template>
<script>
	export default {
		
	}
</script>
<style scoped>
	div {
		boder: 1px solid #ccc;
		box-shadow: 1px 1px 2px black;
		padding: 30px;
		margin: 30px auto;
		text-align: center;
	}
	h2 {
		color: orangered;
	}
	.title {
		font-style: italic;
	}
</style>