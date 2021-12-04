import React from 'react'
import { InputTag } from './styles'

const Input = ({ value, onChange, type, id, required, placeholder }) => {
  return (
    <>
      <InputTag value={value} onChange={onChange} id={id} type={type} required={required} placeholder={placeholder} />
    </>
  )
}

Input.defaultProps = {
  type: 'text',
}

export default Input
