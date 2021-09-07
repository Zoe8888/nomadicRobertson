import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { WeatherState, WeatherStore } from './weather.store';

@Injectable({ providedIn: 'root' })
export class WeatherQuery extends Query<WeatherState> {
  today = this.select('today');

  constructor(protected store: WeatherStore) {
    super(store);
  }
}
