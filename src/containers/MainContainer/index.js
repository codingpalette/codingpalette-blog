import React from 'react'
import { Container, Content } from './styles'

const MainContainer = ({ children }) => {
  return (
    <>
      <Container>
        <Content>{children}</Content>
      </Container>
    </>
  )
}

export default MainContainer
