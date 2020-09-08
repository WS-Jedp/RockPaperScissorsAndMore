import React from 'react'
import { ConflictWrapper } from './styles'

import { PickedOption } from '../pickedOption'
import { PlayAgain } from '../playAgain'

export const Conflict = ({userOption = {}, homeOption = {}}) => {

  const isMobile = false
  
  return (
    <>
      <ConflictWrapper>
        <PickedOption title='You Picked' option={userOption.name} color={userOption.color} picked={true} />
        {
        isMobile && <PlayAgain title='You Win'action={() => {}} />
        }
        <PickedOption title='The House Picked' option={homeOption.name} color={homeOption.color} />
      </ConflictWrapper>
      {
        !isMobile && <PlayAgain title='You Win'action={() => {}} />
      }
    </>
  )
}
