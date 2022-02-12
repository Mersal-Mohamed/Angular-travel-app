import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Coordinates } from 'src/app/intefaces/map.interface';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() getPlace = new EventEmitter<Coordinates>();
  @ViewChild('map') map!: GoogleMap;

  SearchPlacesForm!: NgForm;
  location!: any;
  bounds = new google.maps.LatLngBounds();
  place: any;
  autocomplete: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const input = document.getElementById("txtSearchPlaces") as HTMLInputElement;

    this.autocomplete = new google.maps.places.Autocomplete(input);
    this.initAutocomplete()
  }

  initAutocomplete() {
    this.autocomplete.setFields([
      "address_components",
      "geometry",
      "icon",
      "name"
    ]);
    this.autocomplete.setTypes(['address']);

    this.autocomplete.addListener("place_changed", () => {
      this.location = this.autocomplete.getPlace();
      this.getPlace.emit(this.location);
      const place = this.autocomplete.getPlace();
      this.place = place;
      if (!place.geometry) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        document.getElementById('popup')?.classList.add('show');
      } else {
        return;
      }
    });
  }

  closePopUp() {
    document.getElementById('popup')?.classList.remove('show');
  }

}
