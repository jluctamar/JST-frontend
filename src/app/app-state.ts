import { environment } from 'src/environments/environment';
import { User } from './interfaces/authenticator-interfaces';
import { CartItem } from './interfaces/order-management.interfaces';



export type AuthState = {
    user: User;
    isLoggedIn: boolean;
};


export type NotificationState = {
    respMsg: string; 
    errorMsg: string; 
    isDisplayed: boolean;
};

export type OrderState = {
    cartItems: CartItem[];
    total: number;
}




export interface AppState {
    auth: AuthState
    notifications: NotificationState
    orders: OrderState
}





export const initialOrderState: OrderState = {
    cartItems:  [
        {
            dishName: 'Labouyi Avwan',
            imgSrc: environment.production ? 'https://drive.google.com/uc?id=1Xp-BpBSJqaEGtnelb1yVVZmw3mKDNfDl': '/assets/dish10.jpg',
            price: 5.00,
            quantity: 1
          },
          {
            dishName: 'Bannan ak Ze',
            imgSrc: environment.production ? 'https://drive.google.com/uc?id=1WX9Dxf6RF_jRMUMNLL_7FDO8Lq2mIQk-' : '/assets/dish13.jpg',
            price: 7.00,
            quantity: 1
          },
          {
            dishName: 'Pate',
            imgSrc: environment.production ? 'https://drive.google.com/uc?id=1Yzppix62vZ5Ea4gvutps01BQ-CkcWOqe' : '/assets/dish5.jpg',
            price: 6.00,
            quantity: 2
          },
    ],
    total: 24
}