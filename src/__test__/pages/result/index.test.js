import React from 'react'
import { create } from 'react-test-renderer'

import { Result } from '../../../pages/result'

describe('Test to the "Result" page compnent', () => {
  describe('Visual test to the "Result" page component', () => {
    const ResultComponent = create(<Result /> )

    test('should the component be the same', () => {
      expect(ResultComponent.toJSON()).toMathcSanpshot()
    })
  })
})