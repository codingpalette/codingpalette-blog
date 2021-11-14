import React from 'react'
import { ButtonBox } from './styles'

const Button = ({ children }) => {
  return (
    <>
      <ButtonBox>{children}</ButtonBox>
    </>
  )
}

export default Button
