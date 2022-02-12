import { Coordinates } from 'src/app/intefaces/map.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'travel-app';
  places!: any;
  location!: Coordinates;

  getPlaces(places: object) {
    this.places = places;
  }

  getPlace(place: Coordinates) {    
    this.location = place;
  }
}
