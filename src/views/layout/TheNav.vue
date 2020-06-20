<template>
  <nav class="navbar container" role="navigation" aria-label="main navigation">


    <div class="navbar-menu">
        <div class="navbar-end">

            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link is-arrowless">
                    <i class="material-icons" style="vertical-align:bottom; margin-right:10px">shopping_cart</i><span class="tag is-primary is-rounded">{{orders.length}}</span>
                </a>
                <div class="navbar-dropdown">

                    <span v-if="orders.length > 0">
                        <a class="navbar-item" v-for="order in orders" :order="order" :key="order.id">{{order.product.name}}</a>
                        <router-link to="/checkout" class="navbar-item"><div class="columns">
                            <div class="column is-12">
                                <button class="button is-fullwidth">Checkout</button>
                            </div>
                        </div></router-link>
                    </span>
                    <a v-else class="navbar-item">Empty cart</a>
                    
                </div>
            </div>

            <router-link class="navbar-item" to="/">Order</router-link>
            <router-link class="navbar-item" to="/product">Product</router-link>

            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                @{{user.username}}
                </a>

                <div class="navbar-dropdown">
                    <a class="navbar-item" @click="handleLogout">
                        Logout
                    </a>
                </div>
            </div>
        </div>
    </div>
</nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'TheNav',
    computed: {
        ...mapGetters({user: 'auth/user', orders: 'order/items' }),
    },
    created: function() {
        this.loadOrders();
    },

    methods: {
        ...mapActions({loadOrders: 'order/load', logout:'auth/logout'}),

        handleLogout: function() {
            this.logout();
        }
    }
}
</script>

<style>

</style>