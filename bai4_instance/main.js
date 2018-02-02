var vm1 = new Vue({
	el: "#app1",
	data: {
		title: 'This is Title'
	}
})

setTimeout(function() {
	vm1.title = 'Changed by timeout'
}, 3000)

//Thêm một property
vm1.newProp = "New!";
console.log(vm1);
console.log(vm1.$data);

var vm2 = new Vue({
	el: "#app2",
	methods: {
		change: function() {
			vm1.title = 'Changed';
		}
	}
})

vm1.$refs.myButton.innerText = "REF";

var vm3 = new Vue({
	template: `<h1>MOUNT</h1>`
})

vm3.$mount('#app3');

Vue.component('hello', {
	template: `<h3>Componennt</h3>`
});