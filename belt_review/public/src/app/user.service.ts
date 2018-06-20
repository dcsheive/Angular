import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpClient: HttpClient) { }
  register(user, cb) {
    this._httpClient.post('/api/users/register', user).subscribe(data => cb(data));
  }
  login(user, cb) {
    this._httpClient.post('/api/users/login', user).subscribe(data => cb(data));
  }
  getUser(id, cb) {
    this._httpClient.get('/api/users/' + id).subscribe(data => cb(data));
  }
  logout(cb) {
    this._httpClient.get('/api/logout').subscribe(data => cb(data));
  }
  getId(cb) {
    this._httpClient.get('/api/user').subscribe(data => cb(data));
  }
}
