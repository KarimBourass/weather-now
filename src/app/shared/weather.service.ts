import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from '../models/city';
import { map } from 'rxjs/operators'; 


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  baseURL: string = 'http://api.openweathermap.org/data/2.5/weather?q=';
  key: string = '&appid=5bc0cfbc683994db5f4fb25408343c42';
  constructor(private http:HttpClient) { }


  getWeather(){
     return this.http.get<City>(this.baseURL+'fes'+this.key);
     
  }


}
