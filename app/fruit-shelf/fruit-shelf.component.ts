import { Component } from '@angular/core';
import { Fruit } from '../fruit';
import { Observable } from 'rxjs/observable';

import { FruitService } from '../fruit-service/fruit.service';

@Component({
  selector: 'fruit-shelf',
  templateUrl: 'app/fruit-shelf/fruit-shelf.component.html',
  styleUrls: ['app/fruit-shelf/fruit-shelf.component.css']
})
export class FruitShelfComponent  { 

  constructor(private fruitService:FruitService){
    
  }

  fruitTree : Array<Array<Fruit>>;
  name = 'Angular'; 

  ngOnInit():void{
    this.fruitService.getFruits().then(fruits => {
      this.fruitTree = this.splitFruits(fruits);
    });
  }

  splitFruits(frs:Fruit[]):Array<Array<Fruit>>{
      let fruitDisp = new Array<Array<Fruit>>();
      let ctr = 0;
      let currRow: Array<Fruit>;
      for(let fruit of frs){
        if(ctr==0){
          currRow = new Array<Fruit>();
        }
        currRow.push(fruit)
        if(ctr==3){
          ctr = 0;
          fruitDisp.push(currRow);
        }else{
          ctr++;
        }
      }
      if (currRow.length > 0) {
          fruitDisp.push(currRow);
      }
      return fruitDisp;
  }

}
