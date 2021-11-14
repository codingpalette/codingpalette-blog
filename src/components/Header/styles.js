import styled from '@emotion/styled'

export const HeaderBox = styled.div`
  height: 60px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  .logo_box {
    font-family: 'ONE-Mobile-POP';
    a {
      color: #222;
      font-size: 16px;
    }
  }

  .nav_box {
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      color: #343851;
      margin-left: 1rem;
    }

    button {
      margin-left: 2rem;
    }
  }
`
