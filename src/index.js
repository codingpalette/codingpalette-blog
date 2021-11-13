import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Global } from '@emotion/react'
import { GlobalStyle } from './assets/css/GlobalStyles'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Global styles={GlobalStyle} />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
