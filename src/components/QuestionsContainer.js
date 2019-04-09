import React, { Component } from 'react'

import { Row, Col, TabContent, TabPane, Nav, 
   NavItem, NavLink, Button, Card ,CardHeader, CardFooter, CardBody,
  CardTitle, CardText, ListGroup, ListGroupItem, Badge } from 'reactstrap'

import { NavLink as RRNavLink } from 'react-router-dom';

import classnames from 'classnames'
import CardQuestions from './CardQuestions'

class QuestionsContainer extends Component {

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

  render() {


      const arrayUsers = {Users:[{ Id:1, Name:'BadCat'}, { Id:2, Name:'GoodDog'}, 
      {Id:3, Name:'GoodBird'}, {Id:4, Name:'BadFish'}]}
    
      const arrayQuestions={AwseredQuestions:[{IdUser:1, IdQuestion:1, Question:'Be a Yanque'}, 
                            {IdUser:1, IdQuestion:2, Question:'Be a Criollito'}],
                            AskedQuestions:[{IdUser:3, IdQuestion:3, Question:'Buy a Car'}, 
                            {IdUser:3, IdQuestion:4, Question:'Buy a Truck'}]
                          };


      console.log(arrayQuestions.AwseredQuestions);
                           
     

    return (
      <Row>
        <Col sm="12" >
          <div>
        <Nav tabs>
          <NavItem>
             <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}>
              UnAwnsered Questions
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}>
              Awnsered Questions
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
             <Row>
              <Col sm="12">
                  <CardQuestions />
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col sm="12">
                  <CardQuestions />
              </Col>
            </Row>
          </TabPane>
         <TabPane tabId="2">
             <Row>
              <Col sm="12">
                  <CardQuestions />
              </Col>
            </Row>
            <hr/>
           <Row>
              <Col sm="12">
                  <CardQuestions />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
        </Col>
      </Row>
    );
  }
}



export default QuestionsContainer