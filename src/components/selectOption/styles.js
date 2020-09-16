import styled from 'styled-components'

export const SelectOptionWrapper = styled.section`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 60vh;

  .row-1 {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin: 3px;
  }

  .row-2 {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin: 3px;
  }

  .row-3 {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    margin: 3px;
  }

  @media only screen and (min-width: 420px){
    & {
      width: 60%;
    }
  }

  @media only screen and (min-width: 720px) {
    & {
      width: 50%;
    }
  }

  @media only screen and (min-width: 1200px) {
    & {
      width: 36%;
    }
  }

`