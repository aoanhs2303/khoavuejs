<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-8 push-sm-2">
                <h1>Animation</h1>
                <a href=""  @click.prevent="show = !show" class="btn btn-outline-danger">Show</a>
                <select class="form-control" v-model="alertAnimation">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <br><br>
                <transition name="fade">
                    <div class="alert alert-info" v-if="show">This is alert</div>
                </transition>

                <transition :name="alertAnimation">
                    <div class="alert alert-info" v-if="show">This is alert</div>
                </transition>
                
                <transition name="slide" appear> <!-- /*appear: vào cái là chạy hiện ứng luôn*/ -->
                    <div class="alert alert-info" v-if="show">This is alert</div>
                </transition>

                <transition 
                    enter-active-class="animated bounce"
                    leave-active-class="animated shake"
                    appear> <!-- /*appear: vào cái là chạy hiện ứng luôn*/ -->
                    <div class="alert alert-info" v-if="show">This is alert</div>
                </transition>


                <hr>
                <button class="btn btn-primary" @click="load = !load">Load/Remove</button>
                <br><br>
                <transition v-if="load" mode="out-in">
                    <div style="height: 100px; width: 100px; background-color: lightgreen"></div>
                </transition>

                <hr>
                <button class="btn btn-danger" @click="addItem">Add Item</button>
                <ul class="list-group">
                    <transition-group name="slide">
                        <li class="list-group-item" 
                            v-for="(number,index) in numbers" 
                            @click="removeItem(index)"
                            :key="number">

                            {{ number }}
                        </li>   
                    </transition-group>
                    
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
                alertAnimation: 'fade',
                load: true,
                numbers: [1, 2, 3, 4, 5]
            }
        },
        methods: {
            addItem() {
                var pos = Math.floor(Math.random()*(this.numbers.length));
                this.numbers.push(pos);
            },
            removeItem(index) {
                return this.numbers.splice(index, 1);
            }
        }
    }
</script>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-to {
        opacity: 0
    }

    .slide-enter {
        
    }

    .slide-enter-active {
        animation: fadeIn 1s ease-out forwards;
    }

    .slide-leave {

    }

    .slide-leave-active {
        animation: fadeOut 1s ease-out forwards;
    }

    @-webkit-keyframes fadeIn {
        from {
            transform: translateX(20px);
            opacity: 0;
        }
        to {
            transform: translateX(0px);
            opacity: 1;
        }
    }

    @-webkit-keyframes fadeOut {
        to {
            transform: translateX(20px);
            opacity: 0;
        }
        from {
            transform: translateX(0px);
            opacity: 1;
        }
    }
</style>