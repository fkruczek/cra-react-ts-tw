import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Providers from './Providers'
import GlobalStyles from './styles/GlobalStyles'

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <GlobalStyles />
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
)
