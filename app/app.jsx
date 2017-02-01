import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

require('./css/style.styl')

import ThemeChanger from './containers/ThemeChanger.jsx'

import { store } from './store.js'

ReactDOM.render(
  <Provider store={store}>
    <ThemeChanger />
  </Provider>
  , document.getElementById('content')
)
