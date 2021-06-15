import { combineReducers } from "redux";
import {
  UserStatusType,
  UserDataMapType,
  UpdateUserStatusAction,
  AddUserAction,
} from "../types";
import userStatusReducer from "./userStatusReducer";
// import userDataReducer from "./userDataReducer";
import currentUserReducer from "./currentUserReducer";

// Combine the above reducers for Mobile & Web ---------------------------

export const mobileReducers = combineReducers({});

export const webReducers = combineReducers({
  userStatus: userStatusReducer,
  // userData: userDataReducer,
  currentUser: currentUserReducer,
});

export type mobileState = ReturnType<typeof mobileReducers>;
export type webState = ReturnType<typeof webReducers>;
