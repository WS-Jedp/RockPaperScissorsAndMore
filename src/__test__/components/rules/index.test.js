import React from 'react'
import { mount } from 'enzyme'
import { create } from 'react-test-renderer'
import { Rules } from '../../../components/rules'

describe('Suite of test for the Rules component :D', () => {

  
  describe('Visual test for Rules components' , () => {
    const RulesComponent = create(<Rules />)
    test('should be the same visual component', () => {
      expect(RulesComponent.toJSON()).toMatchSnapshot()
    })

    test('should the title be "RULES"', () => {
      expect(mount(<Rules title="RULES" />).find('h2').text()).toBe('RULES')
    })
    
  })

})