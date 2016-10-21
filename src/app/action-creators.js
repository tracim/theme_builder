export const RESET_COLOR = 'RESET_COLOR'
export const CHANGE_COLOR = 'CHANGE_COLOR'

export const CHANGE_LANG = 'CHANGE_LANG'
export const TOGGLE_ADV_OPT = 'TOGGLE_ADV_OPT'

export const OPEN_PICKER = 'OPEN_PICKER'
export const CLOSE_PICKER = 'CLOSE_PICKER'
export const UPDATE_INIT = 'UPDATE_INIT'

export const SWITCH_TAB = 'SWITCH_TAB'

export const UPDATE_TRACIM_INSTANCE = 'UPDATE_TRACIM_INSTANCE'

export function resetColor () {
  return { type: RESET_COLOR }
}

export function changeColor (name, hex) {
  return { type: CHANGE_COLOR, name, hex }
}

export function toggleAdvOpt () {
  return { type: TOGGLE_ADV_OPT }
}

export function openPicker (name, hex) {
  return { type: OPEN_PICKER, name, hex }
}

export function closePicker () {
  return { type: CLOSE_PICKER }
}

export function updateInitPicker (name, hex) {
  return { type: UPDATE_INIT, name, hex }
}

export function changeLang (event) {
  return { type: CHANGE_LANG, event }
}

export function switchTab (tabId) {
  return { type: SWITCH_TAB, tabId }
}

export function updateTracimInstance (url) {
  return { type: UPDATE_TRACIM_INSTANCE, url }
}
