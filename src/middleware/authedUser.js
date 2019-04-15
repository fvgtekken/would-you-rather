/*
 *
 * awfull experinece be redirected to login area every time that I realod de page. :<
 */

import {
  SET_AUTHED_USER,
  GET_AUTHED_USER_FROM_LOCAL,
  LOGOUT_AUTHED_USER } from '../actions/authedUser'

const LOCAL_NAME = 'authedUser'


const authedUser = (store) => (next) => (action) => {
  switch (action.type) {

    case SET_AUTHED_USER :
 
      setUserLocal (LOCAL_NAME, action.id) 
      return next(action)

    case GET_AUTHED_USER_FROM_LOCAL :
      
      const authedUser = getUserLocal()
      action.id = authedUser ? authedUser : null
          
       return next(action)

    case LOGOUT_AUTHED_USER :
      
      removeUserLocal()
      action.id = null;
      return next(action)

    default :
      return next(action)
  }
}




 function getUserLocal () {

      if(localStorage.getItem('userLogged')) {
         const ObjUser = JSON.parse(localStorage.getItem('userLogged'));
         return ObjUser.id;
      }
  }


  function setUserLocal (USER_NAME, id) {

    if(!localStorage.getItem('userLogged')) {
        localStorage.setItem('userLogged', JSON.stringify ({
              user_name: USER_NAME,
              id:id
        }));
    }
  }  

  function removeUserLocal () {

      if(localStorage.getItem('userLogged')){
          localStorage.removeItem('userLogged');  
      }

    
  }

export default authedUser