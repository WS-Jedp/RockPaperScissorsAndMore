import React from 'react'
import { create } from 'react-test-renderer'

import { Layout } from '../../layouts'

describe('Tests to the Layout component', () => {
  describe('Visual tests to the Layout component', () => {
    const LayoutComponent = create(<Layout />)
    test('should the component be the same', () => {
      expect(LayoutComponent.toJSON()).toMatchSnapshot()
    })
  })
})