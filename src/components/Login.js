import React, { Component } from 'react'
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText,  Card, 
  CardHeader, CardBody, CardTitle, CardText } from 'reactstrap'

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

  renderForm = () => (
    <form onSubmit={this.handleSubmit}>
       <FormGroup>
          <Label for="compSelect">Select</Label>
          <Input type="select" name="select" id="compSelect">
            <option>User 1</option>
            <option>User 2</option>
            <option>User 3</option>
            <option>User 4</option>
            <option>User 5</option>
          </Input>
        </FormGroup>
      <Button  className="ButtonCard" color="primary"
        disabled={this.state.disabled}
        type="submit" bsStyle="info">
        Sign In
      </Button>
    </form>
  )


  render() {
    return (
      <Row>
        <Col sm={{ size: 8, offset: 2 }} >
              <Card style={{ color: '#333' }}>
                 <CardHeader>Sign in:</CardHeader>
                  <CardBody>
                     <CardText>
                      <CardTitle></CardTitle>
                       <CardText>{this.renderForm()}</CardText>         
                    </CardText>
                  </CardBody>                
               </Card>
        </Col>
      </Row>
    );
  }
}



export default LogIn