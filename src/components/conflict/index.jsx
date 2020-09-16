import React, {useState, useEffect, useContext} from 'react'
import { useNavigate } from '@reach/router'
import { Context } from '../../context'
import { useMessage } from '../../hooks/useMessage'

import { ConflictWrapper } from './styles'

import { PickedOption } from '../pickedOption'
import { PickingOptionLoading } from '../pickingOptionLoading' 
import { PlayAgain } from '../playAgain'

export const Conflict = ({userOption = {}}) => {

  const { optionHome, winner, validateWinner, resetOptionHome, setShowScore } = useContext(Context)
  const [isMobile, setIsMobile] = useState(false)
  const [isPicked, setIsPicked] = useState(false)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const [msgWinner, setMsgWinner] = useMessage(winner)

  const handlePlayAgain = () => {
    setIsPicked(false)
    resetOptionHome(null)
    navigate('/')
  }
  
  useEffect(() => {
    if(optionHome !== null && isPicked === false) {
      setTimeout(() => {
        setIsPicked(true)
        setShowScore(true)
      }, 1500)
    }
  }, [])
  
  // Validating Winner
  useEffect(() => {
    if(loading === true && isPicked === false) {
      const result = validateWinner(userOption, optionHome)
      setMsgWinner(result)
      setLoading(false)    
    }
  }, [loading, isPicked])


  return (
    <>
      <ConflictWrapper>
        <PickedOption title='You Picked' option={userOption.name} color={userOption.color} picked={true} />
        {
          isPicked && isMobile && <PlayAgain title={msgWinner} action={handlePlayAgain} />
        }
        {
          !isPicked ? <PickingOptionLoading title='The House Is Picking...' /> : <PickedOption title='The House Is Picked' option={optionHome.name} color={optionHome.color} picked={true} />
        }
      </ConflictWrapper>
      {
        isPicked && !isMobile && <PlayAgain title={msgWinner} action={handlePlayAgain} />
      }
    </>
  )
}
