import React from 'react'
import {create} from 'react-test-renderer'

import { CurrentOption } from '../../../components/currentOption'

describe('Tests to the "CurrentOption" component', () => {

  describe('Visual tests to the "CurrentOption" component', () => {

    const CurrentOptionComponent = create(<CurrentOption />)

    test('The component should be the same', () => {
      expect(CurrentOptionComponent.toJSON()).toMatchSnapshot()
    })
  })
})
