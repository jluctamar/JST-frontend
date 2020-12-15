import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { AppState } from './app-state';
import { selectIsLoggedIn } from './store/selectors/auth.selectors';
import { logout } from 'src/app/store/actions/authenticator.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  title = 'Jays-special-trays';
  loggedInUser = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select(selectIsLoggedIn)
      .pipe(filter((state) => !!state))
      .subscribe((state) => {
        console.log('##### Result ', state);
        this.loggedInUser = state;
      });
  }

  onLogout(): void {
    this.store.dispatch(logout());
  }

  onSideNavToggle(): void {
    this.sidenav.toggle();
  }
}
