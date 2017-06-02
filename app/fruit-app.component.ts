import { Component } from '@angular/core';
import { Fruit } from './fruit';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'cjc-fruits',
  templateUrl: './fruit-app.component.html',
  styleUrls: ['./fruit-app.component.css']
})
export class FruitAppComponent  { 
    title = "Fruit App"
}