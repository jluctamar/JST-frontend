import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./surveyor/surveyor.module').then(module => module.SurveyorModule ), pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./authenticator/authenticator.module').then(module => module.AuthenticatorModule ) },
  { path: 'user-management', loadChildren: () => import('./user-management/user-management.module')
                                                          .then(module => module.UserManagementModule ) },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes,  { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
