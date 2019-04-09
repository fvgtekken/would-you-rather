import React, { Component } from 'react'

import { Row, Col, Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, ListGroup, ListGroupItem, Badge  } from 'reactstrap';

import classnames from 'classnames'

class LeaderBoard extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  handleChange = (e) => {
    console.log(e);
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e);
  }

  /*renderForm = () => (
    <form onSubmit={this.handleSubmit}>
       <FormGroup>
          <Input type="text" name="question1" id="question1" placeholder="Enter First Question" />
        </FormGroup>
          <div>or...</div>
        <FormGroup>
          <Input type="text" name="question2" id="question2" placeholder="Enter Second Question" />
        </FormGroup>
      <Button
        disabled={this.state.disabled}
        type="submit" bsStyle="info">
        Enter
      </Button>
    </form>
  )*/

  render() {
    return (
      <div>
     <Row>
        <Col sm="12">
          <Card style={{ color: '#333' }}>
                  <CardHeader>User1 Awnser</CardHeader>
                  <CardBody>
                     <CardText>
                      <CardTitle></CardTitle>
                        <ListGroup>
                        <Row>
                          <Col sm="3"> 
                            <img src={require("../assets/images/1.jpg")} className="rounded-circle" />
                          </Col>
                          <Col sm="6" className="ColListGroupItem"> 
                            <ListGroupItem>4 Awsered Questions</ListGroupItem>
                            <ListGroupItem>2 Created Questions</ListGroupItem>
                          </Col>
                          <Col sm="3"> 
                            <Card>
                              <CardHeader>SCORE</CardHeader>
                              <CardBody>
                                <CardText>6</CardText>
                              </CardBody>                         
                          </Card>
                          </Col>
                        </Row>                     
                      </ListGroup>          
                    </CardText>
                  </CardBody>
                </Card>
        </Col>
      </Row>
    <hr/>
      <Row>
        <Col sm="12">
          <Card style={{ color: '#333' }}>
                  <CardHeader>User2 Awnser</CardHeader>
                  <CardBody>
                     <CardText>
                      <CardTitle></CardTitle>
                        <ListGroup>
                        <Row>
                          <Col sm="3"> 
                            <img src={require("../assets/images/1.jpg")} className="rounded-circle" />
                          </Col>
                          <Col sm="6" className="ColListGroupItem"> 
                            <ListGroupItem>2 Awsered Questions</ListGroupItem>
                            <ListGroupItem>1 Created Questions</ListGroupItem>
                          </Col>
                          <Col sm="3"> 
                            <Card>
                              <CardHeader>SCORE</CardHeader>
                              <CardBody>
                                <CardText>3</CardText>
                              </CardBody>                         
                          </Card>
                          </Col>
                        </Row>                     
                      </ListGroup>          
                    </CardText>
                  </CardBody>
                </Card>
        </Col>
      </Row>
      </div>
    );
  }
}



export default LeaderBoard