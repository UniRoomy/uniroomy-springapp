import {
  UpdateUserStatusAction,
  AddUserAction,
  BasicUserData,
  Users,
} from "../types";

export const updateUserStatus = (
  actionType: string,
  client: boolean | null,
  loggedIn: boolean,
  email: string | null
): UpdateUserStatusAction => {
  return {
    type: actionType,
    payload: {
      isClient: client,
      loggedIn: loggedIn,
      userEmail: email,
    },
  };
};

export const addUser = (
  // Required params
  actionType: string,
  isClient: boolean,
  firstName: string,
  surname: string,
  email: string,
  password: string,
  // client-specific params (optional)
  // cleaner-specific params (optional)
  businessName: string | null,
  businessPhoneNumber: string | null,
  businessAddress: string | null
): AddUserAction => {
  let payload: BasicUserData | Users = {
    firstName: firstName,
    surname: surname,
    email: email,
    password: password,
    isClient: isClient,
  };

  if (actionType == "add-client") {
    payload = { ...payload };
  } else if (actionType == "add-cleaner") {
    payload = {
      ...payload,
      businessName: businessName,
      businessPhoneNumber: businessPhoneNumber,
      businessAddress: businessAddress,
    };
  }

  return {
    type: "add",
    payload: payload,
  };
};

export const updateCurrentUser = (currentUserData: Users) => {
  return {
    type: "update",
    payload: {
      data: currentUserData,
    },
  };
};
