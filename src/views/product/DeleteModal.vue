<template>
    <my-modal :open="true" @close="handleClose">
        <div class="card">
            <div class="card-content">
                <div class="columns">
                    <div class="column">
                        Are you sure you want to delete <b>{{product.name}}</b>?
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <span class="is-pulled-right">
                            <button class="button is-danger" style="margin-right:10px" @click="handleDeleteProduct">Delete</button>
                            <button class="button" @click="handleClose">Cancel</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </my-modal>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'DeleteModal',

    computed:{
        ...mapGetters({product:'product/selected'}),
    },

    methods: {
        ...mapActions({deleteProduct:'product/delete', deselectProduct:'product/deselect'}),

        handleClose: function() {
            
            this.deselectProduct();

            this.$emit('close');
        },

        handleDeleteProduct: function() {

            this.deleteProduct();

            this.handleClose();
        }
    },

}
</script>

<style>

</style>