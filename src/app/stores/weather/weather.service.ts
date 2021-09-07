import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';
import { WeatherStore } from './weather.store';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  constructor(private weatherStore: WeatherStore, private http: HttpService) {}

  async getToday() {
    return await this.http
      .request(
        'GET',
        'https://api.openweathermap.org/data/2.5/weather',
        {
          lat: -33.715546,
          lon: 18.966248,
          units: 'metric',
          appid: environment.opweather,
        },
        true
      )
      .then((today) => {
        console.log(today);
        if (today?.main) {
          this.weatherStore.update({ today });
        }
      });
  }

  getForecast() {}
}
