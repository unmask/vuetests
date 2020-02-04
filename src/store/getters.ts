import { RootState, GET_SAVED_DATA } from './types'

const getters = {
  [GET_SAVED_DATA]: (state: RootState) => {
    return state.savedData
  }
}

export default getters
