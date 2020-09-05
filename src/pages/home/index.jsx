import React from 'react'
import ImageRules from '../../assets/images/image-rules-bonus.svg'

import { WrapperHome } from './styles'

import { Rules } from '../../components/rules'
import { Header } from '../../components/header'

export const Home = () => (
  <WrapperHome>
    <Header />
    <Rules title="Rules" img={ImageRules} />
  </WrapperHome>
)