import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts = (): Observable<any> => {
    try {
      return this.http.get('http://localhost:4000/');
    } catch (error) {
      console.log(error);
      return this.http.get('');
    }
  };
  addProduct = (
    name: string,
    description: string,
    price: number,
    stock: number,
    salient: boolean,
    img: string
  ): Observable<any> => {
    try {
      const body = {
        name,
        description,
        price,
        stock,
        salient,
        img,
      };

      return this.http.post('http://localhost:4000/saveProduct', body);
    } catch (error) {
      console.log(error);
      return this.http.get('');
    }
  };
}
