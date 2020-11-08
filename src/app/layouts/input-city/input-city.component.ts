import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-city',
  templateUrl: './input-city.component.html',
  styleUrls: ['./input-city.component.scss']
})
export class InputCityComponent implements OnInit {

  
  @Output() cityName: EventEmitter<string> =   new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(contactForm){
    this.cityName.emit(contactForm.value.cityName);
    
  }

}
