import { Component } from '@angular/core';
import { DivisasService } from 'src/app/services/divisas/divisas.service';

@Component({
  selector: 'app-divisas',
  templateUrl: './divisas.component.html',
  styleUrls: ['./divisas.component.css'],
})
export class DivisasComponent {
  monedaOrigen: string = '';
  cantidadOrigen: number = 0;
  monedaDestino: string = '';
  emailCliente: string = '';
  emailClienteToFind: string = '';
  convertido: number = 0;
  transactions: Array<any> = [];
  sourceCurrency: string = ''
  currencyToConvert: string = ''

  constructor(private divisasService: DivisasService) {
    this.getTransactions();
  }
  handleDvisas = () => {
    this.divisasService
      .convertDivisas(
        this.monedaOrigen,
        this.cantidadOrigen,
        this.emailCliente,
        this.monedaDestino
      )
      .subscribe(
        (result) => {
          this.convertido = result.result;
        },
        (err) => console.log(err)
      );
  };
  getTransactions = () => {
    this.divisasService.getTransactions().subscribe(
      (result) => {
        if (Array.isArray(result)) {
          console.log(result);
          this.transactions = result;
        } else {
          console.log('Invalid response format. Expected an array.');
          this.transactions = [];
        }
      },
      (err) => console.log(err)
    );
  };
  getEmail = () =>{
    this.divisasService.getTransactionByEmail(this.emailClienteToFind).subscribe((result)=>{
      if (Array.isArray(result)) {
        console.log(result);
        this.transactions = result;
      } else {
        console.log('Invalid response format. Expected an array.');
        this.transactions = [];
      }
    },)
  }
  getorigin = () =>{
    this.divisasService.getTransactionX(this.sourceCurrency, this.currencyToConvert).subscribe((result)=>{
      if (Array.isArray(result)) {
        console.log(result);
        this.transactions = result;
      } else {
        console.log('Invalid response format. Expected an array.');
        this.transactions = [];
      }
    },)
  }
}
