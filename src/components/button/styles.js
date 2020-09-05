import styled from 'styled-components'

export const ButtonSecondaryWrapper = styled.button`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  min-width: 130px;
  min-height: 42px;
  border: 2px solid var(--white-color);
  border-radius: 12px;
  color: var(--white-color);
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 2px;
  background-color: transparent;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 12px 3px rgba(255,255,255, .3)
  }


`

export const ButtonPrimaryWrapper = styled.button`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  min-width: 190px;
  min-height: 42px;
  border: 2px solid var(--white-color);
  border-radius: 12px;
  color: var(--black-color);
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 2px;
  background-color: var(--white-color);
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 12px 3px rgba(255,255,255, .3)
  }


`