import React from 'react'
import { ButtonBox } from './styles'

const Button = ({ children, onClick, width, type }) => {
  return (
    <>
      <ButtonBox onClick={onClick} width={width} type={type}>
        {children}
      </ButtonBox>
    </>
  )
}

Button.defaultProps = {
  width: 'auto',
  type: 'button',
}

export default Button
