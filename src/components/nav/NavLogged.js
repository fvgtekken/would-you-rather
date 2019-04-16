import React from 'react'

import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav,
  NavItem, NavLink, UncontrolledDropdown, DropdownToggle, 
  DropdownMenu, DropdownItem } from 'reactstrap';
  import { NavLink as RRNavLink } from 'react-router-dom';

 const NavLogged = (props) => {

        const {userName, userAvatar, toggle, isOpen, logoutUser} = props
   
         return (<Navbar color="light" light expand="md">
          
        <NavbarBrand href="/">Wolud you Rather</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={RRNavLink} to="/home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/add">New Question</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/leaderBoard">LeaderBoard</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                 {userName && userAvatar ? <span className="navbar-user-info">
                    <span className="text-login-authed">{userName}</span>
                    <img src={userAvatar} alt="..." className="rounded-top rounded-bottom img-login-authed" />
                  </span>:null}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                     <NavLink tag={RRNavLink} to="/login" onClick={logoutUser} >LogOut</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>);

   }





export default NavLogged