<template>
<div class="container">
    <div class="columns is-multiple">
        <div class="column is-3"  v-for="product in products" :key="product.id" >
            <order-item :product="product"/>
        </div>
    </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import OrderItem from './OrderItem';
export default {
    name: 'Order',
    components: {
        OrderItem
    },
    data: function() {
        return {

        }
    },

    computed: {
        ...mapGetters({products:'product/items'}),
    },

    created: function() {
        this.loadProducts();
    },

    methods: {
        ...mapActions({loadProducts:'product/load'}),
    }
}
</script>

<style>

</style>