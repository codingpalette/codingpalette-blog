import styled from '@emotion/styled'

export const Container = styled.div`
  background-color: ${props => (props.bgColor === 'gray' ? 'rgb(248, 249, 250)' : '#fff')};
  padding: 0 1rem;
  box-sizing: border-box;
  width: 100%;
  min-height: calc(100% - 60px);
`

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
  box-sizing: border-box;
`
