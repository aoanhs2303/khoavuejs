<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-8 push-sm-2">
                <h1 class="diplay-3">HTTP</h1>
                <fieldset class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" v-model="user.username" 
                        class="form-control" id="exampleInputEmail1" placeholder="Enter name">
                    <small class="text-muted">We'll never share your email with anyone else.</small>
                </fieldset>
                <fieldset class="form-group">
                    <label for="exampleInputPassword1">Email</label>
                    <input type="text" v-model="user.email" 
                    class="form-control" id="exampleInputPassword1" placeholder="Enter email">
                </fieldset>
                <button type="submit" class="btn btn-primary" @click.prevent="submit()">Submit</button>
                <hr>
                <button type="submit" class="btn btn-primary btn-sm" @click.prevent="fetchData()">Get Data</button>
                <ul class="list-group mt-3">
                    <li class="list-group-item" v-for="u in users">{{ u.username }} - {{ u.email }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    username: '',
                    email: ''
                },
                users: []
            }
        },
        methods: {
            submit() {
                this.$http.post('', this.user) //Để trống cũng đc thì đã options.root
                    .then(response => {
                        console.log(response);
                    }, error => {
                        console.log(error);
                    });
            },
            fetchData() {
                this.$http.get('https://vue-http-5d0cd.firebaseio.com/data.json')
                    .then(response => {
                        return response.json();
                    }).then(data => {
                        const resultArray = [];
                        for(let key in data) {
                            resultArray.push(data[key]);
                        }
                        this.users = resultArray;
                    })
            }
        }
    }
</script>

<style>
    
</style>