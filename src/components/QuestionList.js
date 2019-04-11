import React from 'react'
import { Row, Col, Button, Card ,CardHeader, CardBody,
  CardTitle, CardText, ListGroup, ListGroupItem, Badge  } from 'reactstrap'
import { NavLink as RRNavLink } from 'react-router-dom';
import QuestionPreview from './QuestionPreview'
 

 const QuestionList = (props) => {

        const { questions, answered } = props
        const questionsArray = Object.values(questions)
        const orderedQuestions = questionsArray.sort((a, b) => {
        return b.timestamp - a.timestamp // newest first
        })


     
return orderedQuestions.length > 0
    ?
    <Row>
      <Col sm={12}>
        {orderedQuestions.map((question) => (
          <QuestionPreview
            key={question.id}
            question={question}
            answered={answered} />
        ))}
        </Col>
      </Row>: <div className="center">
        <span > No more questions :(</span>
      </div>

 }




export default QuestionList