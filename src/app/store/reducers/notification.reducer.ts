import { createReducer, on } from '@ngrx/store';
import { NotificationState } from 'src/app/app-state';
import { clearNotification, hideNotification, showNotification, updateErrorMsg, updateRespMsg } from '../actions/notification.actions';


export const initialState: NotificationState = {
    respMsg: '', 
    errorMsg: '',
    isDisplayed: false
  };

export const notificationReducer = createReducer(initialState,
  on(updateErrorMsg, (state, action) =>  {
      return { 
          ...state,
          respMsg: '',
          errorMsg: action.errorMsg
      }
  }),
  on(updateRespMsg, (state, action) =>  {
      return { 
          ...state,
          respMsg: action.respMsg,
          errorMsg: ''
      }
  }),
  on(showNotification, (state, action) =>  {
      return { 
          ...state,
          isDisplayed: true
      }
  }),
  on(hideNotification, (state, action) =>  {
      return { 
          ...state,
          isDisplayed: false

      }
  }),
  on(clearNotification, (state, action) =>  {
      return { 
          ...state,
          respMsg: '',
          errorMsg: '',
          isDisplayed: false

      }
  }),
);

