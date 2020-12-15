import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './store/reducers/authenticator.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {environment} from '../environments/environment'
import { AuthEffects } from './store/effects/auth.effects';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatCheckboxModule,
    StoreModule.forRoot({ }),
    EffectsModule.forRoot([]),
   !environment.production ? StoreDevtoolsModule.instrument() : [],
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
