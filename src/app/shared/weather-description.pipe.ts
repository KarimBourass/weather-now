import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherDescription'
})
export class WeatherDescriptionPipe implements PipeTransform {

  transform(weatherDescription: string):string {
    switch(weatherDescription) { 
      case 'Thunderstorm': { 
      return 'http://openweathermap.org/img/wn/11d@2x.png';
      } 
      case 'Drizzle': { 
      return 'http://openweathermap.org/img/wn/09d@2x.png';
      } 
      case 'Rain': { 
      return 'http://openweathermap.org/img/wn/10d@2x.png';
      } 
      case 'Snow': { 
      return 'http://openweathermap.org/img/wn/13d@2x.png';
      } 
      case 'Clear': { 
      return 'http://openweathermap.org/img/wn/01d@2x.png';
      } 
      case 'Clouds': { 
      return 'http://openweathermap.org/img/wn/02d@2x.png';
      } 
      case 'Mist':
      case 'Smoke':
      case 'Haze':
      case 'Fog':
      case 'Sand':
      case 'Dust':
      case 'Ash':
      case 'Squall':
      case 'Tornado': {
        return 'http://openweathermap.org/img/wn/50d@2x.png';
      }
      
   } 
  }

}
