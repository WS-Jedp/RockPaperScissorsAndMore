import { options } from '../options'

export const selectOption = (optionName = '') => {
  try {
    return options[optionName]
  } catch(err) {
    throw new Error('Sorry, the option can\'t be selected:(' ,err)
  }
}