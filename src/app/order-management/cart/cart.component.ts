import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app-state';
import { CartItem } from 'src/app/interfaces/order-management.interfaces';
import { DishImage } from 'src/app/interfaces/surveyor-interfaces';
import { selectCartItems } from 'src/app/store/selectors/order-management.selectors';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
  cartItems: CartItem[];

  columns = [
    {
      columnDef: 'dish',
      header: 'Dish',
      cell: (element: CartItem) => `${element.imgSrc}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: CartItem) => `${element.dishName}`,
    },
    {
      columnDef: 'price',
      header: 'Price',
      cell: (element: CartItem) => `${element.price}`,
    },
    {
      columnDef: 'quantity',
      header: 'Quantity',
      cell: (element: CartItem) => `${element.quantity}`,
    },

  ];


  displayedColumns = this.columns.map(c => c.columnDef);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.subscriptions.push(this.store
      .select(selectCartItems)
      .subscribe((stateCartItems) => {
        this.cartItems = stateCartItems;
      }));

  }



  ngOnDestroy(): void {
    this.subscriptions.forEach( sub => sub.unsubscribe());
  }

}
