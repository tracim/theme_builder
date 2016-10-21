import { combineReducers } from 'redux'
import lang from './lang.js'
import showAdvancedOpt from './advancedOpt.js'
import activeTab from './tab.js'
import urlTracimInstance from './tracimInstance.js'
import color from './color.js'
import colorPicker from './colorPicker.js'

const coreReducer = combineReducers({
  lang, showAdvancedOpt, activeTab, urlTracimInstance, color, colorPicker
})

export default coreReducer
