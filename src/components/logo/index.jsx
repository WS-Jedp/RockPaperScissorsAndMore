import React from 'react'
import LogoSVG from '../../assets/images/logo-bonus.svg'

import { LogoWrapper } from './styles'

export const Logo = () => (
  <LogoWrapper aria-label="Logo Rock, Paper, Scissors And More">
    <img src={LogoSVG} alt="Logo Rock, Paper, Scissors And More"/>
  </LogoWrapper>
)