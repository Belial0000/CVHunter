export interface IUserForm {
  email: string | undefined,
  firstName: string | undefined,
  lastName: string | undefined,
  birthDate: any,
  sex: string | undefined,
  photo: string | undefined,
  phoneNumber: string | undefined,
  postAdr: string | undefined,
  postIndex: string | undefined,
  city: string | undefined,
  placeOfBirth: string | undefined,
  familyStatus: string | undefined,
  citizenship: string | undefined,
  linkedIn: string | undefined,
  website: string | undefined,
}

export interface ICourses {
  id: string | undefined,
  nanoid: string | undefined,
  degree: string | undefined,
  city: string | undefined,
  institution: string | undefined,
  dateBegin: string | undefined,
  dateFinish: string | undefined,
  description: string | undefined
}

export interface IExperiences {
  id: string | undefined,
  nanoid: string | undefined,
  position: string | undefined,
  city: string | undefined,
  employer: string | undefined,
  dateBegin: string | undefined,
  dateFinish: string | undefined,
  description: string | undefined
}

export interface IInterests {
  id: string | undefined,
  nanoid: string | undefined,
  hobby: string | undefined,
}

export interface IProfiles {
  id: string | undefined,
  nanoid: string | undefined,
  description: string | undefined,
}

export interface ISkills {
  id: string | undefined,
  nanoid: string | undefined,
  skill: string | undefined,
  level: number | undefined,
}
export interface IRec {
  id: string | undefined,
  nanoid: string | undefined,
  namecompany: string | undefined,
  contactperson: string | undefined,
  number: string | undefined,
  email: string | undefined,
}
export interface ILanguages {
  id: string | undefined,
  nanoid: string | undefined,
  language: string | undefined,
  level: string | undefined,
}
export interface IForm {
  userForm: IUserForm,
  allForms: {
    coursesForm: ICourses[],
    experiencesForm: IExperiences[],
    interestsForm: IInterests[],
    profilesForm: IProfiles[],
    skillsForm: ISkills[],
    recForm: IRec[],
    languagesForm: ILanguages[]
  }
}

export interface IResume {
  title: string | undefined,
  id: number | undefined,
  templateId: number | undefined
}

export interface IResumes {
  activeResume: number | undefined,
  allResumes: IResume[]
}

export interface IInitialState {
  user: IUser,
  forms: IForm,
  resumes: IResumes
}

export interface IUser {
  token: string | undefined,
  data: {
    userId: number | undefined,
    email: string | undefined,
  }
}