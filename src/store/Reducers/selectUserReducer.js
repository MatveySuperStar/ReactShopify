import {defaultState} from '../state'

const ADD_SELECT_USER = "ADD_SELECT_USER"
const ADD_SELECT_FIRST_NAME = "ADD_SELECT_FIRST_NAME"
const ADD_SELECT_SECOND_NAME = "ADD_SELECT_SECOND_NAME"
const ADD_SELECT_EMAIL = "ADD_SELECT_EMAIL"
const DEFAULT_SELECT_USER = "DEFAULT_SELECT_USER"
const defaultUser = {avatar: "", email: "", first_name: "", id: 0, last_name: ""}

export const selectUserReducer = (state = defaultState, action) => {
  switch(action.type) {
    case ADD_SELECT_USER: {
      return {...state, selectUser: action.payload}
    }
    case ADD_SELECT_FIRST_NAME: {
      return {...state, selectUser: {...state.selectUser, first_name: action.payload }}
    }
    case ADD_SELECT_SECOND_NAME : {
      return {...state, selectUser:{...state.selectUser, last_name: action.payload }}
    }
    case ADD_SELECT_EMAIL : {
      return {...state, selectUser:{...state.selectUser, email: action.payload }}
      }
    case DEFAULT_SELECT_USER : {
      return {...state, selectUser: defaultUser }
    }
    default:
      return {...state}
  }
}

export const addSelectUserAction = (payload) => ({type: ADD_SELECT_USER, payload})
export const addSelectFirstNameAction = (payload) => ({type: ADD_SELECT_FIRST_NAME, payload})
export const addSelectSecondNameAction = (payload) => ({type: ADD_SELECT_SECOND_NAME, payload})
export const addSelectEmailAction = (payload) => ({type: ADD_SELECT_EMAIL, payload})
export const defaultSelectUserAction = (payload) => ({type: DEFAULT_SELECT_USER, payload})