import { selectOption } from '../selectOption'

const options = ['scissors', 'paper', 'rock', 'lizard', 'spock']

export function selectOptionHome(min = 0, max = 5) {
  const name = options[Math.floor(Math.random() * (max - min))]
  return selectOption(name)

} 
