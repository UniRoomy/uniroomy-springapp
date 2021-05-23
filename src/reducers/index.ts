import { combineReducers } from "redux";

// Mobile reducers

// Web reducers

interface CounterAction {
  type: string;
  payload: {
    size: number;
  };
}

const counterReducer = (state: number = 0, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return state + action.payload.size;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

// combineReducers

export const mobileReducers = combineReducers({
  counter: counterReducer,
});
export const webReducers = combineReducers({
  counter: counterReducer,
});

export type mobileState = ReturnType<typeof mobileReducers>;
export type webState = ReturnType<typeof webReducers>;
