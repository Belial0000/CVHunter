import * as statesI from '../types/state'
import * as resumesI from '../types/resumes'

const initial: statesI.IResumes = {
  activeResume: undefined,
  allResumes: []
}

export const resumesReducer = (state: statesI.IResumes = initial, action: resumesI.ResumesActions): statesI.IResumes => {

  let newState = { ...state }

  switch (action.type) {

    case resumesI.ResumesActionTypes.INIT_RESUMES:
      newState.allResumes = action.payload
      return newState

    case resumesI.ResumesActionTypes.DELETE_RESUMES:
      newState = { ...initial }
      return newState

    case resumesI.ResumesActionTypes.EDIT_RESUME:
      newState.activeResume = action.payload
      return newState

    case resumesI.ResumesActionTypes.DELETE_ACTIVE_RESUME:
      newState.activeResume = undefined
      return newState

    default:
      return state
  }
}