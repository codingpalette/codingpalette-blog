import styled from '@emotion/styled'
import { css } from '@emotion/react'
import transitions from '../../assets/css/transitions'

export const HeaderBox = styled.div`
  width: 100%;
  height: 60px;
  background-color: #fff;
  padding: 0 1rem;
  box-sizing: border-box;
  position: sticky;
  left: 0;
  top: 0;
  header {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .circle_btn {
      width: 35px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.2s ease-in-out;
      border-radius: 50%;
    }
    .circle_btn:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
  }
`

export const NabBox = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  justify-content: flex-end;

  .back {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    ${props =>
      props.isActive
        ? css`
            animation: ${transitions.fadeIn} 0.2s forwards ease-in-out;
          `
        : css`
            animation: ${transitions.fadeOut} 0.2s forwards ease-in-out;
          `}
  }

  .nav_content {
    position: relative;
    z-index: 10;
    background-color: #fff;
    width: 300px;
    overflow: auto;

    ${props =>
      props.isActive
        ? css`
            animation: ${transitions.slideLeftOpen} 0.2s forwards ease-in-out;
          `
        : css`
            animation: ${transitions.slideRightClose} 0.2s forwards ease-in-out;
          `}

    nav {
      min-height: 100%;
      .nav_close_box {
        padding: 0.5rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
      .line {
        display: block;
        width: 100%;
        height: 1px;
        background-color: #ccc;
        margin: 5px 0;
      }
      ul li a,
      ul li button {
        width: 100%;
        display: flex;
        align-items: center;
        color: #222;
        padding: 0.75rem 1rem;
        box-sizing: border-box;
        span {
          margin-right: 1rem;
        }
      }
      ul li a:hover,
      ul li button:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }
    }
  }
`
