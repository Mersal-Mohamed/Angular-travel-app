import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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
  constructor(private http: HttpClient) {  }


  getRestaurants(params: any): Observable<any> {
    this.options.params = {...params}
    return this.http.get(this.url,this.options)
  }
}
