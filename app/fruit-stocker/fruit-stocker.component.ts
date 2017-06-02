import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Fruit }        from '../fruit';
import { FruitService } from '../fruit-service/fruit.service';

@Component({
  selector: 'fruit-stocker',
  templateUrl: './fruit-stocker.component.html',
  styleUrls: [ './fruit-stocker.component.css' ]
})
export class FruitStockerComponent implements OnInit {

  fruit: Fruit;

  constructor(
    private fruitService: FruitService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    console.log(this.route.params);
    this.route.params
      .switchMap((params: Params) => this.fruitService.getFruit(+params['id']))
      .subscribe(fruit => this.fruit = fruit);
    console.log(this.fruit);
  }

  save(): void {
    //this.fruitService.update(this.fruit)
      //.then(() => this.goBack());
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }

}