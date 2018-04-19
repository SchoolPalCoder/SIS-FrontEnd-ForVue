export default {
    state: {
        searchData: ''
    },
    mutations: {
        setAdvancedData(state, data) {
            state.searchData = data;
        },
        getAdvancedData(state) {
            return state.searchData;
        }
    }
}