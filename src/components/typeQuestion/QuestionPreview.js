import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button, Card ,CardHeader, CardBody,
   ListGroup, ListGroupItem  } from 'reactstrap'
import { NavLink as RRNavLink } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';


import ImageLoader from '../common/ImageLoader'



class  QuestionPreview extends Component {


  QuestionBtn = ( questionLink, answered ) => {

  let titleButton;
  answered ? titleButton = 'View Question': titleButton = 'Awnser The Question'
  return (<Button  className="ButtonCard" color="primary" size="sm" tag={RRNavLink} to={questionLink}>{titleButton} </Button>)

}

  render()  {


  

   const { question, author, answered, index } = this.props
   const questionLink = `/questions/${question.id}`

     
    
    return(  <Card style={{ color: '#333' }}>
                  <CardHeader>{author.name} {answered ? 'asked:' : 'asks:'}</CardHeader>
                      <CardBody>                  
                            <ListGroup>
                            <Row>
                              <Col sm="3"> 
                                 <LazyLoad key={index} >
                                   
                                  <ImageLoader src={author.avatarURL} responsiveClass={'w-100 h-100 rounded-top rounded-bottom'} />                               
                                </LazyLoad>
                              </Col>
                              <Col sm="9" className="ColListGroupItem"> 
                                  <ListGroupItem>{question.optionOne.text}</ListGroupItem>
                                  <ListGroupItem>{question.optionTwo.text}</ListGroupItem>
                              </Col>
                            </Row>                     
                          </ListGroup>          
                     
                      </CardBody>
                   <Col sm={{ size: 3, offset: 9 }} >
                      
                      {this.QuestionBtn(questionLink, answered)}
                   </Col>
          </Card>)

  }
}
  

  
  

function mapStateToProps ({ users }, ownProps) {

  const questionAuthor = ownProps.question.author
  
  return {
    author: users[questionAuthor]
  }

}

export default connect(mapStateToProps)(QuestionPreview)