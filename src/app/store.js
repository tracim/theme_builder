import { createStore } from 'redux'
import coreReducer from './reducers/index.js'

// TODO: load config.json here ???

export const defaultStore = {
  lang: 'fr',
  showAdvancedOpt: false,
  activeTab: 0,
  urlTracimInstance: 'http://algoo.trac.im/',
  color: [
    {
      name: 'brand-primary',
      hex: '#555555',
      label: {
        fr: 'Couleur principale',
        en: 'Primary color'
      },
      advancedOpt: false
    }, {
      name: 'brand-secondary',
      hex: '#f5f5f5',
      label: {
        fr: 'Couleur secondaire',
        en: 'Secondary color'
      },
      advancedOpt: false
    }, {
      name: 'brand-success',
      hex: '#5cb85c',
      label: {
        fr: 'Messages de succès',
        en: 'Success messages'
      },
      advancedOpt: true
    }, {
      name: 'brand-info',
      hex: '#5bc0de',
      label: {
        fr: "Messages d'informations",
        en: 'Informative messages'
      },
      advancedOpt: true
    }, {
      name: 'brand-warning',
      hex: '#f0ad4e',
      label: {
        fr: "Messages d'alertes",
        en: 'Alert messages'
      },
      advancedOpt: true
    }, {
      name: 'brand-danger',
      hex: '#d9534f',
      label: {
        fr: 'Messages importants',
        en: 'Important messages'
      },
      advancedOpt: true
    }
  ],
  colorPicker: {
    display: false,
    name: '',
    hex: '#ffffff'
  }
}

// regarding the JSON.parse(JSON.stringiy()) : little exploit of JSON lib to clone an object
const store = createStore(coreReducer, JSON.parse(JSON.stringify(defaultStore)), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
