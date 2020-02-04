import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'

import { RootState } from './types'

import state from './state'
import getters from './getters'
import mutations from './mutation'
import actions from './actions'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state,
  getters,
  mutations,
  actions
}

export default new Vuex.Store<RootState>(store)
