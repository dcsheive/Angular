import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  weather: any;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weather = this.weatherService.getWeatherServe('dallas', data => {
      this.weather = data;
    });
  }
}
