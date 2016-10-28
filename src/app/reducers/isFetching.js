import { REQUEST_INIT_CONFIG, RECEIVE_INIT_CONFIG } from '../action-creators.js'

export default function isFetching (state = false, action) {
  switch (action.type) {
    case REQUEST_INIT_CONFIG:
      return true

    case RECEIVE_INIT_CONFIG:
      // const now = new Date().getTime() // for testing purpose
      // while (new Date().getTime() < now + 2000) null
      return false

    default:
      return state
  }
}
