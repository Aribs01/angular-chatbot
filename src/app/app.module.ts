import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromApp from './@core/stores/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { ChatEffects } from './@core/stores/chat/chat.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([
      ChatEffects
    ]),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({
          logOnly: environment.production,
        }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
