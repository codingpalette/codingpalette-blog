import React from 'react'
import { Container } from './styles'

const CardContainer = ({ children }) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  )
}

export default CardContainer
