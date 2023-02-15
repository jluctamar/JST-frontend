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
      
      this.formInit(this.currUser);
    }));
  }

  formInit(user: User): void {
    this.profileForm = this.fb.group ({
      username: user.username,
      email: user.email,
      password: new FormControl('', Validators.required), 
    })

  }

  onUserUpdate(action: string): void {
    let updatedUser = {...this.currUser};
    if(action === 'update'){
      this.isUpdatingUser = true; // this will display the update fields
    } else if (action === 'confirm'){
      this.isUpdatingUser = false;
      updatedUser.password =  this.profileForm.get('password').value
      this.store.dispatch(updateUser({user: updatedUser}));
    } else if (action === 'delete') {
      this.store.dispatch(deleteUser({user: updatedUser}));
    } else {
      this.isUpdatingUser = false;
    }
  }

  get username() {
    return this.profileForm.get('username').value
  }
  get email() {
    return this.profileForm.get('email').value
  }
  get password() {
    return this.profileForm.get('password').value
  }


  // TODO: form Validation, Especially the password change field. Passsword entered should be double checked.
          // COURSE OF ACTION: Add another password field have the use enter the same password in both fields and validates


  ngOnDestroy(): void {
    this.subscriptions.forEach( sub => sub.unsubscribe());
  }
}
