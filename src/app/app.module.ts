import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExternalAppComponent } from './external-app/external-app.component';

@NgModule({
  declarations: [
    AppComponent,
    ExternalAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    ExternalAppComponent
  ]
})
export class AppModule { }
