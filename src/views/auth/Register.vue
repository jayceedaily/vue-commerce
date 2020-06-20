<template>
    <div class="container">
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <div class="card">
                    <div class="card-content">
                        <form @submit.prevent="handleSubmit">
                            <my-input v-model="form.first_name" label="First Name" required/>
                            <my-input v-model="form.last_name" label="Last Name" required/>
                            <my-input v-model="form.username" label="Username" required/>
                            <my-input v-model="form.password" label="Password" type="password" required/>
                            <div class="columns">
                                <div class="column">
                                    <span class="is-pulled-right">
                                        <button class="button is-primary">Register</button>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'Register',
    data: function() {
        return {
            form: {
                first_name: null,
                last_name: null,
                username: null,
                password: null
            },
            errors: {

            }
        }
    },
    methods: {
        ...mapActions({registerAuth:'auth/register'}),
        handleSubmit: function () {

            this.registerAuth(this.form);
        }
    }

}
</script>

<style>

</style>