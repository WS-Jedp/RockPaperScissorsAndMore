import React from 'react'
import { create } from 'react-test-renderer'
import { mount } from 'enzyme'

import { Conflict } from '../../../components/conflict'

describe('Tests to the component "Conflict"', () => {

  const option = {
    scissors: {
      name: 'scissors',
      color: 'orange',
      weaknesses: [
        'spock',
        'rock'
      ]
  }

  describe('Visual tests to the "Conflict" component', () => {
    const ConflictComponent = create(<Conflict userOption={option.scissors} />)
    test('should the component be the same', () => {
      expect(ConflictComponent.toJSON()).toMatchSnapshot()
    })
  })


  describe('Functional tests to the "Conflict" components', () => {
    const ConflictMount = mount(<Conflict userOption={option.scissors} />)
    test('should the length of the component be 1', () => {
      expect(ConflictMount.length).toBe(1)
    })
    test('should the length of the component be 1', () => {
      expect(ConflictMount.props()).toBe({userOption})
    })
    
  })

})
