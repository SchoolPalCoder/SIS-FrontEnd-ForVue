import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import locationStore from './components/location-store'
import secondMenuStore from './components/second-menu-store'
import advanedStore from './components/advaned-store'
import loadingStore from './components/loading-store'

export default new vuex.Store({
    modules: {
        location: locationStore,
        secondMenu: secondMenuStore,
        advaned: advanedStore,
        loading: loadingStore
    }
})