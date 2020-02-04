import { ActionTree } from 'vuex'
import { RootState } from './types'
import { SET_SAVED_DATA } from './mutation.types'
import FetchCall from '@/services/api-services'

const actions: ActionTree<RootState, RootState> = {
  async [SET_SAVED_DATA] ({ commit }, payload: string) {
    // debugger // eslint-disable-line no-debugger
    const savedData = await FetchCall(payload)
    commit(SET_SAVED_DATA, [ savedData ])
  }
}

export default actions
