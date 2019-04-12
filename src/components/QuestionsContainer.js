import React from 'react'
import { connect } from 'react-redux'
/*import QuestionAnswering from './QuestionAnswering'*/


/** Container component for answering questions or displaying results */
const QuestionContainer = ({
  question,
  author,
  optOne,
  optTwo,
  questionDoesNotExist
}) => {

  const renderQuestionNotFound = () => (
   
      <div> Question not found </div>
   
  );

  const renderQuestionToAnswer = () => (
    /*<QuestionAnswering
      question={question}
      author={author} />*/
       <div>Question To Awnser</div>
  );

  const renderQuestionResults = () => (
    <div>View Results</div>
  )

  const optionToDisplay = () => {
   return  optOne || optTwo ? renderQuestionResults() : renderQuestionToAnswer()
  };

  return (
    <div>
       
          {questionDoesNotExist ? renderQuestionNotFound() : optionToDisplay() }
   
    </div>
  )
}

function mapStateToProps ({ users, questions, authedUser }, ownProps) {
  
  const question = questions[ownProps.match.params.questionId]
  
  if (!question) // bad url
  
  return { questionDoesNotExist: true }
  
  const author = users[question.author]
  const optOne = question.optionOne.votes.includes(authedUser)
  const optTwo = question.optionTwo.votes.includes(authedUser)

  return {
    loading: false,
    optOne,
    optTwo,
    question,
    author
  }

}

export default connect(mapStateToProps)(QuestionContainer)