
import { NgModule }                  from '@angular/core';
import { HttpModule }                from '@angular/http';
import { BrowserModule }             from '@angular/platform-browser';

import { AppComponent }              from './app.component';

import { NavBarComponent }           from './navbar/navbar.component';
import { SearchBarComponent }        from './searchbar/searchbar.component';

import { HomeComponent }             from './home/home.component';
import { SearchComponent }           from './search/search.component';
import { PropertyComponent }         from './property/property.component';
import { NotFoundComponent }         from './not-found/not-found.component';
import { ValuationComponent }        from './valuation/valuation.component';

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
      NavBarComponent,
      SearchComponent,
      NotFoundComponent,
      PropertyComponent,
      SearchBarComponent,
      ValuationComponent
    ],
    bootstrap: [
      AppComponent
    ],
    entryComponents: []
})


export class AppModule {
}
