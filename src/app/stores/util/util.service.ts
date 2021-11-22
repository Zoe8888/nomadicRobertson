import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { UtilStore } from './util.store';

@Injectable({ providedIn: 'root' })
export class UtilService {
  constructor(private utilStore: UtilStore, private http: HttpService) {}

  async getCountryList() {
    await this.http
      .request('GET', 'https://api.first.org/data/v1/countries', null, true)
      .then(({ data }) => {
        this.utilStore.update({ countries: data });
      });
  }
}
