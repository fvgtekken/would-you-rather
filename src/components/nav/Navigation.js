import React from 'react';
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/loggedUser'
import  NavLogged  from './NavLogged'
import  NavLogin  from './NavLogin'



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
  

  logoutUser = (e) => {
    e.preventDefault()
    this.props.dispatch(logoutUser())
  }

  

  navItemsLogin = () => {
     return (<NavLogin title={'Wolud you Rather'} />)
  }




  navItemsAuthed = (userAvatar, userName) => {

    return(<NavLogged     
             userName={userName}
            userAvatar={userAvatar} 
             toggle={this.toggle}
              isOpen={this.state.isOpen} 
              logoutUser={this.logoutUser}

           />)
  }

 


  render() {

    const {userIsLogged} = this.props

    return (
      <div>
         {userIsLogged?this.navItemsAuthed(this.props.userAvatar, this.props.userName):this.navItemsLogin()}
      </div>
    );
  }
}

function mapStateToProps ({ authedUser, users }) {


  return {
    userIsLogged: authedUser !== null,
    userName: users[authedUser] ? users[authedUser].name : null,
    userAvatar: users[authedUser] ? users[authedUser].avatarURL : null
  }
}

export default connect(mapStateToProps)(Navigation)