import React from 'react'
import { Row, Col } from 'reactstrap'
import QuestionPreview from './typeQuestion/QuestionPreview'
import NoQuestion from './common/NoQuestion'

 const QuestionList = (props) => {

        const { questions, answered } = props
        const questionsArray = Object.values(questions)
        const orderedQuestions = questionsArray.sort((a, b) => {
        return b.timestamp - a.timestamp // newest first
  })



return orderedQuestions.length > 0 ?
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
        <span >
          <NoQuestion titleQuestion={!answered?'No UnAnswered Questions Found':'No Answered Questions Found'} />
        </span>
      </div>

 }




export default QuestionList