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
  password: string; // may need to be hashed for security purposes
}

export interface ClientDataType extends BasicUserData {
  // accomodation name or city ?
}

export interface CleanerDataType extends BasicUserData {
  businessName: string;
  businessPhoneNumber: string;
  businessAddress: string;
}

export type UserDataMapType = Map<string, ClientDataType | CleanerDataType>;

// ACTIONS

export interface UpdateUserStatusAction {
  type: string;
  payload: UserStatusType;
}

export interface AddUserAction {
  type: string;
  payload: ClientDataType | CleanerDataType;
}
