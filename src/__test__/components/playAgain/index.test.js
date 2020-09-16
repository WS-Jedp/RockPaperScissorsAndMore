import React from 'react'
import { create } from 'react-test-renderer'
import { mount } from 'enzyme'

import { PlayAgain } from '../../../components/playAgain'

describe('Test to "PlayAgain" component', () => {
  describe('Visual tests to "PlayAgain" component', () => {
    const PlayAgainComponent = create(<PlayAgain />)

    test('should the component be the same', () => {
      expect(PlayAgainComponent.toJSON()).toMatchSnapshot()
    })
    
  })

  describe('Functional test to the component', () => {
    test('should the title of the component be a "string"', () => {
      expect(typeof mount(<PlayAgain />).find('h2').text()).toBe('string')
    })
  })
  
})
