import React from 'react'
import { create } from 'react-test-renderer'

import { Header } from '../../../components/Header'

describe('Test for the "Header" component', () => {

  describe('Test for visual features of the "Header" component', () => {
    const HeaderComponent = create(<Header />)
    test('The component should be the same', () => {
      expect(HeaderComponent.toJSON()).toMatchSnapshot()
    })
  })
})