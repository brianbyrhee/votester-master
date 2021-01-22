import React from 'react'
import { Nav, NavLink, NavMenu, Bars, NavBtnLink, NavBtn } from './NavbarElements';

const Navbar = () => {
  var state = {
    id: (Math.random()*1e16).toString(36)
  }
  const generateid = () => {
    state.id = (Math.random()*1e16).toString(36)
    console.log(state.id)
  }

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
          <NavLink to = {"/createVote/" + state.id} onClick = {generateid} activeStyle>
            Hold a Vote!
          </NavLink>
          <NavLink to = "/findVote" activeStyle>
            Find Vote
          </NavLink>    
          <NavBtnLink to="/voter">Sign In</NavBtnLink>
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to="../signin">Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;
