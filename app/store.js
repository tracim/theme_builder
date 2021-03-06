import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers/index.js'
import { defaultStore } from './defaultStore.js'
import { fetchConfig } from './action-creators.js'

// const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// const configEndPoint = document.getElementById('content').getAttribute('configEndPoint')
// export const store = (function () {
//   if (configEndPoint !== null) {
//     const middleware = applyMiddleware(thunkMiddleware, createLogger())
//     return createStore(rootReducer, compose(middleware, reduxDevTools || (f => f)))
//   } else {
//     return createStore(rootReducer, defaultStore, reduxDevTools)
//   }
// })()
// configEndPoint !== null && store.dispatch(fetchConfig(configEndPoint))

const configEndPoint = document.getElementById('content').getAttribute('configEndPoint')

export const store = ((middleware, reduxDevTools) =>
  configEndPoint !== ''
    ? createStore(rootReducer, compose(middleware, reduxDevTools || (f => f)))
    : createStore(rootReducer, defaultStore, reduxDevTools)
)(
  applyMiddleware(thunkMiddleware, createLogger()),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

configEndPoint !== '' && store.dispatch(fetchConfig(configEndPoint))
