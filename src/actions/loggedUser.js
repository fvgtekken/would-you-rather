export const SET_LOGGED_USER = 'SET_LOGGED_USER'
export const GET_LOGGED_USER_FROM_LOCAL = 'GET_LOGGED_USER_FROM_LOCAL'
export const LOGOUT_USER = 'LOGOUT_USER'



export function getAuthedUserFromLocal () {
  return {
    type: GET_LOGGED_USER_FROM_LOCAL,
  }
}

export function logoutUser () {
  return {
    type: LOGOUT_USER,
  }
}

export function setAuthedUser (idUser) {
  return {
    type: SET_LOGGED_USER,
    idUser,
  }
}
