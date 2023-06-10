export class Ticket {
  id!: number;
  category!: string;
  dateSold?: string;
  price!: number;
  viewer?: {
    dni?: string;
    name?: string;
    _id?: string
  };
  espectador: string
  
  constructor(espectador: string = '',dateSold?: string, id: number = 0,_id: string = '', category: string = '', price: number = 0, viewer: string = '', viewerName: string = '') {
    this.id = id;
    this.category = category;
    this.price = price;
    this.dateSold = dateSold;
    this.viewer = {
      dni: viewer,
      name: viewerName,
      _id: _id,
    };
    this.espectador = espectador
  }
  
}