import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { FruitAppRoutingModule } from './fruit-app-routing.module';

import { FruitAppComponent }  from './fruit-app.component';
import { FruitShelfComponent } from './fruit-shelf/fruit-shelf.component';
import { FruitStockerComponent } from './fruit-stocker/fruit-stocker.component';
import { FruitService } from './fruit-service/fruit.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryFruitService }  from './fruit-service/in-memory-fruit.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryFruitService),
    FruitAppRoutingModule
  ],
  declarations: [
    FruitAppComponent,
    FruitShelfComponent,
    FruitStockerComponent
  ],
  providers: [ FruitService ],
  bootstrap:    [ FruitAppComponent ]
})
export class FruitAppModule { }