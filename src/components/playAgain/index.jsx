import React from 'react'
import { PlayAgainWrapper } from './styles'

import { ButtonPrimary } from '../button'

export const PlayAgain = ({title = 'You Win', action = () => {}}) => (
  <PlayAgainWrapper>
      <h2>
        {title}
      </h2>
      <ButtonPrimary title="Play Again" action={action} />
  </PlayAgainWrapper>  
)
