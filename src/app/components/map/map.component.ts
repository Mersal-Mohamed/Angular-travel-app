import { GoogleMap } from '@angular/google-maps';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Output() getPlaces = new EventEmitter<object>();
  @ViewChild('map') map!: GoogleMap;
  @Input() place!: any;

  zoom = 12;
  center: google.maps.LatLngLiteral | any;
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
    scaleControl: true
  }
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [];

  constructor(private placesService: PlacesService) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
      this.zoom = 13;
      this.map.googleMap?.setCenter(this.center)
      this.map.googleMap?.setOptions(this.options)
      let params = {
        bl_latitude: this.map?.googleMap?.getBounds()?.getSouthWest().lat(),
        tr_latitude: this.map?.googleMap?.getBounds()?.getNorthEast().lat(),
        bl_longitude: this.map?.googleMap?.getBounds()?.getSouthWest().lng(),
        tr_longitude: this.map?.googleMap?.getBounds()?.getNorthEast().lng()
      }      
      this.getResturants(params); 
    })


  }

  ngOnChanges() {
    console.log(this.place);
    if(this.place?.geometry) {
      this.map?.googleMap?.panTo(this.place?.geometry?.location);
      this.map?.googleMap?.setZoom(12);
      let params = {
        bl_latitude: this.map?.googleMap?.getBounds()?.getSouthWest().lat(),
        tr_latitude: this.map?.googleMap?.getBounds()?.getNorthEast().lat(),
        bl_longitude: this.map?.googleMap?.getBounds()?.getSouthWest().lng(),
        tr_longitude: this.map?.googleMap?.getBounds()?.getNorthEast().lng()
      }
      this.getResturants(params);
    }

  }

  moveMap(event: google.maps.MapMouseEvent) {
    this.center = (event.latLng?.toJSON());
    this.markerPositions = [];
    let params = {
      bl_latitude: this.map.googleMap?.getBounds()?.getSouthWest().lat(),
      tr_latitude: this.map.googleMap?.getBounds()?.getNorthEast().lat(),
      bl_longitude: this.map.googleMap?.getBounds()?.getSouthWest().lng(),
      tr_longitude: this.map.googleMap?.getBounds()?.getNorthEast().lng()
    }
    this.getResturants(params);
  }

  getResturants(params: any) {
    // this.placesService.getRestaurants(params).subscribe(places => {
    //   let lat;
    //   let lng;
    //   places.data.forEach((place: any) => {
    //     lat = parseFloat(place.latitude);
    //     lng = parseFloat(place.longitude);
    //     this.markerPositions.push({ lat, lng })
    //   });

    //   this.getPlaces.emit(places);
    // })
  }

}
