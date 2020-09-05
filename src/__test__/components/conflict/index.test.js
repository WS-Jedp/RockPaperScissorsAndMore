import React from 'react'
import { create } from 'react-test-renderer'

import { Conflict } from '../../../components/conflict'

describe('Tests to the component "Conflict"', () => {
  describe('Visual tests to the "Conflict" component', () => {
    const ConflictComponent = create(<Conflict />)
    
    test('should the component be the same', () => {
      expect(ConflictComponent.toJSON()).toMatchSnapshot()
    })
    
  })
})
