import React from 'react'
import { Router } from '@reach/router'

import { Home } from '../pages/home'
import { Result } from '../pages/result'

export const Routes = () => (
  <Router>
    <Home path='/' />
    <Result path='/result' />
  </Router>
)