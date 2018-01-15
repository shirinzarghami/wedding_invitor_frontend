import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import {  WeddingInviterFormComponent } from './WeddingInviter-form/weddingInviter-form.component';
import { WeddingInviterService } from './wedding-inviter.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    WeddingInviterFormComponent
  
  ],
  providers: [WeddingInviterService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
