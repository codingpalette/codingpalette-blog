import React from 'react'
import { InputTag } from './styles'

const Input = ({ value, onChange, type, id, required }) => {
  return (
    <>
      <InputTag value={value} onChange={onChange} id={id} type={type} required={required} />
    </>
  )
}

Input.defaultProps = {
  type: 'text',
}

export default Input
