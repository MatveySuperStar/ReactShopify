import {defaultState} from '../state'

const ACTIVATE = "ACTIVATE"

export const activateReducer = (state = defaultState, action) => {
  switch(action.type) {
    case ACTIVATE : {
      return {...state, activate: !state.activate}
    }
    default:
      return {...state}
  }
}

export const activateAction = (payload) => ({type: ACTIVATE, payload})