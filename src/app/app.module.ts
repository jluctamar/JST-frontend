import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { notificationReducer } from './store/reducers/notification.reducer';
import { NotificationsComponent } from './shared/notifications/notifications.component';
import { NotificationsEffects } from './store/effects/notification.effects';
import { NOTIFICATION_FEATURE_KEY } from './app.constants';





@NgModule({
  declarations: [
    AppComponent, NotificationsComponent
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
    MatIconModule,
    MatRadioModule,
    FormsModule,
    StoreModule.forRoot({ notifications : notificationReducer }),
    EffectsModule.forRoot([NotificationsEffects]),
   !environment.production ? StoreDevtoolsModule.instrument() : [],
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
