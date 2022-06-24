import * as userActions from "./user.actions";
export const usersFeatureKey = "users";

let initialState = {
  loading: false,
  errorMessage: "",
  token: "",
  user: {},
  isAuthenticated: false,
};

export const reducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case userActions.REGISTER_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userActions.REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case userActions.REGISTER_USER_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: payload,
      };
    case userActions.LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userActions.LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload.token,
        user: payload.user,
        isAuthenticated: true,
      };
    case userActions.LOGIN_USER_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: payload,
        token: "",
        user: {},
        isAuthenticated: false,
      };

    default:
      return state;
  }
};
