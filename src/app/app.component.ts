import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Input() citytoChild: string='0';


  cityName(city){
     this.citytoChild = city;
  }
}
