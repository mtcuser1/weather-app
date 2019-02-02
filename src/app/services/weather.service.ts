import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherUrl ='https://api.openweathermap.org/data/2.5/weather' ;
  apiKey = '981e526ff9ed9f8c9ffceebbe861f18d';

  
  constructor(private http: HttpClient) { }

  getWeather(query: string) {
    return this.http.get(this.weatherUrl+'?q='+query+'&appid='
      + this.apiKey);

  }
}
