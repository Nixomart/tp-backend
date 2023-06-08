import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DivisasService {
  constructor(private _http: HttpClient) {
  }

  public convertDivisas(
    monedaOrigen: string,
    cantidadOrigen: number,
    emailCliente: string,
    monedaDestino: string
  ): Observable<any> {
    try {
      const body = {
        monedaOrigen,
        cantidadOrigen,
        emailCliente,
        monedaDestino,
      };
      return this._http.post(
        'http://localhost:4000/addTransaction',
        body
      );
    } catch (error) {
      console.log(error);
      return this._http.get('asdas');
    }
  }
  getTransactions = () =>{
    try {
      return this._http.get(
        'http://localhost:4000/getTransactions',
      );
    } catch (error) {
      console.log(error);
      return this._http.get('asdas');
    }
  }
  getTransactionByEmail = (email:string) =>{
    try {
      return this._http.get(
        'http://localhost:4000/getTransactions/'+email,
      );
    } catch (error) {
      console.log(error);
      return this._http.get('asdas');
    }
  }
  getTransactionX = (origin:string, to:string) =>{
    try {
      return this._http.get(
        'http://localhost:4000/getTransactions/'+origin +"/"+to,
      );
    } catch (error) {
      console.log(error);
      return this._http.get('asdas');
    }
  }
}
