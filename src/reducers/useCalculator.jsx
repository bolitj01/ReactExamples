import { useReducer } from "react";

const useCalculator = (init) => {
  const reducer = (state, action) => {
    action.payload = parseInt(action.payload);
    switch (action.type) {
      case "ADD":
        return state + action.payload;
      case "SUBTRACT":
        return state - action.payload;
      case "MULTIPLY":
        return state * action.payload;
      case "DIVIDE":
        return state / action.payload;
      case "RESET":
        return init;
      default:
        return state;
    }
  };

  const [value, dispatch] = useReducer(reducer, init);

  const calculation = (operation, value) => {
    dispatch({ type: operation, payload: value });
  };

  return [value, calculation];
};

export default useCalculator;
