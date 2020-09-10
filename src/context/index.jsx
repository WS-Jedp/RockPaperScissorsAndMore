import React, {createContext, useState} from 'react'
import { selectOption } from '../tools/selectOption'
import { selectOptionHome } from '../tools/selectOptionHome'
import { selectWinner } from '../tools/selectWinner'

export const Context = createContext()

export const Provider = ({children}) => {

  const [optionUser, setOptionUser] = useState({})
  const [optionHome, setOptionHome] = useState(null)
  const [winner, setWinner] = useState(null)
  const [score, setScore] = useState(0)

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
    return result
  }

  const winMatch = () => setScore(score + 1)
  const loseMatch = () => {
    if (score > 0) setScore(score - 1)
    else setScore(0)
  }

  const initialState = {
    optionUser: optionUser,
    optionHome: optionHome,
    setNewOptionUser: selectedUserOption,  
    setNewOptionHome: selectedHomeOption, 
    resetOptionHome: setOptionHome, 
    validateWinner: selectedWinner,
    winner
  }
  
  return (
    <Context.Provider value={initialState}>  
      {children}
    </Context.Provider>)
}
