import React from 'react'
import ImageRules from '../../assets/images/image-rules-bonus.svg'

import { WrapperHome } from './styles'

import { Header } from '../../components/header'
import { SelectOption } from '../../components/selectOption'
import { Rules } from '../../components/rules'
import { ButtonSecondary } from '../../components/button'

export const Home = () => (
  <WrapperHome>
    <Header />
    <SelectOption />
    <div className="button">
      <ButtonSecondary title="Rules" />
    </div>
  </WrapperHome>
)