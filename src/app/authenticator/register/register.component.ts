import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app-state';
import { User } from 'src/app/interfaces/authenticator-interfaces';
import { SlideDownUpAnimation } from 'src/app/shared/animations';
import { register } from 'src/app/store/actions/authenticator.actions';
import { selectIsNotificationDisplayed } from 'src/app/store/selectors/notification.selectors';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [SlideDownUpAnimation]
})
export class RegisterComponent implements OnInit {
  user: User = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    username: '',
  };
  showNotification = false;
  subscriptions: Subscription[] = [];

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.subscriptions.push(this.store
      .select(selectIsNotificationDisplayed)
      .subscribe((isDisplayed) => {
        this.showNotification = isDisplayed;
      }));
  }

  onNavigateToLogin(): void {
    this.router.navigate(['/auth/login']);
  }

  onRegister(): void {
    this.store.dispatch( register({ user: this.user }));
    this.user = {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      username: '',
    };
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach( sub => sub.unsubscribe());
  }
}
