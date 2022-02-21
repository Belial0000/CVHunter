import { combineReducers } from "redux";
import { formReducer } from "./allForms";
import { userReducer } from "./userReducer";
import { resumesReducer } from "./resumesReducer";

const reducerMap = {
  user: userReducer,
  forms: formReducer,
  resumes: resumesReducer
};

const rootReducer = combineReducers(reducerMap);
export default rootReducer;


export type RootState = ReturnType<typeof rootReducer>