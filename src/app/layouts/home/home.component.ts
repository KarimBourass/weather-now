import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from 'src/app/models/city';
import { WeatherService } from 'src/app/shared/weather.service';
import { map } from 'rxjs/operators'; 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnChanges  {

  @Input() city:string = '0';
  famousCities= true;
  nueroUno: number = -5;
  city$: Observable<City>;
  cities$: Observable<City[]>;

  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
    // this.cities$ = this.weatherService.getHomeCities();
    this.city$ = this.weatherService.getWeather('rabat');
  }
  
  ngOnChanges() {
    if(this.city!= '0')
      this.famousCities =false;
      this.city$ = this.weatherService.getWeather(this.city);
    }
  

}
