/* eslint-disable import/no-anonymous-default-export */
import * as AllFormsAction from "./allForms"
import * as UserAction from "./user"
import * as ResumesAction from "./resumes"


export default {
  ...AllFormsAction,
  ...UserAction,
  ...ResumesAction
}