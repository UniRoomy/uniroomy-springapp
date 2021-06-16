import { AddUserAction, UserDataMapType } from "../types";

const defaultUserData = new Map([
  [
    "none",
    {
      firstName: "none",
      surname: "none",
      email: "none",
      password: "none",
      isClient: true,
    },
  ],
]);

const userDataReducer = (
  state: UserDataMapType = defaultUserData,
  action: AddUserAction
): UserDataMapType => {
  switch (action.type) {
    case "add-user":
      if (state.size == undefined) {
        state = new Map();
      }

      state.set(action.payload.email, action.payload);

      return state;
    default:
      return state;
  }
};

export default userDataReducer;
