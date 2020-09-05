import React from 'react'
import { WrapperHeader } from './styles'

import { Score } from '../score/index'
import { Logo } from '../logo'

export const Header = () => (
  <WrapperHeader>
    <Logo />
    <Score />
  </WrapperHeader>
) 