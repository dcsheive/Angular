import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apikey = 'e6412d609af168ecd57717d365cc9e99';
  constructor(private _http: HttpClient) { }
  getWeatherServe(city, cb) {
    this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&apikey=' + this.apikey).subscribe(data => cb(data));
  }
}
