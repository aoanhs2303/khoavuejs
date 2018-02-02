<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-sm-8 push-sm-2">
                <h1>Directive is v-for v-if </h1>
                <p v-text="'Some'"></p>
                <p v-html="'<strong>Strong text</strong>'"></p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12 col-sm-8 push-sm-2">
                <h1>Directive tự làm </h1>
                <!-- <p v-highlight="'red'">Color this</p> -->
                <!-- <p v-highlight:background="'red'">Color this</p> -->
                <p v-highlight="'red'">Color this</p>
                <p v-local-highlight="'red'">Color this</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-highlight': {
                bind(el, binding, vnode) {
                    if(binding.arg == 'background') {
                        el.style.backgroundColor = binding.value;
                    } else {
                        el.style.color = binding.value;
                    }                    
                }

            }
        }
    }
</script>

<style>
    
</style>