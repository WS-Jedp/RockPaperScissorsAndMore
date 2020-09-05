import styled from 'styled-components'

export const OptionWrapper = styled.article`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 110px;
  border: 9px solid var(--${props => props.color || 'blue'}-color);
  border-radius: 50%;
  background-color: var(--white-color);
  box-shadow: inset 0 6px 1px rgba(0,0,0,.2);
  cursor: pointer;
  z-index: 12;

  svg {
    position: relative;
    z-index: 6;
  }

  &::before {
    content: '';
    display: inline-flex;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 9px solid transparent;
    background-color: transparent;
    box-shadow: 0 6px 1px rgba(0,0,0,.2);
    z-index: 12;
  }

  &::after {
    content: '';
    display: inline-flex;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: rgba(255,255,255, .1);
    z-index: -1;
    transition: 0.3s ease-in-out;
  }

  & .option-shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: rgba(255,255,255, .1);
    z-index: -1;
    transition: 0.4s ease-in-out;
  }
  
  & .option-shadow-large {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: rgba(255,255,255, .1);
    z-index: -1;
    transition: 0.5s ease-in-out;
  }

  &:hover {

    &::after {
      width: 150%;
      height: 150%;
    }

  }
  &:focus {
    &::after {
      width: 150%;
      height: 150%;
    }
    & .option-shadow {
      width: 200%;
      height: 200%;
    }

    & .option-shadow-large {
      width: 250%;
      height: 250%;
    }
  }

  @media screen and (min-width: 420px){
    & {
      width: 150px;
      height: 150px;
      border: 12px solid var(--${props => props.color || 'blue'}-color); 
    }
  }
`