import { Dispatch } from "redux"
import * as IResumes from "../types/resumes"

export const initResumes = (payload: any) => {
  return (dispatch: Dispatch<IResumes.ResumesActions>) => {
    dispatch({
      type: IResumes.ResumesActionTypes.INIT_RESUMES,
      payload
    })
  }
}

export const editResume = (payload: any) => {
  return (dispatch: Dispatch<IResumes.ResumesActions>) => {
    dispatch({
      type: IResumes.ResumesActionTypes.EDIT_RESUME,
      payload
    })
  }
}

export const deleteResumes = () => {
  return (dispatch: Dispatch<IResumes.ResumesActions>) => {
    dispatch({
      type: IResumes.ResumesActionTypes.DELETE_RESUMES
    })
  }
}

export const deleteActiveResume = () => {
  return (dispatch: Dispatch<IResumes.ResumesActions>) => {
    dispatch({
      type: IResumes.ResumesActionTypes.DELETE_ACTIVE_RESUME
    })
  }
}