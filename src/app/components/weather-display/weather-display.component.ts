import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/weather.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.scss']
})
export class WeatherDisplayComponent implements OnInit {

  cityName:string = 'Centurion';
  weatherData?: WeatherData;

  constructor(
    private weatherService: WeatherService
  ) {

  }

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName:string){
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (res) => {
        this.weatherData =res;
        console.log(res);
      }
    })
  }
}
