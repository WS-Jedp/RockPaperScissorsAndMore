import { keyframes, css } from 'styled-components'

const LoadingPickingOption = keyframes`
  0% {
    transform: scale(1.0);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1.0);
  }
`

export const LoadingPickingAnimation = (loop = 'infinite', time = '.3s', type = 'ease-in-out') => css`
  animation: ${LoadingPickingOption} ${loop} ${time} ${type};
`

const LoadingScore = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const LoadingScoreAnimation = (loop = 'infinite', time = '.3s', type = 'ease-in-out') => css`
  animation: ${LoadingScore} ${loop} ${time} ${type};
`

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const FadeInAnimation = (time = '.6s', type = 'ease-in-out') => css`
  animation: ${FadeIn} ${time} ${type};
`
