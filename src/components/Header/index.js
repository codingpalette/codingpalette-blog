import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { HeaderBox } from './styles'
import Button from '../Button'

import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'
import { useRecoilValue } from 'recoil'
import authState from '../../store/authState'

const Header = () => {
  const userData = useRecoilValue(authState)
  const navigate = useNavigate()
  const [isActive, setIsActive] = useState(false)

  const onClickMenuToggle = () => {
    setIsActive(!isActive)
  }

  return (
    <>
      <HeaderBox>
        <div className="logo_box">
          <Link to="/">CodingPalette</Link>
        </div>
        {/*<div className={`${isActive ? 'active' : ''} menu_box`} onClick={onClickMenuToggle}>*/}
        {/*  <span className="bar bar1" />*/}
        {/*  <span className="bar bar2" />*/}
        {/*  <span className="bar bar3" />*/}
        {/*</div>*/}
        <div className={`${isActive ? 'active' : ''} nav_box`}>
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          {/*<NavLink to="/">Home</NavLink>*/}
          {/*<NavLink to="/about">About</NavLink>*/}
          {/*{!userData ? (*/}
          {/*  <Button onClick={() => navigate('/login')}>로그인</Button>*/}
          {/*) : (*/}
          {/*  <Button onClick={() => signOut(auth)}>로그아웃</Button>*/}
          {/*)}*/}
          {userData && <Button onClick={() => signOut(auth)}>로그아웃</Button>}
        </div>
      </HeaderBox>
    </>
  )
}

export default Header
