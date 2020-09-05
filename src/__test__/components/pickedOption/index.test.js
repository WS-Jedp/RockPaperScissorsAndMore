import React from 'react'
import { create } from 'react-test-renderer'
import { mount } from 'enzyme'

import { PickedOption } from '../../../components/pickedOption'

describe('Test to "PickedOption" component', () => {
  describe('Visual tests to "PickedOption" component', () => {
    const PickedOptionComponent = create(<PickedOption />)

    test('should the component be the same', () => {
      expect(PickedOptionComponent.toJSON()).toMatchSnapshot()
    })
    
  })

  describe('Functional test to the component', () => {
    test('should the title of the component be a "string"', () => {
      expect(typeof mount(<PickedOption />).find('strong').text()).toBe('string')
    })
  })
  
})
