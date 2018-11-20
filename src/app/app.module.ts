
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';

import { FormsService } from './services/forms-poster.service';



@NgModule ({

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],

  declarations: [
    AppComponent,
    FormsComponent
  ],

  bootstrap: [
    AppComponent
  ],

  providers: [
    FormsService
  ]
})

export class AppModule {}
