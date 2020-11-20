import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/authenticator-interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = { };
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    console.log('inside login function');
  }

  onNavigateToRegister(): void {
    this.router.navigate(['/auth/register']);
  }

}
