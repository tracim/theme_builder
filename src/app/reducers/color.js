import { INIT_COLOR, RESET_COLOR, CHANGE_COLOR } from '../action-creators.js'
import { defaultStore } from '../defaultStore.js'

export default function color (state = defaultStore.color, action) {
  switch (action.type) {
    case INIT_COLOR:
      return action.colorList

    case CHANGE_COLOR:
      return state.map(color => color.name === action.name ? {...color, hex: action.hex} : color)

    case RESET_COLOR:
      // return state.map(color => Object.assign({}, color, {hex: defaultStore.color.find(item => item.name === color.name).hex})) // the two lines are equivalent
      return state.map(color => ({...color, hex: defaultStore.color.find(item => item.name === color.name).hex}))

    default:
      return state
  }
}
