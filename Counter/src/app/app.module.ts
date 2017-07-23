import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdInputModule,MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import 'hammerjs';
import { CounterComponent } from './counter/counter.component';
import { CounterCreaterComponent } from './counter-creater/counter-creater.component';
import { CounterServerComponent } from './counter-server/counter-server.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterCreaterComponent,
    CounterServerComponent
  ],
  imports: [
    ReactiveFormsModule,
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }
