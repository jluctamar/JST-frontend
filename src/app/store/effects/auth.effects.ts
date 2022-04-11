import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  catchError,
  concatMap,
  map, switchMap,
  tap
} from 'rxjs/operators';
import { AppState } from 'src/app/app-state';
import { AuthService } from 'src/app/services/auth.service';
import {
  login,
  loginFailure,
  loginSuccess, logout, register, registerFailure, registerSuccess
} from '../actions/authenticator.actions';
import { clearNotification, updateErrorMsg, updateRespMsg } from '../actions/notification.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  register$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(register),
      switchMap((action) =>
        this.authService.register(action.user).pipe(
          map((resp) => {
            return registerSuccess({ respMsg: resp });
          }),
          catchError((resp) => { 
            return of(registerFailure({ respMsg: resp.error }))
          })
        )
      )
    );
  });

  registerSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(registerSuccess),
      tap(() => this.router.navigate(['/auth/login'])),
      concatMap((response) => {return of(updateRespMsg({respMsg: response.respMsg['message'] }))}  ));
  });

  
  registerFailure$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(registerFailure),
      switchMap((response) => {
        return of(updateErrorMsg({ errorMsg: response.respMsg['message'] || 'Unknown Error' }))})
    );
  });






  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(login),
      concatMap((action) =>
        this.authService.login(action.username, action.password).pipe(
          map((user) => loginSuccess({ user })),
          catchError((error) => of(loginFailure(error)))
        )
      )
    );
  });

  loginSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginSuccess),
      tap(() => this.router.navigate(['/'])),
      switchMap((response) => {
        return of(updateRespMsg({ respMsg: 'Login Successful.' }))})
        
    );
  });

  loginFailure$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginFailure),
      switchMap((response) => {
        return of(updateErrorMsg({ errorMsg: 'User not found.' }))})
    );
  });

  


  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(logout),
      tap(() => {
        return this.router.navigate(['/'])}),
      map(() => clearNotification())  // Dispatch actions to clear state of previous user info
    )
  });
}
