import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/loggedUser'
import { Row, Col, Button, FormGroup, Label, Input, Card, 
  CardHeader, CardBody } from 'reactstrap'


class LogIn extends Component {



  state = {
    imgSrc: 'https://i.ibb.co/syDhDQc/default.jpg',
    userToSignIn: null,
    disabledSubmit: true
  }

 handleChange = (e) => {

     //copying from this.props.users OBJ the selected user and pasting it to selectedUser
    const { [e.target.value]: selectedUser } = this.props.users  
    this.setState({
      imgSrc: selectedUser.avatarURL,
      userToSignIn: selectedUser.id
    }, () => {
      if (this.state.userToSignIn) {
        this.setState({
          disabledSubmit: false
        })
      }
    })

  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(setAuthedUser(this.state.userToSignIn))
  }

  loginForm = () => {

   return(<form onSubmit={this.handleSubmit}>
       <FormGroup>
          <Label for="compSelect">Select</Label>
          <Input type="select" name="select" id="compSelect" onChange={this.handleChange}>
          <option hidden value="default">Select a user...</option>
          {(Object.values(this.props.users)).map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
          </Input>
        </FormGroup>
      <Button  className="ButtonCard" color="primary"
        disabled={this.state.disabledSubmit}
        type="submit" >
        Sign In
      </Button>
    </form>) 
  }


  render() {
    
    return (
      <Row>
        <Col sm={{ size: 8, offset: 2 }} >
              <Card style={{ color: '#333' }}>
                 <CardHeader>Sign in:</CardHeader>
                  <Col sm={{ size: 8, offset: 2 }} >
               
                     <img src={this.state.imgSrc} alt="..." className="w-25 h-25 rounded-top rounded-bottom img-login" />
                 </Col>
                  <CardBody>
                     
                       {this.loginForm()}         
                   
                  </CardBody>                
               </Card>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps ({ users }) {
  return { users }
}

export default connect(mapStateToProps)(LogIn)