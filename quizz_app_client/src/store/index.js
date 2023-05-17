import { createStore } from "redux";
const initialState = {
  user: null,
};
const reducer = (state = initialState, action) => {
  if (action.type === "login") {
    localStorage.setItem("JWT_PAYLOAD", action.token);
    localStorage.setItem("_ID", action._id);
    return {
      ...state,
      user: action.user,
    };
  } else {
    return state;
  }
};
const store = createStore(reducer);
export default store;
