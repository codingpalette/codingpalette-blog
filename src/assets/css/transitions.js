import { keyframes } from '@emotion/react'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const slideLeftOpen = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
`

const slideRightClose = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
`

const popInFromBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(400px) scale(0.75);
  }
  75% {
    opacity: 1;
    transform: translateY(-16px) scale(1.0);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }`

const popOutToBottom = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0px) scale(1.0);
  }
  100% {
    opacity: 0;
    transform: translateY(400px) scale(0.75);
  }`

const leftSlideShow = keyframes`
  0%{
    opacity: 0;
    transform: translateX(-50px) scale(0.75);
  }
  
  100%{
    opacity: 1;
    transform: translateX(0);
  }
`

const transitions = {
  fadeIn,
  fadeOut,
  slideLeftOpen,
  slideRightClose,
  popInFromBottom,
  popOutToBottom,
  leftSlideShow,
}

export default transitions
