import { Component } from '@angular/core';
import { Fruit } from '../fruit';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'fruit-shelf',
  templateUrl: 'app/fruit-shelf/fruit-shelf.component.html',
  styleUrls: ['app/fruit-shelf/fruit-shelf.component.css']
})
export class FruitShelfComponent  { 
  fruits : Fruit[] = [
        {"id":1, "name":"apple", "size":2, "color":"maroon", "stockAmt": 5},
        {"id":2,"name":"orange", "size":2, "color":"orange", "stockAmt": 5},
        {"id":3,"name":"avocado", "size":2, "color":"darkgreen", "stockAmt": 5},
        {"id":4,"name":"peach", "size":2, "color":"lightcoral", "stockAmt": 5},
        {"id":5,"name":"banana", "size":2, "color":"yellow", "stockAmt": 5},
        {"id":6,"name":"tomato", "size":2, "color":"red", "stockAmt": 5},
        {"id":7,"name":"blueberry", "size":2, "color":"darkblue", "stockAmt": 5},
        {"id":8,"name":"strawberry", "size":2, "color":"crimson", "stockAmt": 5},
        {"id":9,"name":"whitegrape", "size":2, "color":"lightgreen", "stockAmt": 5},
        {"id":10,"name":"redgrape", "size":2, "color":"purple", "stockAmt": 5},
        {"id":11,"name":"mango", "size":2, "color":"lightcoral", "stockAmt": 5},
        {"id":12,"name":"lemon", "size":2, "color":"yellow", "stockAmt": 5},
        {"id":13,"name":"lime", "size":2, "color":"green", "stockAmt": 5}
  ];
  fruitTree = this.splitFruits(this.fruits);
  name = 'Angular'; 


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
