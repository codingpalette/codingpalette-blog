import styled from '@emotion/styled'

export const CardListBox = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`

export const CardContent = styled.div`
  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
  }
  .btn_box {
    display: flex;
    justify-content: flex-end;
    margin: 10px 0;
  }
  .content_list li + li {
    margin-top: 10px;
  }
  .content_list a {
    display: block;
    width: 100%;
    padding: 7px 12px;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
  }
`
