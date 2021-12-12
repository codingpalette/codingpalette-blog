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

export const PopupBox = styled.div`
  width: 100%;
  padding: 1.5rem;
  box-sizing: border-box;

  h4 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .image_box {
    padding-top: 56.25%;
    position: relative;
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .image_upload_box {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(233, 236, 239);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span {
      font-size: 80px;
      color: rgb(134, 142, 150);
      margin-bottom: 1rem;
    }
  }
`
