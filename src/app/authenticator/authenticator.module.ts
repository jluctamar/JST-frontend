import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AUTH_FEATURE_KEY } from '../app.constants';
import { SharedModule } from '../shared/shared.module';
import { AuthEffects } from '../store/effects/auth.effects';
import { authReducer } from '../store/reducers/authenticator.reducer';
import { AuthenticatorRoutingModule } from './authenticator-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AuthenticatorRoutingModule,
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature(AUTH_FEATURE_KEY, authReducer),

    
  ]
})
export class AuthenticatorModule { }
