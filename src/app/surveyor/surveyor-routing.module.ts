import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';


const routes: Routes = [
    { path: '', component: BrowseComponent },
    { path: '**', redirectTo: '' }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SurveyorRoutingModule { }