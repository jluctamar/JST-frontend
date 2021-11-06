import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app-state';
import { DishImage } from 'src/app/interfaces/surveyor-interfaces';
import { selectIsLoggedIn } from 'src/app/store/selectors/auth.selectors';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  
  @Input() dish: DishImage;
  @Output() closeDetails = new EventEmitter();

  isUserLoggedIn = false;
  subscriptions: Subscription[] = [];


  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.subscriptions.push(this.store
      .select(selectIsLoggedIn)
      .subscribe((state) => {
        this.isUserLoggedIn = state;
      }));
  }


  onClose(): void {
    this.closeDetails.emit();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach( sub => sub.unsubscribe());
  }
}
