import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/authenticator-interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  currUser: User;
  isUpdatingUser = false;
  constructor() {}

  ngOnInit(): void {
    this.currUser = {
      firstName: 'admin',
      lastName: 'user',
      username: 'admin',
      password: 'admin',
      email: 'adminUser@gmail.com',
    };
  }

  onUserUpdate(action: string): void {

    if(action === 'update'){
      this.isUpdatingUser = true; // this will display the update fields
    } else if (action === 'confirm'){
      this.isUpdatingUser = false;
      // Should send the appropriate calls to update the user in the database
    } else {
      this.isUpdatingUser = false;
    }
  }


  // TODO: form login, Especially the password change field. Passsword entered should be double checked.
          // COURSE OF ACTION: Add another password field have the use enter the same password in both fields and validates
}
