import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-san',
  templateUrl: './san.component.html',
  styleUrls: ['./san.component.css']
})
export class SanComponent implements OnInit {
  weather: any;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weather = this.weatherService.getWeatherServe('San Jose', data => {
      this.weather = data;
    });
  }
}
