import { UPDATE_TRACIM_INSTANCE, UPDATE_IS_SAAS_INSTANCE, UPDATE_CONFIG } from '../action-creators.js'

export default function config (state = {
  urlTracimInstance: 'http://algoo.trac.im/',
  isSassInstance: false
}, action) {
  switch (action.type) {
    case UPDATE_TRACIM_INSTANCE:
      return {
        ...state,
        urlTracimInstance: action.urlTracimInstance
      }

    case UPDATE_IS_SAAS_INSTANCE:
      return {
        ...state,
        isSassInstance: action.isSassInstance
      }

    // action.config holds all the config params
    case UPDATE_CONFIG:
      return action.config

    default:
      return state
  }
}
