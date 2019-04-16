import {
  SET_LOGGED_USER,
  GET_LOGGED_USER_FROM_LOCAL,
  LOGOUT_USER } from '../actions/loggedUser'

export default function authedUser (state = null, action) {
  switch (action.type) {
    case SET_LOGGED_USER :
    case GET_LOGGED_USER_FROM_LOCAL :
    case LOGOUT_USER :
      return action.idUser
    default :
      return state
  }
}
