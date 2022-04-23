import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderManagementRoutingModule } from './order-management-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './cart/cart.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { orderReducer } from '../store/reducers/order-management.reducer';
import { ORDER_FEATURE_KEY } from '../app.constants';



@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    SharedModule,
    OrderManagementRoutingModule,
    EffectsModule.forFeature([]),
    StoreModule.forFeature(ORDER_FEATURE_KEY, orderReducer),
  ]
})
export class OrderManagementModule { }
