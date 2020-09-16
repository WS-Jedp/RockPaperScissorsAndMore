import React from 'react'
import { create } from 'react-test-renderer'
import { mount } from 'enzyme'

import { LoadingScore } from '../../../components/loadingScore'

describe('Tests for the "LoadingScore" component', () => {

  const LoadingScoreComponent = create(<LoadingScore />)
  const LoadingScoreMount = mount(<LoadingScore />)

  test('should the component be the same visual', () => {
    expect(LoadingScoreComponent.toJSON()).toMatchSnapshot()
  })

  test('should the length of the component be one', () => {
    expect(LoadingScoreMount.length).toBe(1)
  })

})
