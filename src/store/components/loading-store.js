export default {
    state: {
        isLoading: false
    },
    mutations: {
        increment(state) {
            state.isLoading = !state.isLoading;
        }
    }
}