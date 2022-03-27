import { createAction, props } from '@ngrx/store';

export const updateErrorMsg = createAction('[NOTIFICATION] Update Error Message', props<{errorMsg: string}>());

export const registerFailureNotification = createAction('[NOTIFICATION] Register User Failure', props<{errorMsg: string}>());

export const loginFailureNotification = createAction('[NOTIFICATION] Login User Failure', props<{errorMsg: string}>());