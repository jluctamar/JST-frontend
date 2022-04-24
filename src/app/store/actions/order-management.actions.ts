import { createAction, props } from '@ngrx/store';
import { CartItem } from 'src/app/interfaces/order-management.interfaces';


export const addCartItem = createAction( '[CART] Add Item To Cart', props<{cartItems: CartItem[]}>())