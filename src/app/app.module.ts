import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MapComponent } from './components/map/map.component';
import { ListComponent } from './components/list/list.component';
import { PlaceDetailsComponent } from './components/place-details/place-details.component';
import { StringToNumberPipe } from './pipes/string-to-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapComponent,
    ListComponent,
    PlaceDetailsComponent,
    StringToNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
