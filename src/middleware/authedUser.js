import { SET_LOGGED_USER, GET_LOGGED_USER_FROM_LOCAL, LOGOUT_USER } from '../actions/loggedUser'




const authedUser = (store) => (next) => (action) => {

   const LOCAL_NAME = 'loggedUser'
   
   switch (action.type) {

    case SET_LOGGED_USER :
 
      setUserLocal (LOCAL_NAME, action.idUser) 
      return next(action)

    case GET_LOGGED_USER_FROM_LOCAL :
      
      const authedUser = getUserLocal()
      action.idUser = authedUser ? authedUser : null
          
       return next(action)

    case LOGOUT_USER:
      
      removeUserLocal()
      action.idUser = null;
      return next(action)

    default :
      return next(action)
  }
}




 function getUserLocal () {

      if(localStorage.getItem('userLogged')) {
         const ObjUser = JSON.parse(localStorage.getItem('userLogged'));
         return ObjUser.idUser;
      }
  }


  function setUserLocal (USER_NAME, idUser) {

    if(!localStorage.getItem('userLogged')) {
        localStorage.setItem('userLogged', JSON.stringify ({
              user_name: USER_NAME,
              idUser
        }));
    }
  }  

  function removeUserLocal () {

      if(localStorage.getItem('userLogged')){
          localStorage.removeItem('userLogged');  
      }

    
  }

export default authedUser