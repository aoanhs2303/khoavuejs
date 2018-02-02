<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 push-md-3">
            	<app-header></app-header>
                <h1>Routing</h1>
                <transition name="slide" mode="out-in">
                	<router-view></router-view>
                </transition>
                
            </div>
        </div>
    </div>
</template>

<script>
	import Header from './components/Header.vue'
    export default {
    	components: {
    		'app-header': Header
    	}
    }
</script>

<style>
</style>
