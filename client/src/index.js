import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { applyMiddleware, compose } from 'redux'
import { legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'

import { reducers } from './reducers'

import App from './App'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)
const store = createStore(reducers, compose(applyMiddleware(thunk)))

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)
