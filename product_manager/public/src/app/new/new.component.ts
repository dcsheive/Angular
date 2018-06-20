import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newProduct: any;
  constructor(private _httpService: ProductService, private router: Router) { }
  ngOnInit() {
    this.newProduct = { title: '', price: '', image: ''};
  }
  onSubmit() {
    this._httpService.addProduct(this.newProduct).subscribe(data => {
      this._httpService.notify();
    });
    this.newProduct = { title: '', price: '', image: ''};
    this.router.navigateByUrl('/products');
  }
  goHome() {
    this.router.navigateByUrl('/products');
  }
}
