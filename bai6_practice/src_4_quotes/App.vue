<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxQuote="maxQuotes" ></app-header>
        <addNewQuote @quoteAdded="newQuote"></addNewQuote> 
        <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
        <div class="col-sm-12 mt-3">
            <div class="div alert alert-info">Click the quote to delete it</div>
        </div>
    </div>
</template>

<script>
    import NewQuote from './component/NewQuote.vue'
    import GridQuote from './component/GridQuote.vue'
    import Header from './component/Header.vue'
    export default {
        data: function() {
            return {
                quotes: [
                    'This is quote to see something'
                ],
                maxQuotes: 10
            }
        },
        methods: {
            newQuote(quote) {
                if(this.quotes.length >= 10) {
                    return alert('Delete Quote !')
                }
                this.quotes.push(quote)
            },
            deleteQuote(index) {
                this.quotes.splice(index, 1)
            }
        },
        components: {
            'app-quote-grid': GridQuote,
            addNewQuote: NewQuote,
            'app-header': Header
        }
    }
</script>

<style>

</style>
