import React, {useContext, useState} from 'react'
import imageRules from '../assets/images/image-rules-bonus.svg'
import { Context } from '../context'

import { LayoutWrapper } from './styles'

import { Header } from '../components/header'
import { ButtonSecondary } from '../components/button'
import { Modal } from '../components/modal'
import { Rules } from '../components/rules'

export const Layout = ({children}) => {

  const { score, showScore } = useContext(Context)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  return (
    <LayoutWrapper>
      <Header score={score} showScore={showScore} />
      { children }
      <div className="button">
          <ButtonSecondary title="Rules" action={() => setIsModalOpen(!isModalOpen)} />
      </div>
      {
        isModalOpen && <Modal><Rules title="Rules" img={imageRules} action={() => setIsModalOpen(!isModalOpen)} /></Modal> 
      }
    </LayoutWrapper>
  )
}
