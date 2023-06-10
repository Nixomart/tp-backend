import { Component } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Ticket } from 'src/app/models/ticket/ticket';
import { TicketService } from 'src/app/services/ticket/ticket.service';
import { ViewerService } from 'src/app/services/viewer/viewer.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
})
export class TicketsComponent {
  newTicket: Ticket = new Ticket();
  tickets: Array<Ticket> = [];
  viewers: Array<any> = [];
  ticketu: Ticket = new Ticket();
  ticketSelected: Ticket = new Ticket();
  constructor(
    private ticketService: TicketService,
    private viewerService: ViewerService
  ) {
    this.getTickts();
    this.getViewerss();
  }
  ticketsLenght = () =>{
    return this.tickets.length
  }
  ticketsEstranjero = () =>{
    return this.tickets.filter((element) => element.category === "extranjero").length
  }
  ticketsLocal = () =>{
    return this.tickets.filter((element) => element.category === "local").length
  }
  getTickts = () => {
    this.ticketService.getTickets().subscribe((result) => {
      console.log(result);

      if (Array.isArray(result)) {
        this.tickets = [];
        result.forEach((element) => {
          this.ticketu = new Ticket();
          this.ticketu.id = element._id;
          this.ticketu.category = element.category;
          this.ticketu.dateSold = element.dateSold;
          this.ticketu.price = element.price;
          this.ticketu.viewer = element.viewer;
          this.ticketu.espectador = element.viewer._id;
          this.tickets.push(this.ticketu);
        });
        console.log(this.tickets);
      } else {
        this.tickets = [];
      }
    });
  };
  addTicket = (ticket: Ticket) => {
    try {
      if (
        ticket.price &&
        ticket.category &&
        ticket.dateSold &&
        ticket.espectador
      ) {
        this.ticketService
          .addTicket(
            ticket.price,
            ticket.category,
            ticket.dateSold.toString(),
            ticket.espectador
          )
          .subscribe(
            (result) => {
              console.log('agregado!', result);
              this.newTicket = new Ticket();
              this.getTickts();
            },
            (error) => console.log(error)
          );
      } else {
        console.log('Error: Some required values are undefined');
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  getViewerss = () => {
    try {
      this.viewerService.getViewers().subscribe((result) => {
        this.viewers = result;
      });
    } catch (error) {}
  };
  handleEdit = (tickett: Ticket) => {
    this.ticketSelected = Object.assign({}, tickett); // o this.ticketSelected = { ...tickett };
    console.log('nuevo', this.ticketSelected);
    console.log('editado', this.ticketSelected);
  };
  handleDeleteTicket = (id: number) => {};
  handleSaveEdit = (tickettt: Ticket) => {
    console.log(tickettt.id);
    console.log(tickettt);
    this.ticketService
      .updateTicket(
        tickettt.id.toString(),
        tickettt.price,
        tickettt.category,
        tickettt.dateSold!.toString(),
        tickettt.espectador
      )
      .subscribe(
        (result) => {
          console.log(result);
          this.getTickts();
        },
        (err) => console.log(err)
      );

  };

}
