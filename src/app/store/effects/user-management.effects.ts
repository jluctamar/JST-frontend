import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  catchError,
  map,
  switchMap
} from 'rxjs/operators';
import { AppState } from 'src/app/app-state';
import { UserManagementService } from 'src/app/services/user-management.service';
import { logout } from '../actions/authenticator.actions';
import { updateErrorMsg, updateRespMsg } from '../actions/notification.actions';
import { deleteUser, updateUser, updateUserStateProperty } from '../actions/user-management.actions';

@Injectable()
export class UserManagementEffects {
  constructor(
    private actions$: Actions,
    private userManagementService: UserManagementService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  updateUser$ = createEffect (() => {
    return this.actions$.pipe(
      ofType(updateUser),
      switchMap((action) => 
        this.userManagementService.updateUser(action.user).pipe(
          map((resp) => {
            return updateUserStateProperty({user: resp}) 
          }),
          catchError((resp) => {
            return of(updateErrorMsg({errorMsg: "User Was not updated"})) 
          })
        )
      )
    )
}) 

  deleteUser$ = createEffect (() => {
    return this.actions$.pipe(
      ofType(deleteUser),
      switchMap((action) => 
        this.userManagementService.deleteUser(action.user).pipe(
          map((resp) => {
            this.store.dispatch(logout())
            return (updateRespMsg({respMsg: "User Sucessfuly Deleted"})) 
          }),
          catchError((resp) => {
            return of(updateErrorMsg({errorMsg: "User failed to delete"})) 
          })
        )
      )
    )
}) 




updateUserStateProperty$ = createEffect (() => {
  return this.actions$.pipe(
    ofType(updateUserStateProperty),
    switchMap(() => {
      return of(updateRespMsg({respMsg: "Successfuly Updated User"}))} )
  )
})


}
