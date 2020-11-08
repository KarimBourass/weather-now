import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kelvinToCelsius'
})
export class KelvinToCelsiusPipe implements PipeTransform {

  transform(tempValue: number): number {
    var temperature = tempValue - 273;
    return +temperature.toFixed(2);
  }

}
