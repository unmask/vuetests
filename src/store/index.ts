import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ifiID: 140827,
    savedData: []
  },
  getters: {
    getIfiid: state => {
      return state.ifiID
    },
    getSavedData: state => {
      return state.savedData
    }
  },
  mutations: {
    saveData (state, payload) {
      state.savedData = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
