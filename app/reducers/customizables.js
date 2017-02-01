import { INIT_CUSTOMIZABLES, RESET_CUSTOMIZABLES, CHANGE_CUSTOMIZABLES } from '../action-creators.js'
import { defaultStore } from '../defaultStore.js'

export default function customizables (state = defaultStore.customizables, action) {
  switch (action.type) {
    case INIT_CUSTOMIZABLES:
      return action.customizablesList

    case CHANGE_CUSTOMIZABLES:
      return state.map(category => ({...category, fields: category.fields.map(field => field.name === action.name ? {...field, hex: action.hex} : field)}))

    case RESET_CUSTOMIZABLES:
      return defaultStore.customizables

    default:
      return state
  }
}
