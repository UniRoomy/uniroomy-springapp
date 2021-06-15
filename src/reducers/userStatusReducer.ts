import { UpdateUserStatusAction, UserStatusType } from "../types";

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

export default userStatusReducer;
