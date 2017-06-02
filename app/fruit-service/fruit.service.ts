import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Fruit } from '../fruit';

@Injectable()
export class FruitService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private fruitsUrl = 'api/fruits';  // URL to web api

  constructor(private http: Http) { }

  getFruits(): Promise<Fruit[]> {
    return this.http.get(this.fruitsUrl)
               .toPromise()
               .then(response => response.json().data as Fruit[])
               .catch(this.handleError);
  }


  getFruit(id: number): Promise<Fruit> {
    const url = `${this.fruitsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Fruit)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}