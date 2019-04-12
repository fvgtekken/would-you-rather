import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Card, CardHeader, CardBody,
  CardTitle, CardText, ListGroup, ListGroupItem  } from 'reactstrap';



class LeaderBoard extends Component {


  render() {

    return (
      <div>
       {this.props.leaders.map((leader, index) => {
          
             return (<Row>
                <Col sm="12">
                  <Card style={{ color: '#333' }}>
                     <CardHeader>{leader.name} Awnser And Created Questions!</CardHeader>
                        <CardBody>
                           <CardText>
                            <CardTitle></CardTitle>
                              <ListGroup>
                              <Row>
                                <Col sm="3"> 
                                  <img src={leader.avatarURL} alt="..." className="w-100 h-100 rounded-top rounded-bottom" />
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
                                      <CardText>{(Object.keys(leader.answers)).length + leader.questions.length}</CardText>
                                    </CardBody>                         
                                </Card>
                                </Col>
                              </Row>                     
                            </ListGroup>          
                          </CardText>
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

  const sortedLeaders = (Object.values(users)).sort((a, b) => {
    const aRank = (Object.keys(a.answers)).length + a.questions.length
    const bRank = (Object.keys(b.answers)).length + b.questions.length
    return bRank >= aRank
  })

  return {
    authedUser,
    leaders: sortedLeaders
  }
}

export default connect(mapStateToProps)(LeaderBoard)