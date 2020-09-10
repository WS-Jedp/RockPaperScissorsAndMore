import React from 'react'
import { LayoutWrapper } from './styles'

import { Header } from '../components/header'
import { ButtonSecondary } from '../components/button'

export const Layout = ({children}) => (
  <LayoutWrapper>
    <Header />
    { children }
    <div className="button">
        <ButtonSecondary title="Rules" />
    </div>
  </LayoutWrapper>
)
