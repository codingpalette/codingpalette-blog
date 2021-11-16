import styled from '@emotion/styled'

export const CardBox = styled.div`
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  width: 400px;
  position: relative;
  overflow: hidden;
  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 10px;
    background-color: #655fb0;
  }
`
