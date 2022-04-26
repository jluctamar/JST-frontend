import { createAction, props } from '@ngrx/store';
import { CartItem } from 'src/app/interfaces/order-management.interfaces';


export const addCartItem = createAction( '[CART] Add Item To Cart', props<{cartItems: CartItem[]}>())
export const removeCartItem = createAction( '[CART] Remove Item From Cart', props<{cartItems: CartItem[]}>())
export const updateOrderTotal = createAction( '[CART] Update Cart Running Total', props<{total: number}>())

export const checkout = createAction( '[CART] Checkout')

