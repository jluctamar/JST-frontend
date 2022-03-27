import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app-state';
import { selectErrorMsg } from 'src/app/store/selectors/notification.selectors';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  subscriptions: Subscription[] = [];
  errorMsg: string;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.subscriptions.push(this.store
      .select(selectErrorMsg)
      .subscribe((errorMsg) => {
        this.errorMsg = errorMsg;
      }));
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach( sub => sub.unsubscribe());
  }

}
