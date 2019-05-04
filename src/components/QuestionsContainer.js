import React from 'react'
import { connect } from 'react-redux'
import QuestionAnswering from './typeQuestion/QuestionAnswering'
import QuestionDetailsVotes from './typeQuestion/QuestionDetailsVotes'
import PageNoFound from './common/PageNoFound'


/** Container component for answering questions or displaying results */
const QuestionContainer = ({
  question,
  author,
  optionQuestionOne,
  optionQuestionTwo,
  questionWorngId
}) => {


  const setTypeComponent=(type)=>{

   if (type==='detailQuestionVotes'){

     return (<QuestionDetailsVotes   
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

        if(!questionWorngId) {
         return  optionQuestionOne || optionQuestionTwo ? 
        setTypeComponent('detailQuestionVotes') : setTypeComponent('answerQuetion')

            } else {

          return <PageNoFound />
        }
       
  
  
  };

  return (
    <div>
      {   optionToReder()   }
    </div>
  )
}

function mapStateToProps ({ users, questions, authedUser }, ownProps) {
  
  const question = questions[ownProps.match.params.questionId]
  
  if (!question){
       return { questionWorngId: true }
  } // bad url
  
 

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