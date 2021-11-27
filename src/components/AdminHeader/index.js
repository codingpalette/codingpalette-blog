import React, { useCallback, useEffect, useState } from 'react'
import { HeaderBox, NabBox } from './styles'
import { Link } from 'react-router-dom'

const AdminHeader = ({ title }) => {
  const [isActive, setIsActive] = useState(false)
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

  const onClickMenuOpen = useCallback(() => {
    setIsActive(true)
  }, [isActive])

  const onClickMenuClose = useCallback(() => {
    setIsActive(false)
  }, [isActive])

  return (
    <>
      <HeaderBox>
        <header>
          <h1>{title}</h1>
          <div className="button_box">
            <button type="button" onClick={onClickMenuOpen}>
              <span className="material-icons-outlined">menu</span>
            </button>
          </div>
          {!closed && (
            <NabBox isActive={isActive}>
              <div className="nav_content">
                <nav>
                  <div className="nav_close_box">
                    <button type="button" onClick={onClickMenuClose}>
                      <span className="material-icons">close</span>
                    </button>
                  </div>
                  <span className="line" />
                  <ul>
                    <li>
                      <Link to="/admin">
                        <span className="material-icons-outlined">home</span>
                        Home
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <span className="back" onClick={onClickMenuClose} />
            </NabBox>
          )}
        </header>
      </HeaderBox>
    </>
  )
}

export default AdminHeader
