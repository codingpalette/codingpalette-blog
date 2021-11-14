import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HeaderBox } from './styles'
import Button from '../Button'

const Header = () => {
  return (
    <>
      <HeaderBox>
        <div className="logo_box">
          <Link to="/">CodingPalette</Link>
        </div>
        <div className="nav_box">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <Button>로그인</Button>
        </div>
      </HeaderBox>
    </>
  )
}

export default Header
