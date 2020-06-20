<template>
  <table class="table is-fullwidth">
      <thead>
          <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th></th>
          </tr>
      </thead>
      <tbody>
          <the-table-row v-for="product in products" :key="product.id" :product="product" />
      </tbody>
  </table>
</template>

<script>
import { mapGetters } from 'vuex';
import TheTableRow from './TheTableRow';
export default {
    name: 'TheTable',
    components:{
        TheTableRow,
    },

    computed:{
        ...mapGetters({products:'product/items'}),
    }
}
</script>

<style>

</style>