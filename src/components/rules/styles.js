import styled from 'styled-components'

export const RulesWrapper = styled.article`
  display: flex;
  background-color: var(--white-color);
  position: relative;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  padding: 60px 30px;
  border-radius: 6px;

  h2 {
    font-weight: 900;
    text-transform: uppercase;
    color: var(--black-color);
  }

  .close-rules-down: {
    display: inline-block;
  }

  .close-rules-up {
    display: none;
  }


  @media screen and (min-width: 420px){
    &{
      flex-flow: column nowrap;
      justify-content: space-around;
      align-items: stretch;
      min-width: 270px;
      width: 36%;
      min-height: 400px;
      height: 63%;
      padding: 21px;
      box-shadow: 0 0 15px rgba(0,0,0,.3);

    .close-rules-up {
        display: inline-block;
      }
    .close-rules-down {
        display: none;
      }

    }


  }
`

export const ImageRules = styled.figure`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 360px;
  height: 81%;
  align-self: center;
  align-items: center;
  justify-content: center;

  img {
    position: relative;
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`

export const HeaderRules = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 6px;
  margin-bottom: 12px;
`
