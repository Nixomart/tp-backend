import { Component } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-formaddproduct',
  templateUrl: './formaddproduct.component.html',
  styleUrls: ['./formaddproduct.component.css'],
})
export class FormaddproductComponent {
  newProduct: Product = new Product();

  constructor(private privateService: ProductService) {}
  addProduct = (product: Product) => {
    this.privateService
      .addProduct(
        product.name,
        product.description,
        product.price,
        product.stock,
        product.salient,
        product.img
      )
      .subscribe(
        (result) => {
          console.log('agregado!', result);
          this.newProduct = new Product 
        },
        (error) => {
          console.log('erorrr', error);
        }
      );
  };
}
