import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { HeaderBox } from './styles'
import Button from '../Button'

import firebase from '../../firebase'
import { getAuth, signOut } from 'firebase/auth'
import { useRecoilValue } from 'recoil'
import authState from '../../store/authState'

const auth = getAuth()
const Header = () => {
  const userData = useRecoilValue(authState)
  const navigate = useNavigate()

  const onClickMenuToggle = () => {
    console.log('1111')
  }

  return (
    <>
      <HeaderBox>
        <div className="logo_box">
          <Link to="/">CodingPalette</Link>
        </div>
        <div className="menu_box" onClick={onClickMenuToggle}>
          <span className="bar bar1" />
          <span className="bar bar2" />
          <span className="bar bar3" />
        </div>
        <div className="nav_box">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          {userData && userData.userEmail === '' ? (
            <Button onClick={() => navigate('/login')}>로그인</Button>
          ) : (
            <Button onClick={() => signOut(auth)}>로그아웃</Button>
          )}
        </div>
      </HeaderBox>
    </>
  )
}

export default Header
