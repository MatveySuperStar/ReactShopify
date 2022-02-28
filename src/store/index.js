import { createStore, combineReducers } from 'redux'
import { activateReducer } from './Reducers/activateReducer'
import { usersReducer } from './Reducers/usersReducer'
import { userReducer } from './Reducers/userReducer'
import { selectUserReducer } from './Reducers/selectUserReducer'

const rootReducers = combineReducers({
  activate: activateReducer,
  users: usersReducer,
  user: userReducer,
  selectUser: selectUserReducer
})

export const store = createStore(rootReducers)