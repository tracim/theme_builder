import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
require('./css/style.styl')
require('./font/font-awesome-4.6.3/css/font-awesome.css')

import ThemeChanger from './components/ThemeChanger.jsx'

import store from "./store.js"


ReactDOM.render(
  <Provider store={store}>
    <ThemeChanger />
  </Provider>
  , document.getElementById("content")
)