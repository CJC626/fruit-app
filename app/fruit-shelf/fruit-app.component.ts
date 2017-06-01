import { Component } from '@angular/core';
import { Fruit } from '../fruit';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'cjc-fruits',
  templateUrl: 'app/fruit-shelf/fruit-app.component.html',
  styleUrls: ['app/fruit-shelf/fruit-app.component.css']
})
export class FruitAppComponent  { 
  fruits : Fruit[] = [
    {"name":"apple", "size":2, "color":"maroon"},
    {"name":"orange", "size":2, "color":"orange"},
    {"name":"avocado", "size":2, "color":"darkgreen"},
    {"name":"peach", "size":2, "color":"lightcoral"},
    {"name":"banana", "size":2, "color":"yellow"},
    {"name":"tomato", "size":2, "color":"red"},
    {"name":"blueberry", "size":2, "color":"darkblue"},
    {"name":"strawberry", "size":2, "color":"crimson"},
    {"name":"whitegrape", "size":2, "color":"lightgreen"},
    {"name":"redgrape", "size":2, "color":"purple"}
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
