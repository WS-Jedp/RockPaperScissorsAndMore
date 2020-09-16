import React from 'react'
import ReactDOM from 'react-dom'
import { ModalWrapper } from './styles'

export const Modal = ({children}) => ReactDOM.createPortal((
  <ModalWrapper>
    { children || 'Hello World' }
  </ModalWrapper>), 
  window.document.getElementById('modal-portal'))
