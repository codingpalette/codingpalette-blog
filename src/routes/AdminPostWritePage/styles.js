import styled from '@emotion/styled'

export const Container = styled.div`
  padding-top: 1rem;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
`

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  span {
    display: block;
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
  }
  div {
    display: flex;
    align-items: center;
    .submit_btn {
      margin-left: 1rem;
    }
  }
`

export const TagGroup = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`

export const EditorBox = styled.div`
  margin-top: 1rem;
  & * {
    line-height: 1.6;
  }
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

  .actions {
    text-align: right;
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

  .description_box {
    margin-top: 1rem;
    textarea {
      display: block;
      width: 100%;
      margin-top: 0.25rem;
      font-size: 0.875rem;
      line-height: 1.5;
      padding: 0.5rem;
      box-sizing: border-box;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      border: 1px solid rgb(209, 213, 219);
      outline: none;
      resize: none;
      height: 150px;
      &:focus {
        border: 1px solid #655fb0;
      }
    }
  }

  .button_box {
    margin-top: 1rem;
    text-align: right;
    button + button {
      margin-left: 1rem;
    }
  }
`
