import React from 'react'
import { mount } from 'enzyme'
import { create } from 'react-test-renderer'

import { PickingOptionLoading } from '../../../components/pickingOptionLoading'

describe('Tests for the "pickingOptionLoading" component', () => {

  describe('Visual tests for the component', () => {
    const PickingOptionLoadingComponent = create(<PickingOptionLoading />) 
    test('should the component be the same', () => {
      expect(PickingOptionLoadingComponent.toJSON()).toMatchSnapshot()
    })
  })

  describe('Functional tests for the component', () => {

    const PickingOptionLoadingMount = mount(<PickingOptionLoading />)

    test('should the compnent return 1 of length', () => {
      expect(PickingOptionLoadingMount.length).toBe(1)
    })

    test('should the title be a string', () => {
      expect(typeof PickingOptionLoadingMount.find('strong').text()).toBe('string')
    })
    
    test('should the title be "the house is picking"', () => {
      expect(PickingOptionLoadingMount.find('strong').text()).toMatch('The House Is Picking...')
    })
  })

})
