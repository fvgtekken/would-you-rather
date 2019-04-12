import React, { Component } from 'react'
import { Row, Col,  Card, 
  CardHeader, CardBody, CardTitle, CardText,  ListGroup, ListGroupItem, Progress  } from 'reactstrap'

class QuestionVotes extends Component {

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

 /* renderForm = () => (
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
     
    </form>
  )*/

  render() {
    return (
      <Row>
        <Col sm="12" >
            <Card style={{ color: '#333' }}>
                <CardHeader>User1 Asked</CardHeader>
                  <CardBody>
                     <CardText>
                      <CardTitle></CardTitle>
                        <ListGroup>
                        <Row>
                          <Col sm="3"> 
                            <img src={require("../assets/images/1.jpg")} alt="..." className="rounded-circle" />
                          </Col>
                          <Col sm="9" className="ColListGroupItem"> 
                            <ListGroupItem>
                                <div className="text-center">Amount of votes quuestion 1</div>
                                <Progress value="50" />
                                <row>
                                   <Col sm={{ size: 4, offset: 8 }} >
                                    <span className="panel-votes">1 out of 2 Votes</span>   
                                  </Col>
                                </row>                                                        
                            </ListGroupItem>
                            <hr />
                             <ListGroupItem>
                                  <div className="text-center">Amount of votes quuestion 1</div>
                                    <Progress value="50" />
                                      <row>
                                         <Col sm={{ size: 4, offset: 8 }} >
                                            <span className="panel-votes">1 out of 2 Votes</span>   
                                        </Col>
                                      </row>                                                        
                              </ListGroupItem>
                          </Col>
                        </Row>                     
                      </ListGroup>          
                    </CardText>
                  </CardBody>
                </Card>
        </Col>
      </Row>
    );
  }
}



export default QuestionVotes