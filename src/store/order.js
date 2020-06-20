import { base } from "./base";

export const order = {
    namespaced: true,
    
    state: {
        ...base.state,

        storage: 'order',
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