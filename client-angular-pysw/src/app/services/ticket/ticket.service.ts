import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private _http: HttpClient) { }

  getTickets = ():Observable<any> =>{
    try {
      return this._http.get(
        'http://localhost:4000/getTickets',
      );
    } catch (error) {
      console.log(error);
      return this._http.get('asdas');
    }
  }
  addTicket = (price:number, category: string, dateSold: Date, viewer: string):Observable<any> =>{
    try {
      const body ={price, category, dateSold, viewer}
      return this._http.post("http://localhost:4000/saveTicket", body)
    } catch (error) {
      console.log(error);
      return this._http.get('asdas');
    }
  }
}
