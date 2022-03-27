import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AuthenticatorRoutingModule } from './authenticator-routing.module';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../store/effects/auth.effects';
import { StoreModule } from '@ngrx/store';
import { AUTH_FEATURE_KEY, NOTIFICATION_FEATURE_KEY } from '../app.constants';
import { authReducer } from '../store/reducers/authenticator.reducer';
import { notificationReducer } from '../store/reducers/notification.reducer';



@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AuthenticatorRoutingModule,
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature(AUTH_FEATURE_KEY, authReducer),
    StoreModule.forFeature(NOTIFICATION_FEATURE_KEY, notificationReducer),
    
  ]
})
export class AuthenticatorModule { }
