import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [],
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
    MatTooltipModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule
  ],
  exports: [
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
    MatTooltipModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule



  ]
})
export class SharedModule { }
