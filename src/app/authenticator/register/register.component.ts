import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-state';
import { User } from 'src/app/interfaces/authenticator-interfaces';
import { register } from 'src/app/store/actions/authenticator.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  user: User = {
    email: 'email@email.com',
    firstName: 'Bob',
    lastName: 'bob',
    password: 'password',
    username: 'username',
  };
  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit(): void {}

  onNavigateToLogin(): void {
    this.router.navigate(['/auth/login']);
  }

  onRegister(): void {
    console.log('inside register function');
    this.store.dispatch( register({ user: this.user }));
  }
}
