import thunk from 'redux-thunk'
import logger from './logger'
import loggedUser from './loggedUser'
import { applyMiddleware } from 'redux'

export default applyMiddleware(
  thunk,
  logger,
  loggedUser
)
