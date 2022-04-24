import { createReducer, on } from '@ngrx/store';
import { initialOrderState } from 'src/app/app-state';
import { addCartItem, removeCartItem, updateOrderTotal } from '../actions/order-management.actions';



export const orderReducer = createReducer(initialOrderState,
    on(addCartItem, (state, action) =>  {
        return { 
            ...state,
            cartItems: action.cartItems
        }
    }),
    on(removeCartItem, (state, action) =>  {
        return { 
            ...state,
            cartItems: action.cartItems
        }
    }),
    on(updateOrderTotal, (state, action) =>  {
        return { 
            ...state,
            total: action.total
        }
    }),

);

