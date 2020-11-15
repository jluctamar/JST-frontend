import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BrowseComponent } from './browse/browse.component';
import { SurveyorRoutingModule } from './surveyor-routing.module';



@NgModule({
  declarations: [BrowseComponent],
  imports: [
    CommonModule,
    SurveyorRoutingModule,
    SharedModule
  ]
})
export class SurveyorModule { }
