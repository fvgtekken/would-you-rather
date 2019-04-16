import {
  _dataSaveQuestion,
  _dataSaveQuestionAnswer } from '../utils/_DATA'
import {
  saveUserQuestion,
  removeUserQuestion,
  saveUserAnswer,
  removeUserAnswer,
  fetchUsers } from './users'
import {
  saveQuestion, removeQuestion,
  saveQuestionVote, removeQuestionVote,
  fetchQuestions } from './questions'

import { showLoading, hideLoading } from 'react-redux-loading-bar'

export function fetchData () {
  
  return (dispatch) => Promise.all([
    
    dispatch(showLoading()),
    dispatch(fetchUsers()),
    dispatch(fetchQuestions())
  
  ]).then(() => {
    dispatch(hideLoading())
  
  })
}




/**/
export function settingSaveQuestion (author, optionOneText, optionTwoText) {
  
  const question = { author, optionOneText, optionTwoText }

  return (dispatch) => {

      /**This Method is importing from utils data 
      /* to set a new format obj to the question
      /* And simulate BE
      */
    return _dataSaveQuestion(question).then((question) => {

      // After de Question is saved the dispatch is called to Show the new states
      // but is possible to put theses dispatch before the first return to imporve
      // the user experienced (see method handlevote (Line 62))

      dispatch(saveQuestion(question))
      dispatch(saveUserQuestion(question.author, question.id))

    }).catch(() => {
      
      dispatch(removeQuestion(question))
      dispatch(removeUserQuestion(question.author, question.id))
      alert('There was an error :<. Please try again.')
    })
  }
}


export function settingVote (authedUser, qid, answer) {
  
  return (dispatch) => {

      /* This pattern tryed to improve the user experience
      *  dispatching saveQuestionVote and saveUserAwnser before it's really saved in BE
      *  
      */
    
      dispatch(saveQuestionVote(authedUser, qid, answer))
      dispatch(saveUserAnswer(authedUser, qid, answer))
   
    return _dataSaveQuestionAnswer({
      authedUser: authedUser,
      qid: qid,
      answer: answer
    }).catch(() => {

       /* if BE fail to save de the data it is possible to get back
        *to the previous state. This pattern try to imporve the user experience
        */
      
      dispatch(removeQuestionVote(authedUser, qid, answer))
      dispatch(removeUserAnswer(authedUser, qid, answer))
      alert('There was an error saving your vote :<. Please try again.')
    })

  }
}