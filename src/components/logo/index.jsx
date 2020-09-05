import React from 'react'
import logoSVG from '../../assets/images/logo-bonus.svg'

import { LogoWrapper } from './styles'

export const Logo = () => (
  <LogoWrapper aria-label="Logo Rock, Paper, Scissors And More">
    <img src={logoSVG} alt="Logo Rock, Paper, Scissors And More"/>
  </LogoWrapper>
)