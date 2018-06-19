import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  weather: any;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weather = this.weatherService.getWeatherServe('Burbank', data => {
      this.weather = data;
    });
  }
}
