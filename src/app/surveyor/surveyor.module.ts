import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BrowseComponent } from './browse/browse.component';
import { SurveyorRoutingModule } from './surveyor-routing.module';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { GridOverviewComponent } from './grid-overview/grid-overview.component';
import { ListOverviewComponent } from './list-overview/list-overview.component';



@NgModule({
  declarations: [BrowseComponent, ItemDetailsComponent, GridOverviewComponent, ListOverviewComponent],
  imports: [
    CommonModule,
    SurveyorRoutingModule,
    SharedModule
  ]
})
export class SurveyorModule { }
