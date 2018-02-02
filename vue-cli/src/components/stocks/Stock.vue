<template>
	<div class="col-sm-4 mt-3" style="margin: 0px">
			<div class="card">
			  <div class="card-header">
			  	<h3 class="card-title">{{ stock.name }} <small>({{ stock.price }})</small></h3>
			  </div>
			  <div class="card-block">
			  	<div class="pull-left">
			  		<input v-model.number="quantity" 
			  			type="number" class="form-control" placeholder="Quantity">
			  	</div>
			  		<button @click ="buyStock()" :disabled="quantity <= 0 || !Number.isInteger(quantity)" 
			  			class="btn btn-success btn-block">Buy</button>
			  </div>
			</div>
		</div>
</template>
<script>
	export default {
		props: ['stock'],
		data() {
			return {
				quantity: 0
			}
		},
		methods: {
			buyStock() {
				const order = {
					stockId: this.stock.id,
					stockPrice: this.stock.price,
					quantity: this.quantity
				}

				console.log(order);
				this.$store.dispatch('buyStock', order);

				this.quantity = 0;

			}
		}
	}
</script>