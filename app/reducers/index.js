import { combineReducers } from 'redux'
import isFetching from './isFetching.js'
import lang from './lang.js'
import showAdvancedOpt from './advancedOpt.js'
import activeTab from './tab.js'
import config from './config.js'
import color from './color.js'

const rootReducer = combineReducers({
  isFetching, lang, showAdvancedOpt, activeTab, config, color
})

export default rootReducer
