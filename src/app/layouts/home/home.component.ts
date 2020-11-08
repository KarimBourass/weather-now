import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from 'src/app/models/city';
import { WeatherService } from 'src/app/shared/weather.service';
import { map } from 'rxjs/operators'; 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nueroUno: number = -5;
  city$: Observable<City>;

  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
    this.city$ = this.weatherService.getWeather();
    console.log(this.city$);
    
  }

}
