import { User } from './interfaces/authenticator-interfaces';



export type AuthState = {
    user: User;
    isLoggedIn: boolean;
};


export type NotificationState = {
    respMsg: string; 
    errorMsg: string; 
    isDisplayed: boolean;
};




export interface AppState {
    auth: AuthState
    notifications: NotificationState
}