import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private _http: HttpClient) {
    this.getProducts();
  }
  getProducts() {
    return this._http.get('/api/products');
  }
  getProduct(id, cb) {
    this._http.get('/api/products/' + id).subscribe( data => cb(data));
  }
  delProduct(id) {
    return this._http.delete('/api/products/' + id);
  }
  addProduct(newproduct) {
    return this._http.post('/api/products/', newproduct);
  }
  editProduct(id, product) {
    return this._http.put('/api/products/' + id, product );
  }
}
