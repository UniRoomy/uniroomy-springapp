// REDUCERS

export interface UserStatusType {
  isClient: boolean | null;
  loggedIn: boolean;
  userEmail: string | null;
}

export interface BasicUserData {
  firstName: string;
  surname: string;
  email: string;
  password: string;
  isClient: boolean;
}

export interface ClientDataType extends BasicUserData {
  // accomodation name or city ?
}

export interface CleanerDataType extends BasicUserData {
  businessName: string;
  businessPhoneNumber: string;
  businessAddress: string;
}

export type Users = ClientDataType | CleanerDataType;

export type UserDataMapType = Map<string, Users>;

// ACTIONS

export interface UpdateUserStatusAction {
  type: string;
  payload: UserStatusType;
}

export interface AddUserAction {
  type: string;
  payload: Users;
}

export interface UpdateCurrentUserAction {
  type: string;
  payload: {
    data: Users;
  };
}
