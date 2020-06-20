export const auth = {
    namespaced: true,
    
    state: {
        user: {},
        storage: 'users',
    },

    mutations: {
        setUser: (state, user) => {
            state.user = user;
        },

    },

    actions: {
        login: ({commit, state}, data) => {
            let users = JSON.parse(localStorage[state.storage] ?? '[]');

            let auth = users.find(user => user.username == data.username && user.password == data.password); 
   
            if(auth) {
                commit('setUser', auth);

                return data;
            }

            return false;
        },

        logout: ({commit}) => {
            commit('setUser', {});
        },

        register: ({dispatch, state}, data) => {
            data.id = uuidv4();

            let users = JSON.parse(localStorage[state.storage] ?? '[]');

            let auth = users.find(user => user.username == data.username);

            if(!auth) {
                
                users.unshift(data);
    
                localStorage.setItem(state.storage, JSON.stringify(users));
    
                dispatch('login', data);

                return data;
            }

            return false;
        }
    },

    getters: {
        authenticated: (state) => {
            return JSON.stringify(state.user) == '{}' ? false : true;
        },

        user : (state) => {
            return state.user;
        }
    }
}


function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }