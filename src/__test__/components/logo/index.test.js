import React from 'react'
import { create } from 'react-test-renderer'

import { Logo } from '../../../components/logo'

describe('Test for the "Logo" component', () => {
  const LogoComponent = create(<Logo />)
  test('The component should be the same', () => {
    expect(LogoComponent.toJSON()).toMatchSnapshot()
  })
})
