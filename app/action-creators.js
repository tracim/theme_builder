import 'whatwg-fetch'

export const REQUEST_ASYNC_START = 'REQUEST_ASYNC_START'
export const REQUEST_ASYNC_END = 'REQUEST_ASYNC_END'

export const INIT_CUSTOMIZABLES = 'INIT_CUSTOMIZABLES'
export const RESET_CUSTOMIZABLES = 'RESET_CUSTOMIZABLES'
export const CHANGE_CUSTOMIZABLES = 'CHANGE_CUSTOMIZABLES'

export const CHANGE_LANG = 'CHANGE_LANG'

export const INIT_ADV_OPT = 'INIT_ADV_OPT'
export const TOGGLE_ADV_OPT = 'TOGGLE_ADV_OPT'

export const OPEN_PICKER = 'OPEN_PICKER'
export const CLOSE_PICKER = 'CLOSE_PICKER'
export const UPDATE_INIT = 'UPDATE_INIT'

export const SWITCH_TAB = 'SWITCH_TAB'

export const UPDATE_TRACIM_INSTANCE = 'UPDATE_TRACIM_INSTANCE'
export const UPDATE_IS_SAAS_INSTANCE = 'UPDATE_IS_SAAS_INSTANCE'
export const UPDATE_CONFIG = 'UPDATE_CONFIG'

export function requestAsyncStart () {
  return { type: REQUEST_ASYNC_START }
}

export function fetchConfig (urlJsonCfg) {
  return function (dispatch) { // returning a function in an action creator is allowed by the middleware redux-thunk to handle asynchronous actions
    dispatch(requestAsyncStart()) // set isFetching to true to display a loader
    return fetch(urlJsonCfg, {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    })
    .then(response => response.json())
    .then(json => {
      Promise.all([ // thoses dispatch will update every parts of the store according to the config got by ajax
        dispatch(changeLang(json.lang)),
        dispatch(initAdvOpt(json.showAdvancedOpt)),
        dispatch(switchTab(json.activeTab)),
        dispatch(updateConfig(json.config)),
        dispatch(initCustomizables(json.customizables))
      ])
    })
    .then(() => dispatch(requestAsyncEnd())) // set isFetching to false to hide the loader
    .catch((e) => console.log('Error fetching config', e))
  }
}

export function requestAsyncEnd () {
  return { type: REQUEST_ASYNC_END }
}

export function initCustomizables (customizablesList) {
  return { type: INIT_CUSTOMIZABLES, customizablesList }
}
export function resetCustomizables () {
  return { type: RESET_CUSTOMIZABLES }
}

export function changeCustomizables (name, hex) {
  return { type: CHANGE_CUSTOMIZABLES, name, hex }
}

export function initAdvOpt (advOpt) {
  return { type: INIT_ADV_OPT, advOpt }
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

export function changeLang (lang) {
  return { type: CHANGE_LANG, lang }
}

export function switchTab (tabId) {
  return { type: SWITCH_TAB, tabId }
}

export function updateTracimInstance (url) {
  return { type: UPDATE_TRACIM_INSTANCE, url }
}

export function updateIsSaasInstance (isSaasInstance) {
  return { type: UPDATE_IS_SAAS_INSTANCE, isSaasInstance }
}

export function updateConfig (config) {
  return { type: UPDATE_CONFIG, config }
}
