import React from 'react'
import { ConflictWrapper } from './styles'

import { PickedOption } from '../pickedOption'
import { PlayAgain } from '../playAgain'

export const Conflict = () => {

  const isMobile = false
  
  return (
    <>
      <ConflictWrapper>
        <PickedOption title='You Picked' option='scissors' color='yellow'picked={true} />
        {
        isMobile && <PlayAgain title='You Win'action={() => {}} />
        }
        <PickedOption title='The House Picked' option='paper' color='cian' />
      </ConflictWrapper>
      {
        !isMobile && <PlayAgain title='You Win'action={() => {}} />
      }
    </>
  )
}
