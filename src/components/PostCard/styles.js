import styled from '@emotion/styled'

export const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;

  a {
    display: block;
  }

  .thumbnail {
    padding-top: 52.19206680584551%;
    width: 100%;
    position: relative;

    img {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }
  }

  .text_box {
    padding: 1rem;
    box-sizing: border-box;

    h4 {
      font-size: 1rem;
      margin-bottom: 0.25rem;
      line-height: 1.5;
      word-break: break-word;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow-x: hidden;
      overflow-y: hidden;
      color: rgb(33, 37, 41);
    }

    .description_wrapper {
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: 0%;

      p {
        margin-top: 0px;
        word-break: break-word;
        overflow-wrap: break-word;
        font-size: 0.875rem;
        line-height: 1.5;
        height: 3.9375rem;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow-x: hidden;
        overflow-y: hidden;
        text-overflow: ellipsis;
        color: rgb(73, 80, 87);
        margin-bottom: 1.5rem;
      }
    }

    .sub_info {
      font-size: 0.75rem;
      line-height: 1.5;
      color: rgb(134, 142, 150);
      .separator {
        margin-left: 0.25rem;
        margin-right: 0.25rem;
      }
    }
  }

  .option_box {
    padding: 1rem;
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: rgb(248, 249, 250);
    display: flex;
    font-size: 0.75rem;
    line-height: 1.5;
    justify-content: flex-end;
    button + button {
      margin-left: 1rem;
    }
  }
`
