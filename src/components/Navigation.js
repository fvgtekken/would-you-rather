import React from 'react';
import { connect } from 'react-redux'
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav,
  NavItem, NavLink, UncontrolledDropdown, DropdownToggle, 
  DropdownMenu, DropdownItem } from 'reactstrap';
  import { NavLink as RRNavLink } from 'react-router-dom';



class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  

  navItemsLogin = () => {

     return (<Navbar color="light" light expand="md">
        <NavbarBrand href="/">Wolud you Rather</NavbarBrand>
        </Navbar>)
  }


  navItemsAuthed = () => {

      return (<Navbar color="light" light expand="md">
          
        <NavbarBrand href="/">Wolud you Rather</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={RRNavLink} to="/questions">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/addQuestion">New Question</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/leaderBoard">LeaderBoard</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                 Fede vonGro
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                     <NavLink tag={RRNavLink} to="/login">LogOut</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>)

  }

  //{this.props.userIsAuthed && this.getNavItems()}


  render() {

    console.log(this.props.userIsAuthed)

    return (
      <div>
         {this.props.userIsAuthed?this.navItemsAuthed():this.navItemsLogin()}
      </div>
    );
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    userIsAuthed: authedUser !== null,
    username: users[authedUser] ? users[authedUser].name : null,
    avatar: users[authedUser] ? users[authedUser].avatarURL : null
  }
}

export default connect(mapStateToProps)(Navigation)