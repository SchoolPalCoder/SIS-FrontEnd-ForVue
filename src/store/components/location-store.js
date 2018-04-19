export default {
    state: {
        list: []
    },
    mutations: {
        locationInit(state, list) {
            state.list = list;
        }
    }
}