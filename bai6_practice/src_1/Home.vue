<template>
	<div>
		<app-status v-for="n in 5"></app-status>
	</div>
	
</template>

<script>
import ServerStatus from './ServerStatus.vue' 
export default {
	components: {
		'app-status':  ServerStatus
	}	
}
</script>

