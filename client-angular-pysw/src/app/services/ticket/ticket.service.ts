import { HttpClient, HttpParams } from '@angular/common/http';
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
  addTicket = (price:number, category: string, dateSold: string, viewer: string):Observable<any> =>{
    try {
      const body ={price, category, dateSold, viewer}
      console.log("se guarda?");
      return this._http.post("http://localhost:4000/saveTicket", body)
    } catch (error) {
      console.log(error);
      return this._http.get('asdas');
    }
  }
  updateTicket = (id: string, price:number, category: string, dateSold: string, viewer: string) =>{
    try {
      const body ={price, category, dateSold, viewer}
      console.log("se guarda?");
      const url = `http://localhost:4000/editTicket/${id}`;
      return this._http.put(url, body)
    } catch (error) {
      console.log(error);
      return this._http.get('asdas');
    }
  }
}
