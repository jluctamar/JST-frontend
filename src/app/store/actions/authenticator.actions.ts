import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/interfaces/authenticator-interfaces';

export const register = createAction('[REGISTER] Register User', props<{user:User}>());
export const registerSuccess = createAction('[REGISTER] Register User Success', props<{respMsg: string}>());;
export const registerFailure = createAction('[REGISTER] Register User Failure', props<{respMsg: string}>());

export const login = createAction('[LOGIN] Login User', props<{username: string, password: string}>());
export const loginSuccess = createAction('[LOGIN] Login User Success', props<{user: User}>());
export const loginFailure = createAction('[LOGIN] Login User Failure', props<{user: any}>());

export const logout = createAction('[LOGOUT] Logout User');