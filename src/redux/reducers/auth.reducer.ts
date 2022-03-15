import { AUTH_ERROR, AUTH_LOADING, AUTH_USER } from "../types/auth.type";

const initialState = {
    user: "",
    loading: false,
    errorMessage: ""
}

export default (state = initialState, action: any) => {
    switch (action.type) {
      case AUTH_USER:
        return { ...state, user: action.payload };
      case AUTH_ERROR:
        return { ...state, errorMessage: action.payload };
      case AUTH_LOADING:
        return { ...state, loading: true };
      default:
        return state;
    }
  };