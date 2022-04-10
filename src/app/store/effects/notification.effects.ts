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
import { registerFailureNotification, showNotification, updateErrorMsg, updateRespMsg } from '../actions/notification.actions';

@Injectable()
export class NotificationsEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  updateErrorMsg$ = createEffect (() => {
    return this.actions$.pipe(
      ofType(updateErrorMsg),
      switchMap(() => {
        return of(showNotification())} )
    )
  }) 

  updateRespMsg$ = createEffect (() => {
    return this.actions$.pipe(
      ofType(updateRespMsg),
      switchMap(() => {
        return of(showNotification())} )
    )
  })  

}
