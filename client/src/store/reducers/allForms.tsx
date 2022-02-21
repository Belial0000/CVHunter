import * as statesI from '../types/state'
import * as formsI from '../types/form'

const initial: statesI.IForm = {

  userForm: {
    email: undefined,
    firstName: undefined,
    lastName: undefined,
    birthDate: undefined,
    sex: undefined,
    photo: undefined,
    phoneNumber: undefined,
    postAdr: undefined,
    postIndex: undefined,
    city: undefined,
    placeOfBirth: undefined,
    familyStatus: undefined,
    citizenship: undefined,
    linkedIn: undefined,
    website: undefined,
  },
  allForms: {
    coursesForm: [],
    experiencesForm: [],
    interestsForm: [],
    profilesForm: [],
    skillsForm: [],
    recForm: [],
    languagesForm: []
  }
}

export const formReducer = (state: statesI.IForm = initial, action: formsI.FormActions): statesI.IForm => {


  let newState = { ...state }
  switch (action.type) {

    case formsI.FormActionTypes.ADD_USER_FORM:

      newState.userForm = action.payload
      return newState

    case formsI.FormActionTypes.ADD_COURSES_FORM:

      if (Array.isArray(action.payload)) {
        action.payload.forEach((el) => {
          newState.allForms.coursesForm.push(el)
        })
      } else {
        newState.allForms.coursesForm.push(action.payload)
      }
      return newState

    case formsI.FormActionTypes.ADD_EXPERIENCES_FORM:

      if (Array.isArray(action.payload)) {
        action.payload.forEach((el) => {
          newState.allForms.experiencesForm.push(el)
        })
      } else {
        newState.allForms.experiencesForm.push(action.payload)
      }
      return newState

    case formsI.FormActionTypes.ADD_INTERESTS_FORM:

      if (Array.isArray(action.payload)) {
        action.payload.forEach((el) => {
          newState.allForms.interestsForm.push(el)
        })
      } else {
        newState.allForms.interestsForm.push(action.payload)
      }
      return newState

    case formsI.FormActionTypes.ADD_PROFILES_FORM:

      newState.allForms.profilesForm.push(action.payload)
      return newState

    case formsI.FormActionTypes.ADD_SKILLS_FORM:

      if (Array.isArray(action.payload)) {
        action.payload.forEach((el) => {
          newState.allForms.skillsForm.push(el)
        })
      } else {
        newState.allForms.skillsForm.push(action.payload)
      }
      return newState

    case formsI.FormActionTypes.ADD_REC_FORM:

      if (Array.isArray(action.payload)) {
        action.payload.forEach((el) => {
          newState.allForms.recForm.push(el)
        })
      } else {
        newState.allForms.recForm.push(action.payload)
      }
      return newState

    case formsI.FormActionTypes.ADD_LANGUAGES_FORM:

      if (Array.isArray(action.payload)) {
        action.payload.forEach((el) => {
          newState.allForms.languagesForm.push(el)
        })
      } else {
        newState.allForms.languagesForm.push(action.payload)
      }
      return newState

    case formsI.FormActionTypes.DELETE_COURSES_FORM:

      newState.allForms.coursesForm = newState.allForms.coursesForm.filter(el => el.nanoid !== action.payload)
      return newState

    case formsI.FormActionTypes.DELETE_EXPERIENCES_FORM:

      newState.allForms.experiencesForm = newState.allForms.experiencesForm.filter(el => el.nanoid !== action.payload)
      return newState

    case formsI.FormActionTypes.DELETE_INTERESTS_FORM:

      newState.allForms.interestsForm = newState.allForms.interestsForm.filter(el => el.nanoid !== action.payload)
      return newState

    case formsI.FormActionTypes.DELETE_PROFILES_FORM:

      newState.allForms.profilesForm = newState.allForms.profilesForm.filter(el => el.nanoid !== action.payload)
      return newState

    case formsI.FormActionTypes.DELETE_SKILLS_FORM:

      newState.allForms.skillsForm = newState.allForms.skillsForm.filter(el => el.nanoid !== action.payload)
      return newState

    case formsI.FormActionTypes.DELETE_REC_FORM:

      newState.allForms.recForm = newState.allForms.recForm.filter(el => el.nanoid !== action.payload)
      return newState

    case formsI.FormActionTypes.DELETE_LANGUAGES_FORM:

      newState.allForms.languagesForm = newState.allForms.languagesForm.filter(el => el.nanoid !== action.payload)
      return newState

    case formsI.FormActionTypes.EDIT_COURSES_FORM:

      newState.allForms.coursesForm = newState.allForms.coursesForm.map(el => {

        if (el.nanoid === action.payload.nanoid) {
          el = { ...action.payload.data }
        }
        return el
      })
      return newState

    case formsI.FormActionTypes.EDIT_EXPERIENCES_FORM:

      newState.allForms.experiencesForm = newState.allForms.experiencesForm.map(el => {
        if (el.nanoid === action.payload.nanoid) {
          el = action.payload.data
        }
        return el
      })
      return newState

    case formsI.FormActionTypes.EDIT_INTERESTS_FORM:

      newState.allForms.interestsForm = newState.allForms.interestsForm.map(el => {
        if (el.nanoid === action.payload.nanoid) {
          el = action.payload.data
        }
        return el
      })
      return newState

    case formsI.FormActionTypes.EDIT_PROFILES_FORM:

      newState.allForms.profilesForm = newState.allForms.profilesForm.map(el => {
        if (el.nanoid === action.payload.nanoid) {
          el = action.payload.data
        }
        return el
      })
      return newState

    case formsI.FormActionTypes.EDIT_SKILLS_FORM:

      newState.allForms.skillsForm = newState.allForms.skillsForm.map(el => {
        if (el.nanoid === action.payload.nanoid) {
          el = action.payload.data
        }
        return el
      })
      return newState

    case formsI.FormActionTypes.EDIT_REC_FORM:

      newState.allForms.recForm = newState.allForms.recForm.map(el => {
        if (el.nanoid === action.payload.nanoid) {
          el = action.payload.data
        }
        return el
      })
      return newState

    case formsI.FormActionTypes.EDIT_LANGUAGES_FORM:

      newState.allForms.languagesForm = newState.allForms.languagesForm.map(el => {
        if (el.nanoid === action.payload.nanoid) {
          el = action.payload.data
        }
        return el
      })
      return newState

    case formsI.FormActionTypes.DELETE_ALL:
      newState = initial
      return newState

    default:
      return state
  }
}