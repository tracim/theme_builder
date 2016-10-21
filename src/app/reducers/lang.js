import { CHANGE_LANG } from "../action-creators.js"

export default function lang (state = [], action) {
  switch (action.type) {
    case CHANGE_LANG:
      action.event.persist()
      return action.event.target.value

    default:
      return state
  }
}
