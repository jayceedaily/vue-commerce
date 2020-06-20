import { base } from "./base";

export const product = {
    namespaced: true,
    
    state: {
        ...base.state,

        storage: 'product',
    },

    mutations: {
        ...base.mutations,

    },

    actions: {
        ...base.actions,
    },

    getters: {
        ...base.getters,
    }
}