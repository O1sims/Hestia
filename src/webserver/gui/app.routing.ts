
import { RouterModule }                  from '@angular/router';

import { HomeComponent }                 from './home/home.component';
import { SearchComponent }               from './search/search.component';
import { PropertyComponent }             from './property/property.component';
import { NotFoundComponent }             from './not-found/not-found.component';
import { ValuationComponent }            from './valuation/valuation.component';


export const routing = RouterModule.forRoot([
	{ path: '', component: HomeComponent },
	{ path: 'search', component: SearchComponent },
	{ path: 'valuation', component: ValuationComponent },
	{ path: 'not-found', component: NotFoundComponent },
	{ path: 'property/:id', component: PropertyComponent },
	{ path: '**', redirectTo: 'not-found' }
]);
