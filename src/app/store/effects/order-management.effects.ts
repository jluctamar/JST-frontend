import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  switchMap
} from 'rxjs/operators';
import { AppState } from 'src/app/app-state';
import { AuthService } from 'src/app/services/auth.service';
import { addCartItem, removeCartItem, updateOrderTotal } from '../actions/order-management.actions';

@Injectable()
export class OrderManagementEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  addCartItem$ = createEffect (() => {
    return this.actions$.pipe(
      ofType(addCartItem),
      switchMap((action) => {
        let total = 0
        action.cartItems.forEach(item => total = total + (item.price*item.quantity))
        return of(updateOrderTotal({ total: total }))})
    )
  }) 

  removeCartItem$ = createEffect (() => {
    return this.actions$.pipe(
      ofType(removeCartItem),
      switchMap((action) => {
        let total = 0
        action.cartItems.forEach(item => total = total + (item.price*item.quantity))
        return of(updateOrderTotal({ total: total }))})
    )
  }) 

}
