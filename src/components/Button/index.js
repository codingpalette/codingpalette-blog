import React from 'react'
import { ButtonBox } from './styles'

const Button = ({ children, onClick, width, type, theme, loading, className }) => {
  return (
    <>
      <ButtonBox onClick={onClick} width={width} type={type} theme={theme} className={className}>
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
