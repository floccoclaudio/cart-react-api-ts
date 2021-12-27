import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import store from './app/store'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body{
  box-sizing: border-box;
}`

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root'),
)
