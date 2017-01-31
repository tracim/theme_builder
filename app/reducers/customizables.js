import { INIT_CUSTOMIZABLES, RESET_CUSTOMIZABLES, CHANGE_CUSTOMIZABLES } from '../action-creators.js'
import { defaultStore } from '../defaultStore.js'

export default function customizables (state = defaultStore.customizables, action) {
  switch (action.type) {
    case INIT_CUSTOMIZABLES:
      return action.customizablesList

    case CHANGE_CUSTOMIZABLES:
      return state.map(customizables => customizables.name === action.name ? {...customizables, hex: action.hex} : customizables)

    case RESET_CUSTOMIZABLES:
      // return state.map(customizables => Object.assign({}, customizables, {hex: defaultStore.customizables.find(item => item.name === customizables.name).hex})) // the two lines are equivalent
      return state.map(customizables => ({...customizables, hex: defaultStore.customizables.find(item => item.name === customizables.name).hex}))

    default:
      return state
  }
}
