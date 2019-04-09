import React, { Component } from 'react'
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText,  Card, 
  CardHeader, CardBody, CardTitle, CardText } from 'reactstrap'

class AwnserQuestion extends Component {

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
       <FormGroup tag="fieldset">
          <legend>Awnser A Question</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="Awser" />{' '}
              Question 1
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="Awser" />{' '}
               Question 1
            </Label>
          </FormGroup>
      </FormGroup>
      <Button className="ButtonCard" color="primary"
        disabled={this.state.disabled}
        type="submit" bsStyle="info">
        Enter
      </Button>
    </form>
  )





  render() {
    return (
      <Row>
        <Col sm="12" >

        <Card style={{ color: '#333' }}>
        <CardHeader>User1 Awnser</CardHeader>
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



export default AwnserQuestion