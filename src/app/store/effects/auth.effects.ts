import { Injectable } from '@angular/core';
import {
  catchError,
  concatMap,
  map,
  mergeMap,
  switchMap,
  tap,
} from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/services/auth.service';
import {
  login,
  loginFailure,
  loginSuccess,
  register,
  registerSuccess,
  registerFailure,
  logout,
} from '../actions/authenticator.actions';
import { clearNotification, loginFailureNotification, registerFailureNotification, updateErrorMsg, updateRespMsg } from '../actions/notification.actions';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { AppState } from 'src/app/app-state';
import { Store } from '@ngrx/store';

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
        return of(updateErrorMsg({ errorMsg: response.respMsg['message'] }))})
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
        return of(updateErrorMsg({ errorMsg: 'User not found, please check credentials.' }))})
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
