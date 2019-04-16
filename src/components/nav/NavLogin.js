import React from 'react'

import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav,
  NavItem, NavLink, UncontrolledDropdown, DropdownToggle, 
  DropdownMenu, DropdownItem } from 'reactstrap';
  import { NavLink as RRNavLink } from 'react-router-dom';

 const NavLogin = (props) => {

        const { title } = props
   
         return (<Navbar color="light" light expand="md">
        <NavbarBrand href="/">{title}</NavbarBrand>
        </Navbar>);

   }





export default NavLogin