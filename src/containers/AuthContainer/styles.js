import styled from '@emotion/styled'

export const AuthContainerBox = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;

  @media screen and (max-height: 550px) {
    height: auto;
  }
`
