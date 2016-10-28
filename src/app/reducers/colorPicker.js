import { OPEN_PICKER, CLOSE_PICKER, UPDATE_INIT } from '../action-creators.js'

export default function colorPicker (state = {
  display: false,
  name: '',
  hex: '#ffffff'
}, action) {
  switch (action.type) {
    case OPEN_PICKER:
      return {
        ...state,
        display: true,
        name: action.name,
        hex: action.hex
      }
      // return Object.assign({}, state, {
      //   display: true,
      //   name: action.name,
      //   hex: action.hex
      // })

    case CLOSE_PICKER:
      return {
        ...state,
        display: false,
        name: '',
        hex: '#ffffff'
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
