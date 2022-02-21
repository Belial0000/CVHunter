import { Dispatch } from "redux"
import * as IUser from "../types/user"

export const initToken = (payload: any) => {
  return (dispatch: Dispatch<IUser.UserActions>) => {
    dispatch({
      type: IUser.UserActionTypes.INIT_TOKEN,
      payload
    })
  }
}

export const initUser = (payload: any) => {
  return (dispatch: Dispatch<IUser.UserActions>) => {
    dispatch({
      type: IUser.UserActionTypes.INIT_USER,
      payload
    })
  }
}

export const deleteUser = () => {
  return (dispatch: Dispatch<IUser.UserActions>) => {
    dispatch({
      type: IUser.UserActionTypes.DELETE_USER
    })
  }
}