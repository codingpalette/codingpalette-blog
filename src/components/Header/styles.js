import styled from '@emotion/styled'

export const HeaderBox = styled.div`
  height: 60px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  position: relative;
  z-index: 100;

  .logo_box {
    a {
      color: #222;
      font-size: 16px;
      font-family: 'ONE-Mobile-POP';
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
    z-index: 10;

    .bar {
      position: absolute;
      width: 100%;
      height: 3px;
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

  //@media screen and (max-width: 768px) {
  //  .menu_box {
  //    display: block;
  //  }
  //
  //  .menu_box.active {
  //    span {
  //      background-color: #fff;
  //    }
  //  }
  //
  //  .nav_box {
  //    display: none;
  //    position: fixed;
  //    right: 0;
  //    top: 0;
  //    width: 100%;
  //    height: 100%;
  //    background-color: rgba(35, 40, 58, 0.91);
  //    flex-direction: column;
  //    align-items: flex-start;
  //    justify-content: flex-start;
  //    padding: 1rem;
  //    box-sizing: border-box;
  //    //transform: translateX(100%);
  //    //transition: transform 0.3s ease-in;
  //    //opacity: 0;
  //    a {
  //      color: #fff;
  //      margin-left: 0;
  //      width: 100%;
  //      text-align: center;
  //      padding: 1rem;
  //      box-sizing: border-box;
  //    }
  //    button {
  //      margin-left: 0;
  //      width: 100%;
  //    }
  //  }
  //  .nav_box.active {
  //    //opacity: 1;
  //    display: flex;
  //    //transform: translateX(0);
  //  }
  //}
`
