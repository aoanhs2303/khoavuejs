<template>
    <div>
        <div class="col-sm-8 push-sm-2">
            <h1>Filter  & Mixins</h1>
            <input type="text" v-model="filterText">
            <ul>
                <li v-for="fruit in filterFruits">{{ fruit }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { fruitMixin } from "./fruitMinxin.js"
    export default {
        mixins: [fruitMinxin]
    }
</script>

<style>
    
</style>