import styled from '@emotion/styled'

export const LoginContainer = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  box-sizing: border-box;

  .card_box {
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
    .form_group {
      margin-top: 1rem;
    }
    h3 {
      padding-top: 10px;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }
    .input_group {
      margin-bottom: 1rem;
    }
    label {
      font-weight: 500;
      line-height: 1.25rem;
      display: block;
      color: #374151;
      font-size: 0.85rem;
    }
    .btn_box {
      button {
        margin-bottom: 0.5rem;
      }
    }
  }
`
