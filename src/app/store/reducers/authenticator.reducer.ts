import { createReducer, on } from '@ngrx/store';
import { AuthState } from 'src/app/app-state';
import { loginFailure, loginSuccess, logout, register, registerFailure, registerSuccess } from '../actions/authenticator.actions';
import { updateUserStateProperty } from '../actions/user-management.actions';


export const initialState: AuthState = {
    isLoggedIn: false,
    user: null
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
    }
  }),
  on(loginFailure, (state, action) => {
    return {
        ...state,
        isLoggedIn: false,
        user: null,
    }
  }),
  on(registerSuccess, (state, action) => {
    return {
        ...state,
    }
  }),
  on(registerFailure, (state, action) => {
    return {
        ...state,
    }
  }),
  on(updateUserStateProperty, (state, action) =>  {
    return { 
        ...state,
        user: action.user
    }
}),

  on(logout, (state, action) => {
    return {
        ...state,
        isLoggedIn: false,
        user: null,
    }
  }),
);

