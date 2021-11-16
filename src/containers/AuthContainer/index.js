import React from 'react'
import { AuthContainerBox } from './styles'

const AuthContainer = ({ children }) => {
  return (
    <>
      <AuthContainerBox>{children}</AuthContainerBox>
    </>
  )
}

export default AuthContainer
