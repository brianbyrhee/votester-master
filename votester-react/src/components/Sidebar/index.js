import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  var state = {
    id: (Math.random()*1e16).toString(36)
  }
  const generateid = () => {
    state.id = (Math.random()*1e16).toString(36)
    console.log(state.id)
  }

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/about" onClick={toggle}>
            About Votester
          </SidebarLink>
          <SidebarLink to={"/createVote/" + state.id} onClick = {toggle}>
            Hold a Vote!
          </SidebarLink>
          <SidebarLink to="/findVote" onClick={toggle}>
            Find Vote
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute>
            Sign In
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;
