import React from 'react'
import { create } from 'react-test-renderer'
import { mount } from 'enzyme'

import { Score } from '../../../components/score'

describe('Testing visual features of the component "Score"', () => {

  const ScoreComponent = create(<Score />)

  test('The visual component should be the same', () => {
    expect(ScoreComponent.toJSON()).toMatchSnapshot()
  }) 

  test('Should the title be a string', () => {
    expect(typeof mount(<Score />).find('h2').text()).toBe('string')
  })

  test('Should the score be a number', () => {
    expect(typeof Number(mount(<Score />).find('b').text())).toBe('number')
  })

  
})