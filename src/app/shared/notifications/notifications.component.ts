import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app-state';
import { hideNotification } from 'src/app/store/actions/notification.actions';
import { selectErrorMsg, selectRespMsg } from 'src/app/store/selectors/notification.selectors';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
  errorMsg: string;
  successMsg: string;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.subscriptions.push(this.store
      .select(selectErrorMsg)
      .subscribe((errorMsg) => {
        this.errorMsg = errorMsg;
      }));

    this.subscriptions.push(this.store
      .select(selectRespMsg)
      .subscribe((respMsg) => {
        this.successMsg = respMsg;
      }));
  }

  onCloseNotification(): void {
    this.store.dispatch( hideNotification());
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach( sub => sub.unsubscribe());
  }

}
