import React from 'react'
import { Nav, NavLink, NavMenu, Bars, NavBtnLink, NavBtn } from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to ='/'>
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
          <NavLink to = "/findVote" activeStyle>
            Find Vote
          </NavLink>    
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to="../signin">Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;
