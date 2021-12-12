import React from 'react'
import { SelectBox } from './styles'

const Select = ({ options, defaultValue, changeValue }) => {
  const onChangeSelect = e => {
    console.log(e.target.value)
    changeValue(e.target.value)
  }

  return (
    <>
      <SelectBox onChange={onChangeSelect}>
        {options.map(v => (
          <option key={v.id} value={v.value} defaultValue={defaultValue === v.value}>
            {v.name}
          </option>
        ))}
      </SelectBox>
    </>
  )
}

export default Select
