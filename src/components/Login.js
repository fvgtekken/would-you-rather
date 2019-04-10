import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText,  Card, 
  CardHeader, CardBody } from 'reactstrap'

class LogIn extends Component {

  state = {
    imgSrc: '/favicon.png',
    userToSignIn: null,
    disabled: false
  }

  handleChange = (e) => {
    console.log(e);
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e);
  }

  renderForm = () => {

    


   return(<form onSubmit={this.handleSubmit}>
       <FormGroup>
          <Label for="compSelect">Select</Label>
          <Input type="select" name="select" id="compSelect" onChange={this.handleChange}>
          <option hidden value="default">Select a user...</option>
          {(Object.values(this.props.users)).map((user) => (
            <option key={user.id} value={user.id}>
              {user.id}
            </option>
          ))}
          </Input>
        </FormGroup>
      <Button  className="ButtonCard" color="primary"
        disabled={this.state.disabled}
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
                  <CardBody>
                   
                       {this.renderForm()}         
                   
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