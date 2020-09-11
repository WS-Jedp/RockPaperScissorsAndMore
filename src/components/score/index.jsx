import React from 'react'
import { ScoreWrapper } from './styles'

import { LoadingScore } from '../loadingScore'

export const Score = ({title = "score", score = 0, showScore}) => {

  return (
    <ScoreWrapper>
      <h2>{ title }</h2>
      <b>
        { showScore ? score : <LoadingScore /> }
      </b>
    </ScoreWrapper>
  )
}