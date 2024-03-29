import styled from '@emotion/styled'

export const SelectBox = styled.select`
  appearance: none;
  display: block;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875rem;
  line-height: 1;
  padding: 0.7rem 0.5rem;
  box-sizing: border-box;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid rgb(209, 213, 219);
  outline: none;
  border-radius: 0;
  &:focus {
    border: 1px solid #655fb0;
  }
`
