import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { Module1Module } from "./module1/module1.module";
import { Module2Module } from "./module2/module2.module";
import { DateComponent } from './components/date/date.component';
import { FormsModule } from "@angular/forms";
import { CounterService } from "./core/counter.service";
import { LoggerService } from "./core/logger.service";

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    Module1Module,
    FormsModule,
    Module2Module
  ],
  providers: [CounterService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
