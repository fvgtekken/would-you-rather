import React from 'react'
import { Row, Col } from 'reactstrap'
import QuestionPreview from './typeQuestion/QuestionPreview'
import NoQuestion from './common/NoQuestion'

 const QuestionItems = (props) => {
   
    const { questions, answered } = props
    
    const questionsArray = Object.values(questions)
    const questions_Sorted = questionsArray.sort((a, b) => {
    return b.timestamp - a.timestamp 
    })

 const setTypeComponent=(type)=>{

    /*Generate Questions to Display*/
   if (type==='QuestionPreview') {

     return ( <Row>
      <Col sm={12}>
        {questions_Sorted.map((question) => (
          <QuestionPreview
            key={question.id}
            question={question}
            answered={answered} />
        ))}
        </Col>
      </Row>) 


       /*Make a Question Component*/
   } else if(type==='NoQuestion') {

        return (<div className="center">
              <span >
                  <NoQuestion titleQuestion={!answered?'No UnAnswered Questions Found':'No Answered Questions Found'} />
                </span>
              </div>);

   }
}

    return questions_Sorted.length > 0 ?setTypeComponent('QuestionPreview') :setTypeComponent('NoQuestion') 

 }




export default QuestionItems