<template>
	<div>
		<nav class="navbar navbar-toggleable-md navbar-light bg-faded">
		  <router-link to="/" class="navbar-brand">Stock Trade</router-link>
		  <div class="collapse navbar-collapse" id="navbarNavDropdown">
		    <ul class="navbar-nav">
		      <router-link to="/portfolio" class="nav-item" tag="li"><a class="nav-link">Portfolio</a></router-link>
		      <router-link to="/stocks" class="nav-item" tag="li"><a class="nav-link">Stocks</a></router-link>

		    </ul>
		    <ul class="navbar-nav ml-auto">
		      <li class="nav-item" @click.prevent="endDay()"><a class="nav-link" href="">End Day</a></li>	  
		      <li class="nav-item" @click.prevent="saveData()"><a class="nav-link" href="">Save Data</a></li>	  
		      <li class="nav-item">
		       	<a href="" class="nav-link" @click.prevent="loadData()">Load Data</a>
		      </li>	
		      <li class="nav-item"><a class="nav-link" href=""><b>{{ funds | currency }}</b></a></li>	    	
		    </ul>
		  </div>
		</nav>
	</div>
</template>

<script>
	import {mapActions} from 'vuex'

	export default {
		data() {
			return {
				isDropdownOpen: true
			}
		},
		computed: {
			funds() {
				return this.$store.getters.funds
			}
		},
		methods: {
			...mapActions({
				rndStocks: 'randomizeStocks',
				fetchData: 'loadData'
			}),
			endDay() {
				this.rndStocks();
			},
			saveData() {
				const data = {
					funds: this.$store.getters.funds,
					stockPortfolio: this.$store.getters.stockPortfolio,
					stocks: this.$store.getters.stocks
				};
				this.$http.put('data.json', data);
			},
			loadData() {
				this.fetchData();
			}
		}
	}
</script>