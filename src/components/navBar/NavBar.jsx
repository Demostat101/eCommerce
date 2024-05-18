import { NavLink } from 'react-router-dom'
import "./NavBar.css"

import React from 'react'

const NavBar = () => {
  return (
    <div className='Nav-bar'>

        <NavLink className="link" to={"/"}>HOME</NavLink>
        <NavLink className="link" to={"/cart"}>CART</NavLink>

      
    </div>
  )
}

export default NavBar
