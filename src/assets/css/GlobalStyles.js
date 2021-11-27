import { css } from '@emotion/react'

export const GlobalStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  code,
  form,
  fieldset,
  legend,
  textarea,
  p,
  blockquote,
  th,
  td,
  input,
  select,
  textarea,
  button,
  figure {
    margin: 0;
    padding: 0;
  }

  //body,
  //th,
  //td,
  //input,
  //select,
  //textarea,
  //button {
  //  color: #333;
  //}

  dl,
  ul,
  ol,
  menu,
  li {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body,
  html {
    height: 100%;
  }
  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }

  ///* color값은 디자인가이드에 맞게사용 */
  //body *{line-height:1.5; font-family: 'NanumSquareRound'; font-size: 1em; }

  a {
    text-decoration: none;
  }

  html {
    font-size: 16px;
    //font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }
  body * {
    line-height: 1;
    font-size: 1em;
    font-family: 'Spoqa Han Sans Neo', 'Noto Sans KR', 'sans-serif';
  }

  @font-face {
    font-family: 'ONE-Mobile-POP';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-POP.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`
