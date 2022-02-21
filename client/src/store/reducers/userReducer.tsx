import * as statesI from '../types/state'
import * as usersI from '../types/user'

const initial: statesI.IUser = {
  token: undefined,
  data: {
    userId: undefined,
    email: undefined,
  }
}

export const userReducer = (state: statesI.IUser = initial, action: usersI.UserActions): statesI.IUser => {

  let newState = { ...state }

  switch (action.type) {

    case usersI.UserActionTypes.INIT_TOKEN:
      newState.token = action.payload.token
      return newState

    case usersI.UserActionTypes.INIT_USER:
      newState.data.email = action.payload.email
      newState.data.userId = action.payload.id
      return newState

    case usersI.UserActionTypes.DELETE_USER:
      newState = { ...initial }
      return newState

    default:
      return state
  }
}