import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/interfaces/authenticator-interfaces';


export const updateUser = createAction( '[USER] Update User', props<{user: User}>())
export const deleteUser = createAction( '[USER] Delete User', props<{user: User}>())
export const updateUserStateProperty = createAction( '[USER] Update User in State', props<{user: User}>())



