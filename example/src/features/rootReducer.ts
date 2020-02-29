import { combineReducers } from 'redux'
import { History } from 'history'
import { connectRouter } from 'connected-react-router'

import { postReducer } from './post'
import { accountReducer } from './account'
// import your feature reducers

export const makeRootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  post: postReducer,
  account: accountReducer
  // register feature reducers
})
