import styled from 'styled-components'

export const ScoreWrapper = styled.div`
  display: flex;
  width: 90px;
  height: 90px;
  border-radius: 6px; 
  flex-flow: column nowrap;
  background-color: var(--white-color);
  align-items: center;
  justify-content: center;
  
  h2 {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--main-color);
  }

  b {
    font-size: 32px;
    font-weight: 900;
    color: var(--black-color);
  }

  @media screen and (min-width: 420px){
    & {
      width: 150px;
      height: 120px;
    }
  }
`