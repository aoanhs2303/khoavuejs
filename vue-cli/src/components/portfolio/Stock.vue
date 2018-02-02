<template>
	<div class="col-sm-4 mt-3" style="margin: 0px">
			<div class="card">
			  <div class="card-header">
			  	<h3 class="card-title">{{ stock.name }} <small>({{ stock.price }} | Quantity: {{ stock.quantity }})</small></h3>
			  </div>
			  <div class="card-block">
			  	<div class="pull-left">
			  		<input v-model.number="quantity" 
			  			type="number" class="form-control" placeholder="Quantity">
			  	</div>
			  		<button @click ="sellStock()" :disabled="quantity <= 0 || !Number.isInteger(quantity) || insufficientQuantity" 
			  			class="btn btn-info btn-block">{{ insufficientQuantity ? 'Không đủ' : 'Bán' }}</button>
			  </div>
			</div>
		</div>
</template>
<script>
    import {mapActions} from 'vuex';

    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
          insufficientQuantity() {
              return this.quantity > this.stock.quantity;
          }
        },
        methods: {
            ...mapActions({
                placeSellOrder: 'sellStock'
            }),
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.placeSellOrder(order);
                this.quantity = 0;
            }
        }
    }
</script>