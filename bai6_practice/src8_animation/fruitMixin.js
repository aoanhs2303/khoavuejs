export const fruitMixin = {
    data() {
        return {
            text: 'Hello world',
            fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
            filterText: ''
        }
    },
    computed: {
        filterFruits() {
            return this.fruits.filter((element) => {
                return element.match(this.filterText);
            });
        }
    } 
};