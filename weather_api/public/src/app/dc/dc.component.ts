import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
  weather: any;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weather = this.weatherService.getWeatherServe('Washington', data => {
      this.weather = data;
    });
  }
}
