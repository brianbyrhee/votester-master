import React from 'react'
import { Nav, NavLink, NavMenu, Bars, NavBtnLink, NavBtn } from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Votester</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to = "/about" activeStyle>
            About Votester
          </NavLink>  
          <NavLink to = "/createVote" activeStyle>
            Hold a Vote!
          </NavLink>  
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar;
