import { Users, UpdateCurrentUserAction } from "../types";

const currentUserReducer = (
  state: Users | null = null,
  action: UpdateCurrentUserAction
): Users => {
  switch (action.type) {
    case "update":
      return action.payload.data;
    default:
      return state;
  }
};

export default currentUserReducer;
