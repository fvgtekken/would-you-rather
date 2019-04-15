import { _dataGetQuestions } from '../utils/_DATA'

export const SAVE_QUESTION = 'SAVE_QUESTION'
export const REMOVE_QUESTION = 'REMOVE_QUESTION'
export const SAVE_QUESTION_VOTE = 'SAVE_QUESTION_VOTE'
export const REMOVE_QUESTION_VOTE = 'REMOVE_QUESTION_VOTE'
export const QUESTIONS_UPDATE = 'QUESTIONS_UPDATE'

export function saveQuestion (question) {
  return {
    type: SAVE_QUESTION,
    question
  }
}

export function removeQuestion (question) {
  return {
    type: REMOVE_QUESTION,
    question
  }
}

export function saveQuestionVote (authedUser, qid, answer) {
  return {
    type: SAVE_QUESTION_VOTE,
    authedUser,
    qid,
    answer
  }
}

export function removeQuestionVote (authedUser, qid, answer) {
  return {
    type: REMOVE_QUESTION_VOTE,
    authedUser,
    qid,
    answer
  }
}

/* update state after fetch */
export function updateQuestions (questions) {
  return {
    type: QUESTIONS_UPDATE,
    questions,
  }
}

/* 
 fetch all questions 
*/
export function fetchQuestions () {
  return (dispatch) => {

    // The Async call is for the method from _DATA.js
    // that emulate BE.

    return _dataGetQuestions().then((questions) => {
      /*  
       * all quiestions are fetched so the dispatch
       / si called to present the new states of updates questions.
  
      */
      dispatch(updateQuestions(questions))
    })
  }
}
