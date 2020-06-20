<template>
<div class="container">
    <div class="columns">
        <div class="column is-4 is-offset-4">
            <div class="tabs is-centered">
                <ul>
                    <li :class="LoginRegister ? 'is-active' : ''"><a @click="LoginRegister=true" >Login</a></li>
                    <li :class="!LoginRegister ? 'is-active' : ''"><a @click="LoginRegister=false">Register</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <login v-if="LoginRegister"/>
            <register v-if="!LoginRegister"/>
        </div>
    </div>
</div>
</template>

<script>
import Login from './Login';
import Register from './Register';
export default {
    name: 'Auth',
    components:{
        Login,
        Register
    },
    data: function() {
        return {
            LoginRegister: true
        }
    }


}
</script>

<style>

</style>