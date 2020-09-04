import React from 'react'
import ReactDOM from 'react-dom'

// Styles
import { GlobalStyles } from './styles/GlobalStyles'

import { Routes } from './routes'

ReactDOM.render(<>
  <GlobalStyles />
  <Routes />
</>, window.document.getElementById('root'))
