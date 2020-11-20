import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BrowseComponent } from './browse/browse.component';
import { SurveyorRoutingModule } from './surveyor-routing.module';
import { ItemDetailsComponent } from './item-details/item-details.component';



@NgModule({
  declarations: [BrowseComponent, ItemDetailsComponent],
  imports: [
    CommonModule,
    SurveyorRoutingModule,
    SharedModule
  ]
})
export class SurveyorModule { }
