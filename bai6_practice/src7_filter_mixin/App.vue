<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-8 push-sm-2">
                <h1>Filter  & Mixins</h1>
                <p>{{ text | toUpperCase | to-lowercase}}</p>
                <input type="text" v-model="filterText">
                <ul>
                    <li v-for="fruit in filterFruits">{{ fruit }}</li>
                </ul>
                <hr>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
    import List from "./List.vue"
    export default {
        data() {
            return {
                text: 'Hello world',
                fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
                filterText: ''
            }
        },
        filters: {
            toUpperCase(value) {
                return value.toUpperCase();
            }
        },
        computed: {
            filterFruits() {
                return this.fruits.filter((element) => {
                    return element.match(this.filterText);
                })
            }
        },
        components: {
            appList: List
        }
    }
</script>

<style>
    
</style>