import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartModule } from 'angular2-highcharts';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { DataService } from './services/app.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartModule,
    AlertModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
