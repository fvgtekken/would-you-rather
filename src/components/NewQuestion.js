import React, { Component } from 'react'
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText,  Card, 
  CardHeader, CardBody, CardTitle, CardText } from 'reactstrap'

class NewQuestion extends Component {

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
          <Input type="text" name="question1" id="question1" placeholder="Enter First Question" />
        </FormGroup>
          <div>or...</div>
        <FormGroup>
          <Input type="text" name="question2" id="question2" placeholder="Enter Second Question" />
        </FormGroup>
      <Button
        disabled={this.state.disabled} className="ButtonCard" color="primary"
        type="submit" bsStyle="info">
        Submit
      </Button>
    </form>
  )



  render() {
    return (
      <Row>
        <Col sm="12" >
          <Card style={{ color: '#333' }}>
              <CardHeader>User3 Awnser</CardHeader>
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



export default NewQuestion