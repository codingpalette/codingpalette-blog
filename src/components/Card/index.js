import React from 'react'
import { CardBox } from './styles'

const Card = ({ children }) => {
  return (
    <>
      <CardBox>{children}</CardBox>
    </>
  )
}

export default Card
