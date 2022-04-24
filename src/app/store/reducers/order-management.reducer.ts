import { createReducer, on } from '@ngrx/store';
import { initialOrderState } from 'src/app/app-state';
import { addCartItem } from '../actions/order-management.actions';



export const orderReducer = createReducer(initialOrderState,
    on(addCartItem, (state, action) =>  {
        return { 
            ...state,
            cartItems: action.cartItems
        }
    }),
);

