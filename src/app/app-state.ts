import { User } from './interfaces/authenticator-interfaces';



export type AuthState = {
    user: User;
    isLoggedIn: boolean;
    respMsg: string; 
};




export interface AppState {
    auth: AuthState
}