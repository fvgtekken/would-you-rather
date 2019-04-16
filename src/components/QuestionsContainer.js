import React from 'react'
import { connect } from 'react-redux'
import QuestionAnswering from './typeQuestion/QuestionAnswering'
import QuestionResults from './typeQuestion/QuestionResults'
import NoQuestion from './common/NoQuestion'

/** Container component for answering questions or displaying results */
const QuestionContainer = ({
  question,
  author,
  optionQuestionOne,
  optionQuestionTwo,
  questionDoesNotExist
}) => {


  const setTypeComponent=(type)=>{

   if (type==='detailQuestionVotes'){

     return (<QuestionResults   
        question={question}
        author={author}
        optOne={optionQuestionOne}
        optTwo={optionQuestionTwo} />) 

   } else if(type==='answerQuetion') {

        return ( <QuestionAnswering
          question={question}
          author={author} /> 
        );

   }

  

  }


  const optionToReder = () => {
   return  optionQuestionOne || optionQuestionTwo ? setTypeComponent('detailQuestionVotes') : setTypeComponent('answerQuetion')
  };

  return (
    <div>
      {optionToReder() }
    </div>
  )
}

function mapStateToProps ({ users, questions, authedUser }, ownProps) {
  
  const question = questions[ownProps.match.params.questionId]

  const author = users[question.author]
  const optionQuestionOne = question.optionOne.votes.includes(authedUser)
  const optionQuestionTwo = question.optionTwo.votes.includes(authedUser)

  return {
    loading: false,
    optionQuestionOne,
    optionQuestionTwo,
    question,
    author
  }

}

export default connect(mapStateToProps)(QuestionContainer)