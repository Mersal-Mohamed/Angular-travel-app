import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.scss']
})
export class PlaceDetailsComponent implements OnInit {
  @Input() place!: any;
    
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChange() {
    console.log(this.place)
  }

}
