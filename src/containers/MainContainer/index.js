import React from 'react'
import { Container, Content } from './styles'

const MainContainer = ({ children, bgColor }) => {
  return (
    <>
      <Container bgColor={bgColor}>
        <Content>{children}</Content>
      </Container>
    </>
  )
}

MainContainer.defaultProps = {
  bgColor: 'gray',
}

export default MainContainer
