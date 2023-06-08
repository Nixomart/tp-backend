export class Ticket {
  id!: number;
  category!: string;
  dateSold?: Date;
  price!: number;
  viewer?: {
    dni?: string;
    name?: string;
    _id?: string
  };

  constructor(dateSold?: Date, id: number = 0,_id: string = '', category: string = '', price: number = 0, viewer: string = '', viewerName: string = '') {
    this.id = id;
    this.category = category;
    this.price = price;
    this.dateSold = dateSold;
    this.viewer = {
      dni: viewer,
      name: viewerName,
      _id: _id,
    };
  }
}