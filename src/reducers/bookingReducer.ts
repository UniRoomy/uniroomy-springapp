import { Booking, AddBookingAction } from "../types";

const bookingReducer = (state: Booking[] = [], action: AddBookingAction) => {
  switch (action.type) {
    case "add":
      state.push(action.payload.data);
      return state;
    // case "remove":
    default:
      return state;
  }
};

export default bookingReducer;
