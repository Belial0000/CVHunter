import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReduser";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// const initialState = { isAuthorized: false, user: [] };
import { IInitialState, IForm } from './types/state'
import { nanoid } from 'nanoid'

const initialState: IInitialState = {
  user: {
    token: undefined,
    data: {
      userId: undefined,
      email: undefined,
    }
  },
  forms: {
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
  },
  resumes: {
    activeResume: undefined,
    allResumes: []
  }
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;


