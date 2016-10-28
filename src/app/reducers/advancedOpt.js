import { INIT_ADV_OPT, TOGGLE_ADV_OPT } from '../action-creators.js'

export default function showAdvancedOpt (state = false, action) {
  switch (action.type) {
    case INIT_ADV_OPT:
      return action.advOpt

    case TOGGLE_ADV_OPT:
      return !state

    default:
      return state
  }
}
