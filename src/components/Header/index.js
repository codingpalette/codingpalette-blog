import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { HeaderBox } from './styles'
import Button from '../Button'

const Header = () => {
  const navigate = useNavigate()
  return (
    <>
      <HeaderBox>
        <div className="logo_box">
          <Link to="/">CodingPalette</Link>
        </div>
        <div className="nav_box">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <Button onClick={() => navigate('/login')}>로그인</Button>
        </div>
      </HeaderBox>
    </>
  )
}

export default Header
