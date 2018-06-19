import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  weather: any;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weather = this.weatherService.getWeatherServe('Chicago', data => {
      this.weather = data;
    });
  }
}

