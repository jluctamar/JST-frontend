import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { AppState } from './app-state';
import { selectIsLoggedIn } from './store/selectors/auth.selectors';
import { logout } from 'src/app/store/actions/authenticator.actions';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { selectIsNotificationDisplayed } from './store/selectors/notification.selectors';
import { SlideDownUpAnimation } from './shared/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [SlideDownUpAnimation]
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  title = 'Jays-special-trays';
  loggedInUser = false;
  showNotification = false;
  subscriptions: Subscription[] = [];
  // gets the screen size
  // limitation: if screen size changes, variable only updates after page refresh
  isSmallScreen =  (window.innerWidth || document.documentElement.clientWidth) <= 767;

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.subscriptions.push(this.store
      .select(selectIsLoggedIn)
      .subscribe((state) => {
        this.loggedInUser = state;
      }));

      this.subscriptions.push(this.store
        .select(selectIsNotificationDisplayed)
        .subscribe((isDisplayed) => {
          this.showNotification = isDisplayed;
          console.log('###### ', this.showNotification )
        }));
  }

  onLogout(): void {
    this.store.dispatch(logout());
  }

  onSideNavToggle(): void {
    this.sidenav.toggle();
  }

  onGoToHome(): void {
    this.router.navigate(['/']);
  }

  onNavigate( route: string): void {

    // the menu needs to close after every selection
    if(this.isSmallScreen) { // TODO: possibly store the screen size in store   
      this.onSideNavToggle();
    }

    this.router.navigate([route]);
  }

  onNavEvent(event):void {
    this.sidenav.close();
  }

  onResize(event): void {
    this.isSmallScreen =  (window.innerWidth || document.documentElement.clientWidth) <= 767;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach( sub => sub.unsubscribe());
  }
}
