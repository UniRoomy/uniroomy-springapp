import { combineReducers } from "redux";
import userStatusReducer from "./userStatusReducer";
import userDataReducer from "./userDataReducer";
import currentUserReducer from "./currentUserReducer";
import bookingReducer from "./bookingReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

/* persist-reducer configs  - if reducers need to be persisted individually
const statusPersistConfig = {
  key: "userStatus",
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

const currentUserPersistConfig = {
  key: "currentUser",
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

const bookingsPersistConfig = {
  key: "bookings",
  storage: storage,
  // stateReconciler: autoMergeLevel2,
};
*/

// Combine the above reducers for Mobile & Web ---------------------------

export const mobileReducers = combineReducers({
  userStatus: userStatusReducer,
  userData: userDataReducer,
  currentUser: currentUserReducer,
  bookings: bookingReducer,
});

export const webReducers = combineReducers({
  // userStatus: persistReducer(statusPersistConfig, userStatusReducer),
  // currentUser: persistReducer(currentUserPersistConfig, currentUserReducer),
  // bookings: persistReducer(bookingsPersistConfig, bookingReducer),
  userStatus: userStatusReducer,
  currentUser: currentUserReducer,
  bookings: bookingReducer,     // *** Not being persisted on page refresh/navigate
});

export type mobileState = ReturnType<typeof mobileReducers>;
export type webState = ReturnType<typeof webReducers>;
