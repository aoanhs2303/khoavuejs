// Vue.component('my-cpn', {
// 	data: function() {
// 		return {
// 			status: 'Hello'
// 		}
// 	},
// 	template: '<p> {{ status }} - <button @click="change">Change</button> </p>',
// 	methods: {
// 		change: function() {
// 			this.status = 'Bye';
// 		}
// 	}

// });

var cpm = {
	data: function() {
		return {
			status: 'Hello'
		}
	},
	template: '<p> {{ status }} - <button @click="change">Change</button> </p>',
	methods: {
		change: function() {
			this.status = 'Bye';
		}
	}

};

new Vue({
	el: '#app',
	components: {
		'my-cpn': cpm
	}
})

// new Vue({
// 	el: '#app2'
// })