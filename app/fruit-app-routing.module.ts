import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FruitShelfComponent } from './fruit-shelf/fruit-shelf.component';
import { FruitStockerComponent } from './fruit-stocker/fruit-stocker.component';

const routes: Routes = [
  { path: '', redirectTo: '/shelf', pathMatch: 'full' },
  { path: 'shelf',  component: FruitShelfComponent },
  { path: 'stocker/:id', component: FruitStockerComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class FruitAppRoutingModule {}
