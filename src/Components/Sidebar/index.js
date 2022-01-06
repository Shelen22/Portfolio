import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from './SidebarElement'

const Sidebar = ({
  isOpen,
  toggle,
}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle} smooth={true} duration={500} offset={-80}>
            About
          </SidebarLink>
          <SidebarLink to="projects" onClick={toggle} smooth={true} duration={500} offset={-80}>
            Projects
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle} smooth={true} duration={500} offset={-80}>
            Contact
          </SidebarLink>

        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
