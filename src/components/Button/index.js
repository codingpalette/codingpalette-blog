import React from 'react'
import { ButtonBox } from './styles'

const Button = ({ children, onClick, width, type, theme, loading }) => {
  return (
    <>
      <ButtonBox onClick={onClick} width={width} type={type} theme={theme}>
        {children}
      </ButtonBox>
    </>
  )
}

Button.defaultProps = {
  width: 'auto',
  type: 'button',
  theme: 'primary',
  loading: false,
}

export default Button
