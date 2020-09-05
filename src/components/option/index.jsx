import React from 'react'
import { OptionWrapper } from './styles'
import { CurrentOption } from '../currentOption'

export const Option = ({option = 'rock', color = 'red', action = () => {}}) => {

  return (
    <OptionWrapper color={color} onClick={action}>
      <figure aria-label={option}>
        <CurrentOption option={option} />
      </figure>

      <div className="option-shadow"></div>
      <div className="option-shadow-large"></div>
    </OptionWrapper>
  )
}
