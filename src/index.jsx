import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from './context'

// Styles
import { GlobalStyles } from './styles/GlobalStyles'

import { Routes } from './routes'

ReactDOM.render(<>
  <Provider>
    <GlobalStyles />
    <Routes />
  </Provider>
</>, window.document.getElementById('root'))
