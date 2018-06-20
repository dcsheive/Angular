import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { listener } from '@angular/core/src/render3/instructions';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  listeners = [];
  constructor(private _httpClient: HttpClient) { }
  attach(component) {
    this.listeners.push(component);
  }
  notify() {
    for (const listen of this.listeners) {
      listen.update();
    }
  }
  create(listing, cb) {
    this._httpClient.post('/api/products/', listing).subscribe(data => cb(data));
  }
  getAll(cb) {
    this._httpClient.get('/api/products/').subscribe(data => cb(data));
  }
  getListing(listing, cb) {
    this._httpClient.get('/api/products/' + listing._id).subscribe(data => cb(data));
  }
  update(listing, cb) {
    this._httpClient.put('/api/products/' + listing._id, listing).subscribe(data => cb(data));
  }
  delete(listing, cb) {
    this._httpClient.delete('/api/products/' + listing._id, listing).subscribe(data => cb(data));
  }
}
