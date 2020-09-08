import React, {createContext, useState} from 'react'
import { selectOption } from '../tools/selectOption'

export const Context = createContext()

export const Provider = ({children}) => {

  const [optionUser, setOptionUser] = useState({})
  const [optionHome, setOptionHome] = useState({})
  const [winner, setWinner] = useState(false)

  const selectedUserOption = (name) => {
    const newOption = selectOption(name)
    setOptionUser(newOption)
  }
  const selectedHomeOption = (name) => {
    const newOption = selectOption(name)
    setOptionHome(newOption)
  }

  const initialState = {
    optionUser,
    optionHome,
    setNewOptionUser: (value) => { selectedUserOption(value) },  
    setNewOptionHome: (value) => { selectedHomeOption(value) },  
    winner
  }
  
  return (
    <Context.Provider value={initialState}>  
      {children}
    </Context.Provider>)
}
