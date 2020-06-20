<template>
    <tr>
        <td>{{product.name}}</td>
        <td>{{product.description}}</td>
        <td>{{product.category}}</td>
        <td>
            <my-dropdown compact>
                <template v-slot:trigger>
                    <span style="cursor:pointer"><i class="material-icons">more_horiz</i></span>
                </template>
                <template v-slot:menu >
                    <a class="dropdown-item"  style="padding-right:1rem" @click="handleEdit">Edit</a>
                    <a class="dropdown-item has-text-danger"  style="padding-right:1rem" @click="handleDelete">Delete</a>
                </template>
            </my-dropdown>
        </td>
    </tr>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'TheTableRow',
    props:['product'],
    methods: {
        ...mapActions({selectProduct:'product/select'}),

        handleDelete: function() {
            this.selectProduct(this.product);

            this.$parent.$emit('deleteProduct');
        },

        handleEdit: function() {
            this.selectProduct(this.product);

            this.$parent.$emit('editProduct');
        }
  
    }
}
</script>

<style>

</style>