import React from 'react'

import {
  Navbar, NavbarBrand,
   } from 'reactstrap';


 const NavLogin = (props) => {

        const { title } = props
   
         return (<Navbar color="light" light expand="md">
        <NavbarBrand href="/">{title}</NavbarBrand>
        </Navbar>);

   }





export default NavLogin