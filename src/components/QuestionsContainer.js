import React from 'react'
import { connect } from 'react-redux'
import QuestionAnswering from './typeQuestion/QuestionAnswering'
import QuestionResults from './typeQuestion/QuestionResults'
import NoQuestion from './common/NoQuestion'

/** Container component for answering questions or displaying results */
const QuestionContainer = ({
  question,
  author,
  optOne,
  optTwo,
  questionDoesNotExist
}) => {

  const renderQuestionNotFound = () => {
  return (<div>  
      <NoQuestion titleQuestion={'Bad Url -  Questions Found'}/>
  </div>)
   
  };

  const renderQuestionToAnswer = () => (
    <QuestionAnswering
      question={question}
      author={author} /> 
  );

  const renderQuestionResults = () => (
   <QuestionResults   
        question={question}
        author={author}
        optOne={optOne}
        optTwo={optTwo} />
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

  /*
   * Url o Question Doesnt exits
   */
  if (!question){
        return { questionDoesNotExist: true }
  
  }
  

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