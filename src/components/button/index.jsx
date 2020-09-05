import React from 'react'
import { ButtonSecondaryWrapper, ButtonPrimaryWrapper } from './styles'

export const ButtonSecondary = ({title = 'Rules', action = () => {}}) => (
  <ButtonSecondaryWrapper>
    {title}
  </ButtonSecondaryWrapper>
)

export const ButtonPrimary = ({title = 'Play Again', action = () => {}}) => (
  <ButtonPrimaryWrapper>
    {title}
  </ButtonPrimaryWrapper>
)
