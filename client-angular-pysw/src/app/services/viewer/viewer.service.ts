import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewerService {

  constructor(private _http: HttpClient) { }

  getViewers = ():Observable<any> =>{
    try {
      return this._http.get(
        'http://localhost:4000/allViewers',
      );
    } catch (error) {
      console.log(error);
      return this._http.get('asdas');
    }
  }
  addViewer = (name:string, surname: string, dni: string, email: string):Observable<any> =>{
    try {
      const body ={name, surname, dni, email}
      console.log("se guarda?");
      return this._http.post("http://localhost:4000/addViewer", body)
    } catch (error) {
      console.log(error);
      return this._http.get('asdas');
    }
  }
 /*  addTicket = (price:number, category: string, dateSold: Date, viewer: string):Observable<any> =>{
    try {
      const body ={price, category, dateSold, viewer}
      return this._http.post("http://localhost:4000/saveTicket", body)
    } catch (error) {
      console.log(error);
      return this._http.get('asdas');
    }
  } */
}
