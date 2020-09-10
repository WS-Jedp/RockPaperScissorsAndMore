import React from 'react'
import { Option } from '../option'

import { PickedOptionWrapper, LoadingWrapper } from './styles'

export const PickingOptionLoading = ({title = 'The House Is Picking...'}) => (
  <PickedOptionWrapper>
    <LoadingWrapper>
      <div></div>
    </LoadingWrapper>
    <strong>
      {title}
    </strong>
  </PickedOptionWrapper>
)