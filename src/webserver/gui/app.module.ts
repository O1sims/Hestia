
import { NgModule }                  from '@angular/core';
import { HttpModule }                from '@angular/http';
import { BrowserModule }             from '@angular/platform-browser';

import { AppComponent }              from './app.component';

import { NavBarComponent }           from './navbar/navbar.component';

import { HomeComponent }             from './home/home.component';

import { routing }                   from './app.routing';


@NgModule({
    imports: [
      routing,
      BrowserModule,
      HttpModule
    ],
    declarations: [
      AppComponent,
      HomeComponent,
      NavBarComponent
    ],
    bootstrap: [
      AppComponent
    ],
    entryComponents: []
})


export class AppModule {
}
