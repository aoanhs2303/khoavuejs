new Vue({
	el: '#app',
	data: {
		title: 'Hello World!',
		name: 'Luc',
		link: 'http://aoanhs2303.tk/',
		vhtml: '<a href="http://aoanhs2303.tk/" class="btn btn-danger">AA</a>'
	},
	methods: {
		myFunction: function(event) {
			this.title = event.target.value;
		},
		sayHello: function() {
			return 'Hello Vue';
		},
		say: function() {
			this.title = "V-once"
			return this.name;
		}
	}
})

new Vue({
	el: '#app2',
	data: {
		counter: 0,
		x: 0,
		y: 0
	},
	computed: {
		output: function() {
			return this.counter > 2 ? 'g' : 'l';
		}
	},
	methods: {
		tang: function() {
			this.counter++;
		},
		updateXY: function(event) {
			this.x = event.clientX;
			this.y = event.clientY; 
		},
		alertMe: function() {
			alert('AoAnhs2303.tk')
		}
	}
})


new Vue({
	el: "#app3",
	data: {
		name: 'Luc'
	},
	watch: {
		name: function() {
			var vm = this;
			setTimeout(function() {
				vm.name = "Watch"

			}, 2000)
		}
	}
})


new Vue({
	el: '#app4',
	data: {
		toggleData: false,
		color: 'green',
		width: 100
	},
	computed: {
		divClass: function() {
			return {
				red: this.toggleData,
				blue: !this.toggleData
			}
		},
		myStyle: function() {
			return {
				backgroundColor: this.color,
				width: this.width + 'px'
			};
		}
	}
})