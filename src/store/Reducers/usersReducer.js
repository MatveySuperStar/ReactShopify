import {defaultState} from '../state'

const ADD_USER = "ADD_USER"
const ADD_USERS = "ADD_USERS"
const EDIT_USER = "EDIT_USER"
const DELETE_USER ="DELETE_USER"

export const usersReducer = (state = defaultState, action) => {
  switch(action.type) {
    case ADD_USER : {
      return {...state, users: [...state.users, action.payload] }
    }
    case ADD_USERS : {
      return {...state, users: action.payload }
    }
    case EDIT_USER : {
      return {...state, users: state.users.map( user => {
          return user.id === action.payload.id ? action.payload : user 
        })
      }
    }
    case DELETE_USER : {
      return {...state, users: state.users.filter( user => user.id !== action.payload )}
    }
    default:
      return {...state}
  }
}

export const addUserAction = (payload) => ({type: ADD_USER, payload})
export const addUsersAction = (payload) => ({type: ADD_USERS, payload})
export const editUserAction = (payload) => ({type: EDIT_USER, payload})
export const deleteUserAction = (payload) => ({type: DELETE_USER, payload})