import { LOGIN_ACTIONS } from '../actions/types';

const loginReducer = (state = [], action) => {
  switch (action.type) {
    case LOGIN_ACTIONS.LOGIN_REQUEST:
      return { ...state, isLoading: true };

    case LOGIN_ACTIONS.LOGIN_RESPONSE:
      return { ...state, response: action, isLoading: false };

    case LOGIN_ACTIONS.LOGIN_FAILED:
      return { ...state, error: action, isLoading: false };

    default:
      return state;
  }
};

export default loginReducer;
