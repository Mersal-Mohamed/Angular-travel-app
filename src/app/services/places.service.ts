import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from "ngx-spinner";


@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  xRapidapiKey = environment.xRapidapiKey;
  xRapidapiHost = environment.xRapidapiHost;
  url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

  options = {
    method: 'GET',
    params: {},
    headers: {
      'x-rapidapi-host': this.xRapidapiHost,
      'x-rapidapi-key': this.xRapidapiKey
    }
  };
  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {  
 
  }


  getRestaurants(params: any): Observable<any> {
    this.options.params = {...params}
    this.spinner.show();
    return this.http.get(this.url,this.options).pipe(tap({
      complete: () => {
        this.spinner.hide();
      },
      error: () => {
        this.spinner.hide()
      }
    }))
  }
}
