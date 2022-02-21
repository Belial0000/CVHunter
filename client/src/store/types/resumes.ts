export enum ResumesActionTypes {
  INIT_RESUMES = 'INIT_RESUMES',
  DELETE_RESUMES = 'DELETE_RESUMES',
  EDIT_RESUME = 'EDIT_RESUME',
  DELETE_ACTIVE_RESUME = 'DELETE_ACTIVE_RESUME'
}

interface InitResumesAction {
  type: ResumesActionTypes.INIT_RESUMES,
  payload: any
}

interface DeleteResumesFormAction {
  type: ResumesActionTypes.DELETE_RESUMES,
}

interface EditResumesAction {
  type: ResumesActionTypes.EDIT_RESUME,
  payload: number
}

interface DeleteActiveResumeAction {
  type: ResumesActionTypes.DELETE_ACTIVE_RESUME
}

export type ResumesActions = InitResumesAction | DeleteResumesFormAction | EditResumesAction | DeleteActiveResumeAction