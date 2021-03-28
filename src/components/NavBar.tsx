import React, { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'
import 'twin.macro'

const NavBar = (): ReactElement => (
  <div tw="p-4 bg-yellow-400">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
  </div>
)

export default NavBar
