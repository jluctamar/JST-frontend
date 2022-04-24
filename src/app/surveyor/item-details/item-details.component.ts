import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app-state';
import { CartItem } from 'src/app/interfaces/order-management.interfaces';
import { DishImage } from 'src/app/interfaces/surveyor-interfaces';
import { addCartItem } from 'src/app/store/actions/order-management.actions';
import { selectCartItems } from 'src/app/store/selectors/order-management.selectors';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  
  @Input() dish: DishImage;
  @Output() closeDetails = new EventEmitter();

  subscriptions: Subscription[] = [];
  cartItems: CartItem[] = []
  newCartItem: CartItem = {
    dishName : '',
    imgSrc: '',
    price: 0,
    quantity: 0
  }
  quantity = 0;


  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.subscriptions.push(this.store
      .select(selectCartItems)
      .subscribe((items) => {
        this.cartItems = items;
      }));
  }

  onAddToCart():void {

    this.newCartItem.dishName = this.dish.title;
    this.newCartItem.price = parseInt(this.dish.price);
    this.newCartItem.imgSrc = this.dish.imgSrc;
    this.newCartItem.quantity = this.quantity;
    
    if (!this.checkForDuplicates(this.newCartItem)) {
      this.cartItems = [...this.cartItems, this.newCartItem ]
    }
    
    this.store.dispatch(addCartItem({cartItems: this.cartItems}));

    this.onClose();
  }


  onClose(): void {
    this.closeDetails.emit();
  }

  checkForDuplicates(newDish: CartItem): boolean {
    let itemCopy: CartItem = null;
    let hasDuplicate = false;
    this.cartItems.forEach(item => {
      if (newDish.dishName === item.dishName) {
        
        // update quantity 
        itemCopy = {...item};
        itemCopy['quantity'] = item.quantity + newDish.quantity

        this.cartItems = this.cartItems.filter(item=> item.dishName !== itemCopy.dishName);
        this.cartItems.push(itemCopy)
        hasDuplicate =  true;
      }
    })
    return hasDuplicate;
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach( sub => sub.unsubscribe());
  }
}
