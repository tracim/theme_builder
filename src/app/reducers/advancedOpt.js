import { TOGGLE_ADV_OPT } from '../action-creators.js'

export default function showAdvancedOpt (state = [], action) {
  switch (action.type) {
    case TOGGLE_ADV_OPT:
      return !state

    default:
      return state
  }
}
