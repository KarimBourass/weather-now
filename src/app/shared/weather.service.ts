import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { City } from '../models/city';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  baseURL: string = 'http://api.openweathermap.org/data/2.5/weather?q=';
  key: string = '&appid=5bc0cfbc683994db5f4fb25408343c42';

  cities = of('rabat','casablanca','marrakech');
  homeCities: City[];

  constructor(private http:HttpClient) { }


  getWeather(cityName: string){
     return this.http.get<City>(this.baseURL+cityName+this.key);
     
  }



}
