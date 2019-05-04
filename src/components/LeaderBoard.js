import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Card, CardHeader, CardBody,
  CardTitle, ListGroup, ListGroupItem } from 'reactstrap';
import LazyLoad from 'react-lazy-load';
import ImageLoader from './common/ImageLoader'

class LeaderBoard extends Component {


  render() {

              

    return (
      <div>
   
       {this.props.leaders.map((leader, index) => {
          
             return (<Row key={leader.id}>
                <Col sm="12">
                  <Card style={{ color: '#333' }}>
                     <CardHeader>{leader.name} Awnser And Created Questions!</CardHeader>
                        <CardBody>
                           
                            <CardTitle></CardTitle>
                              <ListGroup>
                              <Row>
                                <Col sm="3"> 
                                <LazyLoad debounce={false} throttle={250}>
                                  <ImageLoader src={leader.avatarURL} responsiveClass={'w-100 h-100 rounded-top rounded-bottom'}  />                               
                                </LazyLoad>
                                 
                                </Col>
                                <Col sm="6" className="ColListGroupItem"> 
                                  <ListGroupItem>
                                        <span>{(Object.keys(leader.answers)).length}</span> Answered Questions
                                  </ListGroupItem>
                                  <ListGroupItem>
                                        <span>{leader.questions.length}</span> Created Questions
                                  </ListGroupItem>
                                </Col>
                                <Col sm="3"> 
                                  <Card>
                                    <CardHeader>SCORE</CardHeader>
                                    <CardBody>
                                      {(Object.keys(leader.answers)).length + leader.questions.length}
                                    </CardBody>                         
                                </Card>
                                </Col>
                              </Row>                     
                            </ListGroup>          
                          
                        </CardBody>
                        </Card><hr/>
                    </Col>
                </Row>)
            }
        )}

      </div>
    );
  }
}



function mapStateToProps ({ users, authedUser }) {

  const scoreLeaders = (Object.values(users)).sort((a, b) => {
    const UsarA = (Object.keys(a.answers)).length + a.questions.length
    const UserB = (Object.keys(b.answers)).length + b.questions.length
    return UserB - UsarA
  })

 

  return {
    authedUser,
    leaders: scoreLeaders
  }
}

export default connect(mapStateToProps)(LeaderBoard)