import { createAction, props } from '@ngrx/store';

export const updateErrorMsg = createAction('[NOTIFICATION] Update Error Message', props<{errorMsg: string}>());
export const updateRespMsg = createAction('[NOTIFICATION] Update Response Message', props<{respMsg: string}>());

// export const registerFailureNotification = createAction('[NOTIFICATION] Register User Failure', props<{errorMsg: string}>());

// export const loginFailureNotification = createAction('[NOTIFICATION] Login User Failure', props<{errorMsg: string}>());

export const showNotification = createAction('[NOTIFICATION] Show Notification');
export const hideNotification = createAction('[NOTIFICATION] hide Notification');

export const clearNotification = createAction('[NOTIFICATION] Clear Notification');
