import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Global } from '@emotion/react'
import { GlobalStyle } from './assets/css/GlobalStyles'
import firebase from './firebase'
import { RecoilRoot } from 'recoil'

ReactDOM.render(
  <RecoilRoot>
    <React.StrictMode>
      <BrowserRouter>
        <Global styles={GlobalStyle} />
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </RecoilRoot>,
  document.getElementById('root'),
)
