import styled from 'styled-components'
import { LoadingScoreAnimation } from '../../styles/Animation'

export const LoadingWrapper = styled.div`
  position: relative;
  margin: 9px;
  width: 30px;
  height: 30px;
  background-color: var(--white-color);
  border: 1px solid var(--blue-color);
  border-left: 0; 
  border-bottom: .6px;
  border-radius: 50%;
  ${LoadingScoreAnimation('infinite', '.6s', 'linear')};
`
