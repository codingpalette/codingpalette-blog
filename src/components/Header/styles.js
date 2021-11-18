import styled from '@emotion/styled'

export const HeaderBox = styled.div`
  height: 60px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  position: relative;

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

  .menu_box {
    width: 30px;
    height: 25px;
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
    display: none;
    //right: 1rem;
    //top: 1rem;
    //z-index: 10;

    .bar {
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #000;
    }

    .bar1 {
      left: 0;
      top: 0;
    }

    .bar2 {
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    .bar3 {
      left: 0;
      top: 100%;
      transform: translateY(-100%);
    }
  }

  @media screen and (max-width: 768px) {
    .menu_box {
      display: block;
    }

    .nav_box {
      //display: none;
      position: fixed;
      right: -100%;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(35, 40, 58, 0.91);
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 1rem;
      box-sizing: border-box;
      a {
        color: #fff;
        margin-left: 0;
        width: 100%;
        text-align: center;
        padding: 1rem;
        box-sizing: border-box;
      }
      button {
        margin-left: 0;
        width: 100%;
      }
    }
  }
`
