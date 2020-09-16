import React from 'react'

import BgImage from '../../assets/images/bg-pentagon.svg';

import { options as listOptions } from '../../tools/options'

import { SelectOptionWrapper } from './styles'
import { Option } from '../option'

export const SelectOption = ({action, option}) => {

  return (
    <SelectOptionWrapper bgImg={BgImage}>
      <div className="row-1">
        <Option option={listOptions.scissors.name} 
          action={() => action(listOptions.scissors.name)} 
          color={listOptions.scissors.color} 
          grid="scissors-grid" 
        />
      </div>

      <div className="row-2">
        <Option 
          action={() => action(listOptions.paper.name)}
          option={listOptions.paper.name} 
          color={listOptions.paper.color} 
          grid="paper-grid" 
        />
        <Option 
          action={() => action(listOptions.spock.name)}
          option={listOptions.spock.name} 
          color={listOptions.spock.color} 
          grid="spock-grid" 
        />
      </div>

      <div className="row-3">
        <Option 
          action={() => action(listOptions.lizard.name)}
          option={listOptions.lizard.name} 
          color={listOptions.lizard.color} 
          grid="lizard-grid" 
        />
        <Option 
          action={() => action(listOptions.rock.name)}
          option={listOptions.rock.name} 
          color={listOptions.rock.color} 
          grid="rock-grid" 
        />
      </div>
    </SelectOptionWrapper>
  )
}