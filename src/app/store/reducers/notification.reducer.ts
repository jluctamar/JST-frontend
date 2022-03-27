import { createReducer, on } from '@ngrx/store';
import { NotificationState } from 'src/app/app-state';
import { loginFailureNotification, registerFailureNotification, updateErrorMsg } from '../actions/notification.actions';


export const initialState: NotificationState = {
    errorMsg: ''
  };

export const notificationReducer = createReducer(initialState,
  on(updateErrorMsg, (state, action) =>  {
      return { 
          ...state,
          errorMsg: action.errorMsg['message']
      }
  }),
  on(registerFailureNotification, (state, action) =>  {
    return { 
          ...state,
          errorMsg: action.errorMsg['message']
      }
  }),
  on(loginFailureNotification, (state, action) =>  {
      return { 
          ...state,
          errorMsg: action.errorMsg['message']
      }
  }),
);

