import { Dispatch } from "redux"
import * as IForms from "../types/form"
import * as IStates from '../types/state'

export const addAllForm = (payload: IStates.IForm) => {
  return (dispatch: Dispatch<IForms.FormActions>) => {
    dispatch({
      type: IForms.FormActionTypes.ADD_ALL_FORM,
      payload
    })
  }
}

export const addUserForm = (payload: IStates.IUserForm) => {
  return (dispatch: Dispatch<IForms.FormActions>) => {
    dispatch({
      type: IForms.FormActionTypes.ADD_USER_FORM,
      payload
    })
  }
}

export const addCoursesForm = (payload: IStates.ICourses) => {
  return (dispatch: Dispatch<IForms.FormActions>) => {
    dispatch({
      type: IForms.FormActionTypes.ADD_COURSES_FORM,
      payload
    })
  }
}

export const addExperiencesForm = (payload: IStates.IExperiences) => {
  return (dispatch: Dispatch<IForms.FormActions>) => {
    dispatch({
      type: IForms.FormActionTypes.ADD_EXPERIENCES_FORM,
      payload
    })
  }
}

export const addInterestsForm = (payload: IStates.IInterests) => {
  return (dispatch: Dispatch<IForms.FormActions>) => {
    dispatch({
      type: IForms.FormActionTypes.ADD_INTERESTS_FORM,
      payload
    })
  }
}

export const addProfilesForm = (payload: IStates.IProfiles) => {
  return (dispatch: Dispatch<IForms.FormActions>) => {
    dispatch({
      type: IForms.FormActionTypes.ADD_PROFILES_FORM,
      payload
    })
  }
}

export const addSkillsForm = (payload: IStates.ISkills) => {
  return (dispatch: Dispatch<IForms.FormActions>) => {
    dispatch({
      type: IForms.FormActionTypes.ADD_SKILLS_FORM,
      payload
    })
  }
}

export const addLanguagesForm = (payload: IStates.ILanguages) => {
  return (dispatch: Dispatch<IForms.FormActions>) => {
    dispatch({
      type: IForms.FormActionTypes.ADD_LANGUAGES_FORM,
      payload
    })
  }
}

export const addRecForm = (payload: IStates.IRec) => {
  return (dispatch: Dispatch<IForms.FormActions>) => {
    dispatch({
      type: IForms.FormActionTypes.ADD_REC_FORM,
      payload
    })
  }
}

export const deleteCoursesForm = (payload: string) => {
  return (dispatch: Dispatch<IForms.FormActions>) => {
    dispatch({
      type: IForms.FormActionTypes.DELETE_COURSES_FORM,
      payload
    })
  }
}

export const deleteExperiencesForm = (payload: string) => {
  return (dispatch: Dispatch<IForms.FormActions>) => {
    dispatch({
      type: IForms.FormActionTypes.DELETE_EXPERIENCES_FORM,
      payload
    })
  }
}

export const deleteInterestsForm = (payload: string) => {
  return (dispatch: Dispatch<IForms.FormActions>) => {
    dispatch({
      type: IForms.FormActionTypes.DELETE_INTERESTS_FORM,
      payload
    })
  }
}

export const deleteProfilesForm = (payload: string) => {
  return (dispatch: Dispatch<IForms.FormActions>) => {
    dispatch({
      type: IForms.FormActionTypes.DELETE_PROFILES_FORM,
      payload
    })
  }
}

export const deleteSkillsForm = (payload: string) => {
  return (dispatch: Dispatch<IForms.FormActions>) => {
    dispatch({
      type: IForms.FormActionTypes.DELETE_SKILLS_FORM,
      payload
    })
  }
}

export const deleteRecForm = (payload: string) => {
  return (dispatch: Dispatch<IForms.FormActions>) => {
    dispatch({
      type: IForms.FormActionTypes.DELETE_REC_FORM,
      payload
    })
  }
}

export const deleteLanguagesForm = (payload: string) => {
  return (dispatch: Dispatch<IForms.FormActions>) => {
    dispatch({
      type: IForms.FormActionTypes.DELETE_LANGUAGES_FORM,
      payload
    })
  }
}

export const editCoursesForm = (payload: { nanoid: string, data: IStates.ICourses }) => {
  return (dispatch: Dispatch<IForms.FormActions>) => {
    dispatch({
      type: IForms.FormActionTypes.EDIT_COURSES_FORM,
      payload
    })
  }
}

export const editExperiencesForm = (payload: { nanoid: string, data: IStates.IExperiences }) => {
  return (dispatch: Dispatch<IForms.FormActions>) => {
    dispatch({
      type: IForms.FormActionTypes.EDIT_EXPERIENCES_FORM,
      payload
    })
  }
}

export const editInterestsForm = (payload: { nanoid: string, data: IStates.IInterests }) => {
  return (dispatch: Dispatch<IForms.FormActions>) => {
    dispatch({
      type: IForms.FormActionTypes.EDIT_INTERESTS_FORM,
      payload
    })
  }
}

export const editProfilesForm = (payload: { nanoid: string, data: IStates.IProfiles }) => {
  return (dispatch: Dispatch<IForms.FormActions>) => {
    dispatch({
      type: IForms.FormActionTypes.EDIT_PROFILES_FORM,
      payload
    })
  }
}

export const editSkillsForm = (payload: { nanoid: string, data: IStates.ISkills }) => {
  return (dispatch: Dispatch<IForms.FormActions>) => {
    dispatch({
      type: IForms.FormActionTypes.EDIT_SKILLS_FORM,
      payload
    })
  }
}

export const editRecForm = (payload: { nanoid: string, data: IStates.IRec }) => {
  return (dispatch: Dispatch<IForms.FormActions>) => {
    dispatch({
      type: IForms.FormActionTypes.EDIT_REC_FORM,
      payload
    })
  }
}

export const editLanguagesForm = (payload: { nanoid: string, data: IStates.ILanguages }) => {
  return (dispatch: Dispatch<IForms.FormActions>) => {
    dispatch({
      type: IForms.FormActionTypes.EDIT_LANGUAGES_FORM,
      payload
    })
  }
}

export const deleteAll = () => {
  return (dispatch: Dispatch<IForms.FormActions>) => {
    dispatch({
      type: IForms.FormActionTypes.DELETE_ALL
    })
  }
}