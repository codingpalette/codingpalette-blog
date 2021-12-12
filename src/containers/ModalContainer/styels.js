import styled from '@emotion/styled'
import { css } from '@emotion/react'
import transitions from '../../assets/css/transitions'

export const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;

  .modal_back {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: rgba(249, 249, 249, 0.85);
  }

  .content {
    position: relative;
    z-index: 10;
    width: 100%;
    max-width: ${props => (props.maxWidth ? props.maxWidth : '100%')};
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 12px 0px;
    background-color: #fff;
    border-radius: 0.5rem;
    ${props =>
      props.isActive
        ? css`
            animation: ${transitions.popInFromBottom} 0.2s forwards ease-in-out;
          `
        : css`
            animation: ${transitions.popOutToBottom} 0.2s forwards ease-in-out;
          `}
  }
`
