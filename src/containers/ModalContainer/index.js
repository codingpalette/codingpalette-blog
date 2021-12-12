import React, { useEffect, useState } from 'react'
import { Container } from './styels'

const ModalContainer = ({ children, isActive, closeEvent, maxWidth }) => {
  const [closed, setClosed] = useState(true)

  useEffect(() => {
    document.body.style.overflowY = isActive ? 'hidden' : 'initial'
    let timeoutId
    if (isActive) {
      timeoutId = setTimeout(() => {
        setClosed(false)
      }, 200)
    } else {
      timeoutId = setTimeout(() => {
        setClosed(true)
      }, 200)
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [isActive])

  if (!isActive && closed) return null

  return (
    <>
      <Container isActive={isActive} maxWidth={maxWidth}>
        <div className="modal_back" onClick={closeEvent} />
        <div className="content">{children}</div>
      </Container>
    </>
  )
}

export default ModalContainer
