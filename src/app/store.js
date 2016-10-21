import { createStore } from "redux"
import coreReducer from "./reducers/index.js"

//TODO: load config.json here ???

export const defaultStore = {
  lang: 'fr',
  showAdvancedOpt: false,
  activeTab: 0,
  urlTracimInstance: "http://algoo.trac.im/",
  color: [
    {
      name: "brand-primary",
      hex: "#555555",
      label: {
        fr: "couleur principale",
        en: "primary color",
      },
      advancedOpt: false,
    }, {
      name: "brand-secondary",
      hex: "#f5f5f5",
      label: {
        fr: "couleur secondaire",
        en: "secondary color",
      },
      advancedOpt: false,
    }, {
      name: "brand-success",
      hex: "#5cb85c",
      label: {
        fr: "couleur des messages de succès",
        en: "color for success messages",
      },
      advancedOpt: true,
    }, {
      name: "brand-info",
      hex: "#5bc0de",
      label: {
        fr: "couleur des messages d'informations",
        en: "color for informative messages",
      },
      advancedOpt: true,
    }, {
      name: "brand-warning",
      hex: "#f0ad4e",
      label: {
        fr: "couleur des messages d'alertes",
        en: "color for alert messages",
      },
      advancedOpt: true,
    }, {
      name: "brand-danger",
      hex: "#d9534f",
      label: {
        fr: "couleur des messages importants",
        en: "color for important messages",
      },
      advancedOpt: true,
    }
  ],
  colorPicker: {
    display: false,
    name: "",
    hex: "#ffffff",
  }
}

// regarding the JSON.parse(JSON.stringiy()) : little exploit of JSON lib to clone an object
const store = createStore(coreReducer, JSON.parse(JSON.stringify(defaultStore)), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
