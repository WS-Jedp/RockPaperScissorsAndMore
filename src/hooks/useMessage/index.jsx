import React, { useState } from 'react'

export const useMessage = (result = true) => {

  const [msg, setMsg] = useState(null)

  function validateWinner(value){
    switch (value) {
      case 'winner':
        setMsg('You Win! Congrats! :D')
        break;
  
      case 'loser':
        setMsg('You Lose! We sorry D:')
        break;
    
      default:
        setMsg('Is a Draw!! :O')
        break;
    }
  }


  return [msg, validateWinner]
} 