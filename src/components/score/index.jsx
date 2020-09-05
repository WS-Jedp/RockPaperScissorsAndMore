import React from 'react'
import { ScoreWrapper } from './styles'

export const Score = ({title = "score", score = 0}) => {

  return (
    <ScoreWrapper>
      <h2>{ title }</h2>
      <b>
        { score }
      </b>
    </ScoreWrapper>
  )
}