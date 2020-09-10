import styled from 'styled-components'
import { LoadingPickingAnimation } from '../../styles/Animation'

export const PickedOptionWrapper = styled.article`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  height: auto;

  strong {
    padding-top: 30px;
    color: var(--white-color);
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  

  @media screen and (min-width: 420px) {
    & {
      flex-flow: column-reverse nowrap;

      strong {
        padding-top: initial;
        padding-bottom: 30px;
      }
    }
  }
`

export const LoadingWrapper = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 110px;
  border: 9px solid #273ca9;
  border-radius: 50%;
  background-color: #273ca9;
  z-index: 9;

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 9px solid rgba(255,255,255, .1);
    border-radius: 50%;
    background-color: rgba(255,255,255, .1);
    ${LoadingPickingAnimation('infinite', '.9s', 'ease-in-out')};
  }`