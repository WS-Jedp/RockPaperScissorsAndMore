import styled from 'styled-components'
import { FadeInAnimation } from '../../styles/Animation'

export const ModalWrapper = styled.article`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.3);
  z-index: 12;
  ${FadeInAnimation()};
`
