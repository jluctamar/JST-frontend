import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-state';
import { User } from 'src/app/interfaces/authenticator-interfaces';
import { login } from 'src/app/store/actions/authenticator.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: ''
   };
  constructor(private router: Router,private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    this.store.dispatch(login({username: this.user.username, password: this.user.password}))
    this.user =  {
      firstName: '',
      lastName: ''
     };
  }

  onNavigateToRegister(): void {
    this.router.navigate(['/auth/register']);
  }

}
