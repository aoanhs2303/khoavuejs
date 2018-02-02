<template>
    <div class="container">
        <div class="">
            <div class="col-xs-12">
                <button @click="selectedComponent='appQuote'">Quote</button>
                <button @click="selectedComponent='appAuthor'">Author</button>
                <button @click="selectedComponent='appNew'">New</button>
                <hr>
                <p>{{ selectedComponent }}</p>
                <keep-alive>
                    <component :is="selectedComponent"></component>   
                </keep-alive> 
                
                <!-- <app-quote>
                    <h2 slot="title">{{ quoteTitle }}</h2>
                    <p slot="content">A wonderfull quote</p>
                </app-quote>   -->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './component/Quote.vue'
    import Author from './component/Author.vue'
    import New from './component/New.vue'
    
    export default {
        data: function() {
            return {
                quoteTitle: 'The Quote',
                selectedComponent: 'appQuote'
            }
        },
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New
        }
    }
</script>

<style>
    div.component {
        border: 1px solid black;
        padding: 30px;
    }
</style>
