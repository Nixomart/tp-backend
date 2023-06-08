import { Component } from '@angular/core';
import { Ticket } from 'src/app/models/ticket/ticket';
import { TicketService } from 'src/app/services/ticket/ticket.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
})
export class TicketsComponent {
  newTicket: Ticket = new Ticket();
  tickets: Array<Ticket> = [];
  constructor(private ticketService: TicketService) {
    this.getTickts()
  }
  getTickts = () => {
    this.ticketService.getTickets().subscribe((result) => {
      if (Array.isArray(result)) {
        this.tickets = result;
        console.log("tickets del array",this.tickets[0].viewer?.dni);
      } else {
        console.log('Invalid response format. Expected an array.');
        this.tickets = [];
      }
    });
  };
  addTicket = (ticket: Ticket) =>{

  }
}
