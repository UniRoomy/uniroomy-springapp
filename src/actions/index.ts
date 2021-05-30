import {
  UpdateUserStatusAction,
  AddUserAction,
  UserDataMapType,
  BasicUserData,
  ClientDataType,
  CleanerDataType,
} from "../types";

// Simple example action
export const increment = (num: number) => {
  return {
    type: "increment",
    payload: {
      size: num,
    },
  };
};

export const decrement = () => {
  return {
    type: "decrement",
  };
};

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
  let payload: BasicUserData | (ClientDataType | CleanerDataType) = {
    firstName: firstName,
    surname: surname,
    email: email,
    password: password,
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
