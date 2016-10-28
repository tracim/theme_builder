import { SWITCH_TAB } from '../action-creators.js'

export default function tab (state = 0, action) {
  switch (action.type) {
    case SWITCH_TAB:
      return action.tabId

    default:
      return state
  }
}
