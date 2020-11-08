import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './shared/app-routing.module';
import { HeaderComponent } from './layouts/header/header.component';
import { HomeComponent } from './layouts/home/home.component';
import { MaterialModule } from './shared/material.module';
import { WeatherService } from './shared/weather.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { KelvinToCelsiusPipe } from './shared/kelvin-to-celsius.pipe';
import { WeatherDescriptionPipe } from './shared/weather-description.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    KelvinToCelsiusPipe,
    WeatherDescriptionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
