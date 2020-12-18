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
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  register$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(register),
      switchMap((action) =>
        this.authService.register(action.user).pipe(
          map((resp) => {
            return registerSuccess({ respMsg: resp });
          }),
          catchError((resp) => of(registerFailure({ respMsg: resp.error })))
        )
      )
    );
  });

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(login),
      concatMap((action) =>
        this.authService.login(action.username, action.password).pipe(
          map((user) => loginSuccess({ user })),
          catchError((error) => of(loginFailure(error.user)))
        )
      )
    );
  });

  loginSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginSuccess),
      tap(() => this.router.navigate(['/']))
    );
  },  { dispatch: false });
  
  registerSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(registerSuccess),
      tap(() => this.router.navigate(['/auth/login']))
    );
  },  { dispatch: false });

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(logout),
      tap(() => {
        console.log('####### testing......');
        return this.router.navigate(['/'])}),
      map(() => { return {type: 'NO_ACTION'}; }) // Without this "no action" Action the tap above causes a continual loop.
    )
  });
}
