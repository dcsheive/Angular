import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  constructor(private _httpService: ProductService) { }

  ngOnInit() {
    this.getProductsFromService();
  }
  getProductsFromService() {
    const observable = this._httpService.getProducts();
    observable.subscribe(data => {
      this.products = data;
    });
  }

}
