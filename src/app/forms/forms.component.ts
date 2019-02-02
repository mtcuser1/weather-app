import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Time } from '@angular/common';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  query = 'Manila';
  vtemp: number;
  vname: string;
  vcountry: string;
  vclouds: string;
  vwind: string;
  vspeed: string;
  vpressure: string;
  vhumidity: string;
  vsunrise: Time;
  vsunset: Time;
  

  constructor(private WeatherService: WeatherService) { }

  ngOnInit() {
    this.loadWeatherDetails();
  }

  loadWeatherDetails() {
    this.WeatherService.getWeather(this.query)
     .subscribe((data: any) => {
      console.log(data);
       this.vname = data.name;
       this.vcountry = data.sys.country;
       this.vclouds = data.weather[0].description;
       this.vwind = data.wind.deg;
       this.vspeed = data.wind.speed;
       this.vpressure = data.main.pressure;
       this.vhumidity = data.main.humidity;
       this.vsunrise = data.sys.sunrise;
       this.vsunset = data.sys.sunset;
       this.vtemp = data.main.temp - 273.15;
     });

  }
}
