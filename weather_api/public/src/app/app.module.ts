import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from './weather.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SanComponent } from './san/san.component';
import { SeattleComponent } from './seattle/seattle.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DcComponent } from './dc/dc.component';
import { DallasComponent } from './dallas/dallas.component';
import { BurbankComponent } from './burbank/burbank.component';

@NgModule({
  declarations: [
    AppComponent,
    SanComponent,
    SeattleComponent,
    ChicagoComponent,
    DcComponent,
    DallasComponent,
    BurbankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
