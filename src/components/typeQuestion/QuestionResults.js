import React from 'react'
import { Row, Col,  Card, 
  CardHeader,CardTitle, CardBody, ListGroup, ListGroupItem, Progress, Badge   } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

 const QuestionResults = (props)=> {

      const { author } = props;
 
      const { question, optOne, optTwo } = props
      const optOneVotes = question.optionOne.votes.length
      const optTwoVotes = question.optionTwo.votes.length
      const totalVotes = optOneVotes + optTwoVotes
      const optOnePercentage = (optOneVotes / totalVotes) * 100
      const optTwoPercentage = (optTwoVotes / totalVotes) * 100 


 




    return (
      

             <Card style={{ color: '#333' }}>
                  <CardHeader>Asked by {author.name}</CardHeader>
                      <CardBody> 
                      <CardTitle>Would you rather... </CardTitle>                 
                            <ListGroup>
                            <Row>
                               <Col sm="3" > 
                                  <img src={author.avatarURL} alt="..." className="w-100 rounded-top rounded-bottom" />
                              </Col> 
                              <Col sm="9" className="ColListGroupItem"> 
                                <ListGroupItem>
                                 
                                  <p>{question.optionOne.text}</p>
                                    <div className="text-center">Percentage of votes:</div>
                                    <Progress value={optOnePercentage} />                                                             
                                  <span>
                                    <Badge>{optOneVotes} out of {totalVotes} votes</Badge> 
                                  </span>
                                   <span>
                                   {optOne ? <Badge className="icon-vote">You Voted <FontAwesomeIcon icon={faCoffee} /></Badge> : null} 
                                   </span>                                                                                                                   
                                </ListGroupItem>
                            <hr />
                             <ListGroupItem >
                                  
                                  <p>{question.optionTwo.text}</p>
                                  <div className="text-center">Percentage of votes:</div>
                                  <Progress value={optTwoPercentage} />                                                                        
                                  <span><Badge>{optTwoVotes} out of {totalVotes} votes</Badge></span>
                                  <span>
                                   {optTwo ? <Badge className="icon-vote">You Voted <FontAwesomeIcon icon={faCoffee} /></Badge> : null} 
                                   </span>                                                                                                                                    
                              </ListGroupItem>
                              </Col>
                            </Row>                     
                          </ListGroup>          
                     
                      </CardBody>
                   
          </Card>
 




    );
  
}



export default QuestionResults