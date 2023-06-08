export class Product {
    id!: number;
    name!: string;
    description!: string;
    price!: number;
    stock!: number;
    img!: string;
    salient!: boolean 
    constructor(id: number= 0, name: string= '', description:string= '', price:number= 0,stock:number= 0, img: string = '', salient: boolean = false){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.img = img;
        this.salient = salient
    }
}
