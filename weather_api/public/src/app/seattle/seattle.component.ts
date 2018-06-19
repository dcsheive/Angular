import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  weather: any;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weather = this.weatherService.getWeatherServe('Seattle', data => {
      this.weather = data;
    });
  }
}
