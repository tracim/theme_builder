import { UPDATE_TRACIM_INSTANCE } from '../action-creators.js'

export default function tracimInstance (state = '', action) {
  switch (action.type) {
    case UPDATE_TRACIM_INSTANCE:
      return action.url

    default:
      return state
  }
}
