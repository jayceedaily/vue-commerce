<template>
    <div class="container">
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <div class="card">
                    <div class="card-content">
                        <div class="columns">
                            <div class="column">
                                <h3 class="is-size-3">Checkout your orders</h3>
                            </div>
                        </div>
                        <div class="columns" v-for="order in orders" :key="order.id">
                            <div class="column">
                                <p><b>{{order.product.name}}</b></p>
                            </div>
                        </div>
                        <div class="columns">
                            <div class="column">
                                <span class="is-pulled-right"><button class="button is-primary">Pay Orders</button></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'Checkout',

    computed: {
        ...mapGetters({orders:'order/items'})
    },

    created: function() {
        this.loadOrders();
    },

    methods:{
        ...mapActions({loadOrders:'order/load'}),
    }
}
</script>

<style>

</style>