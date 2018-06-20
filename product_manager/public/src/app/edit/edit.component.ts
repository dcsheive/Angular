import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  newProduct: any;
  product: any;
  constructor( private route: ActivatedRoute, private router: Router, private _httpService: ProductService) { }

  ngOnInit() {
    this.newProduct = { title: '', price: '', image: ''};
    this.product = this.getProduct(this.route.params['_value']['id']);
  }
  getProduct(id) {
    this._httpService.getProduct(id, (data) => {
      this.product = data;
    });
  }
  updateProduct(id) {
    this._httpService.editProduct(id, this.newProduct).subscribe(data => {
    });
    this.newProduct = { title: '', price: '', image: ''};
  }
  deleteProduct(id) {
    this._httpService.delProduct(id).subscribe(data => {});
    this.router.navigateByUrl('/products');
  }
}
