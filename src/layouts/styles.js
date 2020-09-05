import styled from 'styled-components'

export const LayoutWrapper = styled.section`
  display: flex;
  position: relative;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  background-color: var(--main-color);

  @media only screen and (min-width: 420px) {
    .button {
      align-self: flex-end;
      margin-right: 6%;
    }
  }
`