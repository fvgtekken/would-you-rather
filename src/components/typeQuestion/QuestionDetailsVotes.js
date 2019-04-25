import React from 'react'
import { Row, Col,  Card, 
  CardHeader,CardTitle, CardBody, ListGroup, ListGroupItem, Progress, Badge   } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

 const QuestionDetailsVotes = (props)=> {

      const { author } = props;
 
      const { question, optOne, optTwo } = props
      const optionOne_Votes = question.optionOne.votes.length
      const optionTwo_Votes = question.optionTwo.votes.length
      const totalVotes = optionOne_Votes + optionTwo_Votes
      const optOnePercentage = (optionOne_Votes / totalVotes) * 100
      const optTwoPercentage = (optionTwo_Votes / totalVotes) * 100 


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
                                    <Badge>{optionOne_Votes} out of {totalVotes} votes</Badge> 
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
                                  <span><Badge>{optionTwo_Votes} out of {totalVotes} votes</Badge></span>
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



export default QuestionDetailsVotes