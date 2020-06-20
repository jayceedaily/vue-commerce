<template>
    <my-modal :open="true" @close="handleClose">
        <div class="card">
            <div class="card-content">
                <form action="" @submit.prevent="handleFormSubmission">

                    <my-input label="Name" v-model="product.name" required/>
                    <my-input label="Description" v-model="product.description"/>
                    <div class="field">
                        <label for="">Category</label>
                        <div class="control">
                            <div class="select is-fullwidth">
                                <select v-model="product.category">
                                    <option value="null"  selected>Select a category</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Home Appliances">Home Appliances</option>
                                    <option value="Computers/Laptops">Computers/Laptops</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <span class="is-pulled-right">
                                <button class="button is-primary" type="submit">Save</button>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </my-modal>

</template>

<script>
import {mapActions} from 'vuex';
export default {
    name: 'CreateEditModal',
    props: {
        product: {
            type: Object,
            required: false,
            default: function() {
                return {
                    id: null,
                    name: null,
                    description: null,
                    category: null,
                }
            }
        }
    },
    data: function() {
        return {
            isLoading: false,
            autoSave: false,
        }
    },
    methods: {
        ...mapActions({storeProduct:'product/store', deselectProduct: 'product/deselect', updateProduct: 'product/update'}),

        handleFormSubmission: async function() {

            if(this.product.id == null) {

                await this.storeProduct(this.product);

            } else {

                await this.updateProduct(this.product);
            }

            this.handleClose();
        },

        handleClose: function () {

            this.deselectProduct();

            this.$emit('close');
        }
    }
}
</script>

<style>

</style>