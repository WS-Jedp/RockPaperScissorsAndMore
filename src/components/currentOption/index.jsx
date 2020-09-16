import React from 'react'
import { IconLizard, IconPaper, IconScissors, IconRock, IconSpock } from '../icons'

export const CurrentOption = ({option = 'rock'}) => {

  const optionName = option.toLowerCase(); 

    switch (optionName) {
      case "rock":
        return <IconRock />
        break;
      case "paper":
        return <IconPaper />
        break;
      case "scissors":
    return <IconScissors />
        break;
      case "lizard":
        return <IconLizard />
        break;
      case "spock":
        return <IconSpock />
        break;
    
      default:
        return <IconRock />
        break;
    }
  }