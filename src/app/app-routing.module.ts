import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./surveyor/surveyor.module').then(module => module.SurveyorModule ), pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./authenticator/authenticator.module').then(module => module.AuthenticatorModule ) },
  // { path: 'about-us', loadChildren: './about-us/about-us.module#AboutUsModule' },
  // { path: 'bacon', loadChildren: './bacon/bacon.module#BaconModule' },
  // { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
  // { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes,  { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
