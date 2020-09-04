import React from 'react'
import { RulesWrapper, HeaderRules, ImageRules } from './styles'

import { IconClose } from '../icons'

export const Rules = ({title, img}) => {
  return (
    <RulesWrapper>
      <HeaderRules>
        <h2>{title}</h2>
        <div className="close-rules-up">
          <IconClose />
        </div>
      </HeaderRules>

      <ImageRules aria-label="Rules of the game">
        <img src={img} alt="Rules of the game"/>
      </ImageRules>
      <div className="close-rules-down">
        <IconClose width="30" height="30" />
      </div>
    </RulesWrapper>
  )
}
