<template>
<div class="container">
    <div v-if="!showRegister">
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <div class="card">
                    <div class="card-content">
                        <form @submit.prevent="handleSubmit">
                            <p class="has-text-danger">{{errors}}</p>
                            <my-input label="Username" v-model="form.username" required/>
                            <my-input label="Password" type="password" v-model="form.password" required/>
                    
                            <div class="columns">
                                <div class="column">
                                    <span class="is-pulled-right">
                                        <button class="button is-primary">Login</button>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <register/>
    </div>
</div>
</template>

<script>
import Register from './Register';
import { mapActions } from 'vuex';
export default {
    name: 'Login',
    data: function() {
        return {
            showRegister: false,

            form: {
                username: null,
                password: null,
            },
            errors: null
        }
    },
    components : {
        Register
    },

    methods: {
        ...mapActions({login: 'auth/login'}),

        handleSubmit: function() {
            this.login(this.form).then(response => {
                if(!response){
                    this.errors = "Please check your credentials"
                }
            });
        }
    }
}
</script>

<style>

</style>