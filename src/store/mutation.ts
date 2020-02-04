import { MutationTree } from 'vuex'
import { RootState } from './types'
import { SET_SAVED_DATA } from './mutation.types'

const mutations: MutationTree<RootState> = {
  [SET_SAVED_DATA]: (state, data) => {
    state.savedData = data
  }
}

export default mutations
