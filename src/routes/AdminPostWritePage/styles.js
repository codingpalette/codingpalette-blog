import styled from '@emotion/styled'

export const Container = styled.div`
  padding-top: 1rem;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
`

export const EditorBox = styled.div`
  margin-top: 1rem;
`

export const ButtonBox = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  button + button {
    margin-left: 1rem;
  }
`
