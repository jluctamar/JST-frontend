import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app-state';
import { CartItem } from 'src/app/interfaces/order-management.interfaces';
import { DishImage } from 'src/app/interfaces/surveyor-interfaces';
import { addCartItem } from 'src/app/store/actions/order-management.actions';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  
  @Input() dish: DishImage;
  @Output() closeDetails = new EventEmitter();

  subscriptions: Subscription[] = [];
  item: CartItem = {
    dishName : '',
    imgSrc: '',
    price: 0,
    quantity: 0
  }
  quantity = 0;


  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

  }

  onAddToCart():void {

    this.item.dishName = this.dish.title;
    this.item.price = parseInt(this.dish.price);
    this.item.imgSrc = this.dish.imgSrc;
    this.item.quantity = this.quantity;
    this.store.dispatch(addCartItem({cartItem: this.item}));

    this.onClose();
  }


  onClose(): void {
    this.closeDetails.emit();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach( sub => sub.unsubscribe());
  }
}
