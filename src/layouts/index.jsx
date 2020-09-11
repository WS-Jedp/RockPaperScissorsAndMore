import React, {useContext} from 'react'
import { Context } from '../context'

import { LayoutWrapper } from './styles'

import { Header } from '../components/header'
import { ButtonSecondary } from '../components/button'

export const Layout = ({children}) => {

  const { score, showScore } = useContext(Context)
  
  return (
    <LayoutWrapper>
      <Header score={score} showScore={showScore} />
      { children }
      <div className="button">
          <ButtonSecondary title="Rules" />
      </div>
    </LayoutWrapper>
  )
}
