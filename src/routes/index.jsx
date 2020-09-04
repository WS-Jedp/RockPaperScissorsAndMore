import React from 'react'
import { Router } from '@reach/router'

import { Home } from '../pages/home'

export const Routes = () => (
  <Router>
    <Home path='/' />
  </Router>
)