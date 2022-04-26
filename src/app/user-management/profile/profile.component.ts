import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AppState } from 'src/app/app-state';
import { User } from 'src/app/interfaces/authenticator-interfaces';
import { deleteUser, updateUser } from 'src/app/store/actions/user-management.actions';
import { selectLoggedInUser } from 'src/app/store/selectors/auth.selectors';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  currUser: User;
  isUpdatingUser = false;
  subscriptions: Subscription[] = []; 
  profileForm: FormGroup;

  constructor(private store: Store<AppState>, private fb: FormBuilder) {}

  ngOnInit(): void {


    this.subscriptions.push(this.store
    .select(selectLoggedInUser)
    .pipe(filter((state) => !!state))
    .subscribe((user) => {
      this.currUser = user;
      this.profileForm['username'].setValue = this.currUser.username
    }));
    this.formInit();
  }

  formInit(): void {
    this.profileForm = this.fb.group ({
      username: this.currUser.username,
      email: this.currUser.email,
      password: new FormControl('', Validators.required), 
    })
  }

  onUserUpdate(action: string): void {

    if(action === 'update'){
      this.isUpdatingUser = true; // this will display the update fields
    } else if (action === 'confirm'){
      this.isUpdatingUser = false;
      this.store.dispatch(updateUser({user: this.currUser}));
    } else if (action === 'delete') {
      this.store.dispatch(deleteUser({user: this.currUser}));
    } else {
      this.isUpdatingUser = false;
    }
  }


  // TODO: form login, Especially the password change field. Passsword entered should be double checked.
          // COURSE OF ACTION: Add another password field have the use enter the same password in both fields and validates


  ngOnDestroy(): void {
    this.subscriptions.forEach( sub => sub.unsubscribe());
  }
}
