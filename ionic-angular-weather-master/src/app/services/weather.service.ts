import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
              private http: HttpClient,
  ) { }

  getWeatherData(): Observable<any> {
    let lat = -37.840935;
    let lon = 144.946457;
    let apiId = '';
    let queryString = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,alerts&appid=${apiId}`;

    return this.http.get(queryString);

  }

}
