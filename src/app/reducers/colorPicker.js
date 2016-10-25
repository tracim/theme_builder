import { OPEN_PICKER, CLOSE_PICKER, UPDATE_INIT } from '../action-creators.js'

export default function colorPicker (state = [], action) {
  switch (action.type) {
    case OPEN_PICKER:
      return {
        display: true,
        name: action.name,
        hex: action.hex
      }

    case CLOSE_PICKER:
      return {
        ...state,
        display: false
      }

    case UPDATE_INIT:
      return {
        ...state,
        name: action.name,
        hex: action.hex
      }

    default:
      return state
  }
}
