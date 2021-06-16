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

// Bookings

export interface Booking {
  clientId: string;
  // cleanerId: string,
  dateOfBooking: Date;
  preferredTime: Date[];
  timeRequired: string;
  repeatBooking: boolean;
  repeatInterval: string;
  endOfTenancy: Date;
  toBeCleaned: string;
  completed: boolean;
}

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

export interface AddBookingAction {
  type: string;
  payload: {
    data: Booking;
  };
}
