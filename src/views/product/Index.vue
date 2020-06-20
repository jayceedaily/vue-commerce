<template>

    <div class="container">
        <div class="columns">
            <div class="column">
                <button class="button is-primary" @click="showCreateEditModal=true">Add product</button>
            </div>
        </div>
        <div class="columns">
            <div class="column">
            </div>
        </div>

        <div class="columns">
            <div class="column">
                <div class="card">
                    <div class="card-content">
                        <the-table @deleteProduct="showDeleteModal=true" @editProduct="showCreateEditModal=true"/>
                    </div>
                </div>
            </div>
    
        </div>

        <create-edit-modal v-if="showCreateEditModal" @close="showCreateEditModal=false" :product="product"/>

        <delete-modal v-if="showDeleteModal" @close="showDeleteModal=false" />
    </div>
</template>

<script>
import TheTable from './TheTable';
import DeleteModal from './DeleteModal';
import CreateEditModal from './CreateEditModal';
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'Product',
    components: {
        TheTable,
        CreateEditModal,
        DeleteModal
    },
    data: function() {
        return {
            showDeleteModal: false,
            showCreateEditModal: false,
        }
    },

    computed: {
        ...mapGetters({product:'product/selected'})
    },

    created: function() {
        this.loadProducts();
    },
    methods: {
        ...mapActions({loadProducts: 'product/load'}),

    }
}
</script>

<style>

</style>