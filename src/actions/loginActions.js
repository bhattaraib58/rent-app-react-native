import { LOGIN_ACTIONS } from './types';

export const requestLogin = (username, password) => ({
  type: LOGIN_ACTIONS.LOGIN_REQUEST,
  payload: {
    username,
    password
  }
});

export const loginFailed = () => ({
  type: LOGIN_ACTIONS.LOGIN_FAILED
});

export const onLoginResponse = response => ({
  type: LOGIN_ACTIONS.LOGIN_RESPONSE,
  payload: {
    response
  }
});

export const enableLoader = () => ({
  type: LOGIN_ACTIONS.LOADER.LOGIN_ENABLE_LOADER
});

export const disableLoader = () => ({
  type: LOGIN_ACTIONS.LOADER.LOGIN_DISABLE_LOADER
});
