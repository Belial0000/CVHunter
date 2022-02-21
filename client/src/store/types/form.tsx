import * as states from './state'

export enum FormActionTypes {
  ADD_ALL_FORM = 'ADD_ALL_FORM',
  ADD_USER_FORM = 'ADD_USER_FORM',
  ADD_COURSES_FORM = 'ADD_COURSES_FORM',
  ADD_EXPERIENCES_FORM = 'ADD_EXPERIENCES_FORM',
  ADD_INTERESTS_FORM = 'ADD_INTERESTS_FORM',
  ADD_PROFILES_FORM = 'ADD_PROFILES_FORM',
  ADD_SKILLS_FORM = 'ADD_SKILLS_FORM',
  ADD_REC_FORM = 'ADD_REC_FORM',
  ADD_LANGUAGES_FORM = 'ADD_LANGUAGES_FORM',
  DELETE_COURSES_FORM = 'DELETE_COURSES_FORM',
  DELETE_EXPERIENCES_FORM = 'DELETE_EXPERIENCES_FORM',
  DELETE_INTERESTS_FORM = 'DELETE_INTERESTS_FORM',
  DELETE_PROFILES_FORM = 'DELETE_PROFILES_FORM',
  DELETE_SKILLS_FORM = 'DELETE_SKILLS_FORM',
  DELETE_REC_FORM = 'DELETE_REC_FORM',
  DELETE_LANGUAGES_FORM = 'DELETE_LANGUAGES_FORM',
  EDIT_USER_FORM = 'EDIT_USER_FORM',
  EDIT_COURSES_FORM = 'EDIT_COURSES_FORM',
  EDIT_EXPERIENCES_FORM = 'EDIT_EXPERIENCES_FORM',
  EDIT_INTERESTS_FORM = 'EDIT_INTERESTS_FORM',
  EDIT_PROFILES_FORM = 'EDIT_PROFILES_FORM',
  EDIT_SKILLS_FORM = 'EDIT_SKILLS_FORM',
  EDIT_REC_FORM = 'EDIT_REC_FORM',
  EDIT_LANGUAGES_FORM = 'EDIT_LANGUAGES_FORM',
  DELETE_ALL = 'DELETE_ALL'
}

interface AddAllFormAction {
  type: FormActionTypes.ADD_ALL_FORM,
  payload: states.IForm
}
interface AddUserFormAction {
  type: FormActionTypes.ADD_USER_FORM,
  payload: states.IUserForm
}

interface AddCoursesFormAction {
  type: FormActionTypes.ADD_COURSES_FORM,
  payload: states.ICourses
}

interface AddExperiencesFormAction {
  type: FormActionTypes.ADD_EXPERIENCES_FORM,
  payload: states.IExperiences
}
interface AddRecFormAction {
  type: FormActionTypes.ADD_REC_FORM,
  payload: states.IRec
}
interface AddInterestsFormAction {
  type: FormActionTypes.ADD_INTERESTS_FORM,
  payload: states.IInterests
}

interface AddProfilesFormAction {
  type: FormActionTypes.ADD_PROFILES_FORM,
  payload: states.IProfiles
}

interface AddSkillsFormAction {
  type: FormActionTypes.ADD_SKILLS_FORM,
  payload: states.ISkills
}
interface AddLanguagesFormAction {
  type: FormActionTypes.ADD_LANGUAGES_FORM,
  payload: states.ILanguages
}
interface DeleteCoursesFormAction {
  type: FormActionTypes.DELETE_COURSES_FORM,
  payload: string
}

interface DeleteExperiencesFormAction {
  type: FormActionTypes.DELETE_EXPERIENCES_FORM,
  payload: string
}

interface DeleteInterestsFormAction {
  type: FormActionTypes.DELETE_INTERESTS_FORM,
  payload: string
}

interface DeleteProfilesFormAction {
  type: FormActionTypes.DELETE_PROFILES_FORM,
  payload: string
}

interface DeleteSkillsFormAction {
  type: FormActionTypes.DELETE_SKILLS_FORM,
  payload: string
}
interface DeleteRecFormAction {
  type: FormActionTypes.DELETE_REC_FORM,
  payload: string
}
interface DeleteLanguagesFormAction {
  type: FormActionTypes.DELETE_LANGUAGES_FORM,
  payload: string
}
interface EditUserFormAction {
  type: FormActionTypes.EDIT_USER_FORM,
  payload: { nanoid: string, data: states.IUserForm }
}

interface EditCoursesFormAction {
  type: FormActionTypes.EDIT_COURSES_FORM,
  payload: { nanoid: string, data: states.ICourses }
}

interface EditExperiencesFormAction {
  type: FormActionTypes.EDIT_EXPERIENCES_FORM,
  payload: { nanoid: string, data: states.IExperiences }
}

interface EditInterestsFormAction {
  type: FormActionTypes.EDIT_INTERESTS_FORM,
  payload: { nanoid: string, data: states.IInterests }
}

interface EditProfilesFormAction {
  type: FormActionTypes.EDIT_PROFILES_FORM,
  payload: { nanoid: string, data: states.IProfiles }
}

interface EditSkillsFormAction {
  type: FormActionTypes.EDIT_SKILLS_FORM,
  payload: { nanoid: string, data: states.ISkills }
}
interface EditRecFormAction {
  type: FormActionTypes.EDIT_REC_FORM,
  payload: { nanoid: string, data: states.IRec }
}

interface EditLanguagesFormAction {
  type: FormActionTypes.EDIT_LANGUAGES_FORM,
  payload: { nanoid: string, data: states.ILanguages }
}

interface DeleteAllAction {
  type: FormActionTypes.DELETE_ALL,
}

export type FormActions = AddUserFormAction |
  AddCoursesFormAction |
  AddExperiencesFormAction |
  AddInterestsFormAction |
  AddProfilesFormAction |
  AddSkillsFormAction |
  DeleteCoursesFormAction |
  DeleteExperiencesFormAction |
  DeleteInterestsFormAction |
  DeleteProfilesFormAction |
  DeleteSkillsFormAction |
  EditUserFormAction |
  EditCoursesFormAction |
  EditExperiencesFormAction |
  EditInterestsFormAction |
  EditProfilesFormAction |
  EditSkillsFormAction |
  AddAllFormAction |
  AddRecFormAction |
  DeleteRecFormAction |
  EditRecFormAction |
  AddLanguagesFormAction |
  DeleteLanguagesFormAction |
  EditLanguagesFormAction |
  DeleteAllAction