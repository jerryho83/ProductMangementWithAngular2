import { IProduct } from './../product/product';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
 // private url = '/api/products/products.json';
  constructor(private _http: Http) {}
  //get prouduct map to Observable
  getProducts(): Observable<IProduct[]> {
        return this._http.get('api/products/products.json')
            .map((response: Response) => <IProduct[]> response.json())
            ._catch(this.handleError)
           
    }
     private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
   

}
