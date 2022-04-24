import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app-state';
import { CartItem } from 'src/app/interfaces/order-management.interfaces';
import { removeCartItem } from 'src/app/store/actions/order-management.actions';
import { selectCartItems, selectCartTotal } from 'src/app/store/selectors/order-management.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy, AfterViewInit {

  subscriptions: Subscription[] = [];
  cartItems: CartItem[] = [];
  cartTotal: number;
  dataSource 

  @ViewChild(MatPaginator) paginator: MatPaginator;


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
    {
      columnDef: 'actions',
      header: 'Actions',
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
      
      this.subscriptions.push(this.store
        .select(selectCartTotal)
        .subscribe((total) => {
          this.cartTotal = total;
        }));
        
      this.dataSource = new MatTableDataSource<CartItem>(this.cartItems);
        

  }

  ngAfterViewInit(): void {
      this.dataSource.paginator = this.paginator;
  };
  

  onRemoveDish(cartItem:CartItem): void {
    this.cartItems = this.cartItems.filter(item=> item.dishName !== cartItem.dishName);
    this.store.dispatch(removeCartItem({cartItems: this.cartItems}))
  }



  ngOnDestroy(): void {
    this.subscriptions.forEach( sub => sub.unsubscribe());
  }

}
