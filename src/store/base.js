export const base = {

    state: {
        items: [],
        selected: {},

        storage: '',
    },

    mutations: {
        setItems: (state, items) => {
            state.items = items;
        },

        prependItem: (state, item) => {
            state.items.unshift(item);
        },

        setSelected: (state, selected) => {
            state.selected = selected;
        },

        updateItem: (state, item) => {
            let index = state.items.findIndex( list_item => list_item.id == item.id );

            state.items[index] = item;
        },

        deleteItem: (state, item) => {
            let index = state.items.findIndex( list_item => list_item.id == item.id );

            if(index !== false) state.items.splice(index, 1);
        }
    },

    actions: {
        load: ({commit, state}) => {
            commit('setItems', JSON.parse(localStorage[state.storage] ?? '[]'));
        },

        unload: ({commit}) => {
            commit('setItems', []);
        },

        store: ({commit, state}, data) => {
            data.id = uuidv4();

            let _data = Object.assign({}, data);

            commit('prependItem',_data);

            localStorage.setItem(state.storage,JSON.stringify(state.items));

            return data;
        },

        update: ({commit, state}, data) => {

            commit('updateItem', data);

            localStorage.setItem(state.storage,JSON.stringify(state.items));

            return data;
        },

        select: ({commit}, selected) => {
            commit('setSelected', selected)
        },

        deselect: ({commit}) => {
            commit('setSelected', {});
        },

        delete: ({commit, state}) => {
            commit('deleteItem', state.selected);

            localStorage.setItem(state.storage,JSON.stringify(state.items));
        }
    },

    getters: {
        items: (state) => {
            return state.items
        },

        selected: (state) => {
            return state.selected;
        }
    }
}


function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }