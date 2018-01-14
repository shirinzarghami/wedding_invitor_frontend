import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import {  WeddingInviterFormComponent } from './WeddingInviter-form/weddingInviter-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    WeddingInviterFormComponent
  
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
