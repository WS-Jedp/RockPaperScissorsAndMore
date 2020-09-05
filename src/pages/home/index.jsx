import React from 'react'
import ImageRules from '../../assets/images/image-rules-bonus.svg'

import { WrapperHome } from './styles'

import { Rules } from '../../components/rules'
import { Header } from '../../components/header'
import { Option } from '../../components/option'
import { ButtonSecondary, ButtonPrimary } from '../../components/button'

export const Home = () => (
  <WrapperHome>
    <ButtonSecondary title="Rules" />
    <ButtonPrimary title="Play Again" />
    <Option option="rock" color="blue" />
    <Header />
    <Rules title="Rules" img={ImageRules} />
  </WrapperHome>
)