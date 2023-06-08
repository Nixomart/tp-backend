import { Component } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: Array<Product> = [];
  productS: Array<Product> = [];
  
  selectedProduct: Product = new Product();
  constructor(private productService: ProductService) {
    this.getProducts();
  }
  selectedProducto = (product: Product) => {
    this.selectedProduct = product;
  };
  getProducts = () => {
    this.productService.getProducts().subscribe(
      (result) => {
        console.log('resultado', result);
        this.products = result;
        result.forEach((element: any) => {
          if (element.salient == true) {
            this.productS.push(element);
          }
        });
      },
      (error) => {
        console.log('error getting products', error);
      }
    );
  };
 
}
