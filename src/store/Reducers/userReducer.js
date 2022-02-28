import {defaultState} from '../state'

const ADD_FIRST_NAME = "ADD_FIRST_NAME"
const ADD_SECOND_NAME = "ADD_SECOND_NAME"
const ADD_EMAIL = "ADD_EMAIL"
const DEFAULT_USER = "DEFAULT_USER"
const defaultUser = {avatar: "", email: "", first_name: "", id: 0, last_name: ""}

export const userReducer = (state = defaultState, action) => {
  switch(action.type) {
    case ADD_FIRST_NAME : {
      return {...state, user: {...state.user, first_name: action.payload }}
    }
    case ADD_SECOND_NAME : {
      return {...state, user:{...state.user, last_name: action.payload }}
    }
    case ADD_EMAIL : {
      return {...state, user:{...state.user, email: action.payload }}
      }
    case DEFAULT_USER : {
      return {...state, user: defaultUser }
    }
    default:
      return {...state}
  }
}

export const addFirstNameAction = (payload) => ({type: ADD_FIRST_NAME, payload})
export const addSecondNameAction = (payload) => ({type: ADD_SECOND_NAME, payload})
export const addEmailAction = (payload) => ({type: ADD_EMAIL, payload})
export const defaultUserAction = (payload) => ({type: DEFAULT_USER, payload})