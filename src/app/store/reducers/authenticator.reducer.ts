import { createReducer, on, State } from '@ngrx/store';
import { AuthState } from 'src/app/app-state';
import { User } from 'src/app/interfaces/authenticator-interfaces';
import { login, loginFailure, loginSuccess, logout, register, registerFailure, registerSuccess } from '../actions/authenticator.actions';


export const initialState: AuthState = {
    isLoggedIn: false,
    user: undefined,
    respMsg: ''
  };

export const authReducer = createReducer(initialState,
  on(register, (state, action) =>  {
      return { 
          ...state
      }
  }),
  on(loginSuccess, (state, action) => {
    return {
        ...state,
        isLoggedIn: true,
        user: action.user,
        respMsg: "Login Successfull"
    }
  }),
  on(loginFailure, (state, action) => {
    return {
        ...state,
        isLoggedIn: false,
        user: null,
        respMsg: "Unauthorized. User Not Found."
    }
  }),
  on(registerSuccess, (state, action) => {
    return {
        ...state,
        respMsg: action.respMsg
    }
  }),
  on(registerFailure, (state, action) => {
    return {
        ...state,
        respMsg: action.respMsg
    }
  }),
  on(logout, (state, action) => {
    return {
        ...state,
        isLoggedIn: false,
        user: null,
        respMsg: "Logout Successfull"
    }
  }),
);

