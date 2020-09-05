import React from 'react'
import { PickedOptionWrapper } from './styles'

import { Option } from '../option'

export const PickedOption = ({title = 'The house picked', option = 'rock', color = 'red', picked = false}) => (
  <PickedOptionWrapper>
     {
        picked !== true ? <div className="waiting-picked"></div> : <Option option={option} color={color} />
     }
    <strong>
      {title}
    </strong>
  </PickedOptionWrapper>
)
