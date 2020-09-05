import React from 'react'

import BgImage from '../../assets/images/bg-pentagon.svg';

import { SelectOptionWrapper } from './styles'
import { Option } from '../option'

export const SelectOption = () => {

  return (
    <SelectOptionWrapper bgImg={BgImage}>
      <div className="row-1">
        <Option option="scissors" color="orange" grid="scissors-grid" />
      </div>
      <div className="row-2">
        <Option option="paper" color="blue" grid="paper-grid" />
        <Option option="spock" color="cian" grid="spock-grid" />
      </div>
      <div className="row-3">
        <Option option="lizard" color="purple" grid="lizard-grid" />
        <Option option="rock" color="red" grid="rock-grid" />
      </div>
    </SelectOptionWrapper>
  )
}