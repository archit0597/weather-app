import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityID: ''
  },
  mutations: {
    'SET_CITY_ID': (state,payload) => {
      state.cityID = payload;
    }
  },
  actions: {
    changeCityId: ({commit},payload) => {
      commit('SET_CITY_ID',payload);
    }
  },
  getters: {
    cityID: state => (state.cityID)
  }
})
