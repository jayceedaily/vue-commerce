<template>
  
  <div class="card">
      <div class="card-content"  style="height:150px">
          
          <div class="columns">
              <div class="column">{{product.name}}</div>
          </div>
      </div>
      <div class="card-footer">
            <a class="card-footer-item" @click="handleAddToCart"><i class="material-icons">add_shopping_cart</i></a>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'OrderItem',
    props: ['product'],

    methods: {
        ...mapActions({storeOrder: 'order/store'}),

        handleAddToCart: function() {
            this.storeOrder({product : this.product});
        }
    }
}
</script>

<style>

</style>