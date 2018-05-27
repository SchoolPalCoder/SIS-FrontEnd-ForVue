import { types } from "../mutation-types";
export default {
  state: {
    list: []
  },
  mutations: {
    [types.LOCATION_INIT](state, list) {
      state.list = list;
    }
  }
}
