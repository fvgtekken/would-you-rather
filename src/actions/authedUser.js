export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const GET_AUTHED_USER_FROM_LOCAL = 'GET_AUTHED_USER_FROM_LOCAL'
export const LOGOUT_AUTHED_USER = 'LOGOUT_AUTHED_USER'

export function setAuthedUser (id) {
  return {
    type: SET_AUTHED_USER,
    id,
  }
}

export function getAuthedUserFromLocal () {
  return {
    type: GET_AUTHED_USER_FROM_LOCAL,
  }
}

export function logoutAuthedUser () {
  return {
    type: LOGOUT_AUTHED_USER,
  }
}
