import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import "./NavBar.css"
import React from 'react'
import { cartContext } from '../../contextComponent/Context'

const NavBar = () => {
  const {state} = cartContext()
  return (
    <div className='Nav-bar'>

        <NavLink className="link" to={"/"}>HOME</NavLink>
        <NavLink className="link" to={"/cart"}><FaShoppingCart size={"30"}/> <div>{state.length > 0 ? <div className='cart-length'>{state.length}</div> : "" }</div> </NavLink>

      
    </div>
  )
}

export default NavBar
