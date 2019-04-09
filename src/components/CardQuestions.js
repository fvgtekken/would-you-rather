import React from 'react'

import { Row, Col, Button, Card ,CardHeader, CardBody,
  CardTitle, CardText, ListGroup, ListGroupItem, Badge  } from 'reactstrap'

import { NavLink as RRNavLink } from 'react-router-dom';


 

 const CardQuestions = () => (
      <Card style={{ color: '#333' }}>
                  <CardHeader>User1 Questions</CardHeader>
                  <CardBody>
                
                      <CardTitle></CardTitle>
                        <ListGroup>
                        <Row>
                          <Col sm="3"> 
                            <img src={require("../assets/images/1.jpg")} className="rounded-circle" />
                          </Col>
                          <Col sm="9" className="ColListGroupItem"> 
                            <ListGroupItem>Cras justo odio</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                          </Col>
                        </Row>                     
                      </ListGroup>          
                 
                  </CardBody>
                   <Col sm={{ size: 3, offset: 9 }} >
                      <Button  className="ButtonCard" color="primary" size="sm" tag={RRNavLink} to='/awnserQuestion' >Awnser The Question</Button>
                   </Col>
          </Card>        
  )

 




export default CardQuestions