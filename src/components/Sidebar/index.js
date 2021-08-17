import React from "react";
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from "./sidebarElements";

const Sidebar = ({isOpen , toggle}) => {
  return (
    <div>
      <SidebarContainer isOpen={isOpen} onClick={toggle} >
        <Icon onClick={toggle} >
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="/about" onClick={toggle} >About</SidebarLink>
            <SidebarLink to="/products" onClick={toggle} >Products</SidebarLink>
            <SidebarLink to="/services" onClick={toggle} >Services</SidebarLink>
            <SidebarLink to="/clients" onClick={toggle} >Clients</SidebarLink>
            <SidebarLink to="/contact" onClick={toggle} >Contact</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/quotation">Get Quotatiion</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </div>
  );
};

export default Sidebar;
