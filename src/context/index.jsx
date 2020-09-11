import React, {createContext, useState} from 'react'
import { selectOption } from '../tools/selectOption'
import { defineScore } from '../tools/defineScore'
import { selectOptionHome } from '../tools/selectOptionHome'
import { selectWinner } from '../tools/selectWinner'

export const Context = createContext()

export const Provider = ({children}) => {

  const [optionUser, setOptionUser] = useState({})
  const [optionHome, setOptionHome] = useState(null)
  const [winner, setWinner] = useState(null)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(true)

  const selectedUserOption = (name) => {
    const newOption = selectOption(name)
    setOptionUser(newOption)
  }
  const selectedHomeOption = () => {
    const newOption = selectOptionHome()
    setOptionHome(newOption);
  }
  const selectedWinner = (optUser, optHome) => {
    const result = selectWinner(optUser, optHome)
    setWinner(result)
    const newScore = defineScore(result, score)
    setScore(newScore)
    setShowScore(false)
    return result
  }

  const setScoreWinner = () => {
    const newScore = defineScore(winner, score)
    setScore(newScore)
  }

  const initialState = {
    optionUser: optionUser,
    optionHome: optionHome,
    setNewOptionUser: selectedUserOption,  
    setNewOptionHome: selectedHomeOption, 
    resetOptionHome: setOptionHome, 
    validateWinner: selectedWinner,
    newScore: setScoreWinner,
    setShowScore,
    showScore, 
    score,
    winner
  }
  
  return (
    <Context.Provider value={initialState}>  
      {children}
    </Context.Provider>)
}
