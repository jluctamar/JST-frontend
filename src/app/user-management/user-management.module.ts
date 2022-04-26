import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { UserManagementEffects } from '../store/effects/user-management.effects';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    SharedModule,
    UserManagementRoutingModule,
    EffectsModule.forFeature([UserManagementEffects]),
    // StoreModule.forFeature(AUTH_FEATURE_KEY, authReducer),
  ]
})
export class UserManagementModule { }
