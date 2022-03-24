import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import {MatList, MatListModule} from '@angular/material/list'; 
import {MatTooltipModule} from '@angular/material/tooltip'; 
import { FormsModule } from '@angular/forms';
import { NotificationsComponent } from './notifications/notifications.component';



@NgModule({
  declarations: [NotificationsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatListModule,
    MatTooltipModule
  ],
  exports: [
    NotificationsComponent,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatListModule,
    MatTooltipModule

  ]
})
export class SharedModule { }
