import { ClientDataType, CleanerDataType } from "./types";

export const defaultUsers: Array<ClientDataType | CleanerDataType> = [
  // Clients
  {
    isClient: true,
    firstName: "sahir",
    surname: "ali",
    email: "email1",
    password: "testing",
  },
  {
    isClient: true,
    firstName: "tech",
    surname: "wizard",
    email: "email2",
    password: "test",
  },
  // Cleaners
  {
    isClient: false,
    firstName: "cleaner1",
    surname: "f",
    email: "email3",
    password: "testing",
    businessName: "business1",
    businessPhoneNumber: "0121",
    businessAddress: "blah",
  },
];