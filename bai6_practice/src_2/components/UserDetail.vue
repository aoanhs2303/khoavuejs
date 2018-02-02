<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Name: {{ switchName() }}</p>
        <p>Name: {{ myName }}</p>
        <p>Age: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>

	export default {
		props: {
			myName: {
				type: String
			},
			userAge: {
				type: Number
			}
		},
		methods: {
			switchName: function() {
				return this.myName.split("").reverse().join("");
			},
			resetName: function() {
				this.myName = 'Luc'
				this.$emit('nameWasReset', this.myName);
			}
		}
	}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
