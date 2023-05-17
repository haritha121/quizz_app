import { createStore } from "redux";

const initialState = {
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "login": {
      const { token, _id, user } = action;
      localStorage.setItem("JWT_PAYLOAD", token);
      localStorage.setItem("_ID", _id);
      return {
        ...state,
        user: user,
      };
    }
    case "set_user": {
      const { user } = action;
      return {
        ...state,
        user: user,
      };
    }
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
