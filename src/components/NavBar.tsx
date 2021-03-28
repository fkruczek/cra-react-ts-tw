import React, { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = (): ReactElement => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  )
}

export default NavBar
