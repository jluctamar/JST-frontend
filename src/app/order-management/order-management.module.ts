import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderManagementRoutingModule } from './order-management-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    SharedModule,
    OrderManagementRoutingModule
  ]
})
export class OrderManagementModule { }
