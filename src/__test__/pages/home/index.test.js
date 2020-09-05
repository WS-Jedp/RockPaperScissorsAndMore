import React from 'react'
import { create } from 'react-test-renderer'

import { Home } from '../../../pages/home'

describe('Test to the "Home" page compnent', () => {
  describe('Visual test to the "Home" page component', () => {
    const HomeComponent = create(<Home /> )

    test('should the component be the same', () => {
      expect(HomeComponent.toJSON()).toMathcSanpshot()
    })
  })
})