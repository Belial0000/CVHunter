
export enum UserActionTypes {
  INIT_TOKEN = 'INIT_TOKEN',
  DELETE_USER = 'DELETE_USER',
  INIT_USER = 'INIT_USER',

}

interface InitTokenAction {
  type: UserActionTypes.INIT_TOKEN,
  payload: any
}

interface InitUserAction {
  type: UserActionTypes.INIT_USER,
  payload: any
}

interface DeleteUserFormAction {
  type: UserActionTypes.DELETE_USER,
}



export type UserActions = InitTokenAction | DeleteUserFormAction | InitUserAction