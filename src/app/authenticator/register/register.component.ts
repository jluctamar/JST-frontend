import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/authenticator-interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  user: User = { };
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onNavigateToLogin(): void {
    this.router.navigate(['/auth/login']);
  }

  onRegister(): void {
    console.log('inside register function');
  }

}
