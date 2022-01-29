import { Component, Input, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() places: any;

  constructor(private placesService: PlacesService) { }

  ngOnInit(): void {
  }
  ngOnChanges() {
    console.log(this.places)
  }
}
