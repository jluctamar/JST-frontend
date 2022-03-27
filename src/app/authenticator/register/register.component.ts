import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppState } from 'src/app/app-state';
import { User } from 'src/app/interfaces/authenticator-interfaces';
import { SlideDownUpAnimation } from 'src/app/shared/animations';
import { register } from 'src/app/store/actions/authenticator.actions';
import { selectErrorMsg } from 'src/app/store/selectors/notification.selectors';

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
      .select(selectErrorMsg)
      .subscribe((errorMsg) => {
        // WORK IN PROGRESS: The notification component should appear every time the value of the error state message updates
        this.showNotification = true;
      }));
  }

  onNavigateToLogin(): void {
    // this.router.navigate(['/auth/login']);
    this.showNotification = !this.showNotification; // temporary
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
