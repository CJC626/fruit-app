import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FruitAppComponent }  from './fruit-app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ FruitAppComponent ],
  bootstrap:    [ FruitAppComponent ]
})
export class FruitAppModule { }
