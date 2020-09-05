import React from 'react'
import {create} from 'react-test-renderer'
import { Mount } from 'enzyme'

import { Option } from '../../../components/option'

describe('Tests to the "Option" component', () => {
  describe('Visual Tests to the "Option" component', () => {
    const OptionComponent = create(<Option />)

    test('should be the same component', () => {
      expect(OptionComponent.toJSON()).toMatchSnapshot()
    })

  })
})
