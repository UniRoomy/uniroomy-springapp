import { combineReducers } from "redux";
import {
  UserStatusType,
  UserDataMapType,
  UpdateUserStatusAction,
  AddUserAction,
} from "../types";

// Example Reducer

interface CounterAction {
  type: string;
  payload: {
    size: number;
  };
}

const counterReducer = (state: number = 0, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return state + action.payload.size;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

// Reducers --------------------------------------------------------------

const defaultUserStatus = {
  isClient: null,
  loggedIn: false,
  userEmail: null,
};

const userStatusReducer = (
  state: UserStatusType = defaultUserStatus,
  action: UpdateUserStatusAction
): UserStatusType => {
  switch (action.type) {
    case "sign-in":
      return action.payload;
    case "sign-out":
      return action.payload;
    default:
      return state;
  }
};

const userDataReducer = (
  state: UserDataMapType = new Map(),
  action: AddUserAction
): UserDataMapType => {
  switch (action.type) {
    case "add":
      state.set(action.payload.email, action.payload);
      return state;
    default:
      return state;
  }
};

// Combine the above reducers for Mobile & Web ---------------------------

export const mobileReducers = combineReducers({
  counter: counterReducer,
});
export const webReducers = combineReducers({
  userStatus: userStatusReducer,
  userData: userDataReducer,
});

export type mobileState = ReturnType<typeof mobileReducers>;
export type webState = ReturnType<typeof webReducers>;
