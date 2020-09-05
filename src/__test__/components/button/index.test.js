import React from 'react'
import { create } from 'react-test-renderer'
import { mount } from 'enzyme'

import { ButtonPrimary, ButtonSecondary } from '../../../components/button'

describe('Tests to the Button compoennt', () => {
  describe('Visual tests to the "Button" component', () => {
    const ButtonComponentPrimary = create(<ButtonPrimary />)
    const ButtonComponentSecondary = create(<ButtonSecondary />)

    test('The components should be the same', () => {
      expect(ButtonComponentPrimary.toJSON()).toMatchSnapshot()
      expect(ButtonComponentSecondary.toJSON()).toMatchSnapshot()
    })
  })

  describe('Functional tests to the "Button" component', () => {
    test('should the title of the component be a string', () => {
      expect(typeof mount(<ButtonPrimary />).find('button').text()).toBe('string')
      expect(typeof mount(<ButtonSecondary />).find('button').text()).toBe('string')
    })
    
  })
})
