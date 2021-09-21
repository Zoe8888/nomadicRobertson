import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { PaarlStore } from './paarl.store';

@Injectable({ providedIn: 'root' })
export class PaarlService {
  constructor(private paarlStore: PaarlStore, private http: HttpService) {}

  async getAbout() {
    return await this.http
      .request('GET', 'wiki', {
        profile: 'paarl-paarl',
        subject: 'About Paarl',
        format: 'json',
      })
      .then((result) => {
        if (result[0]?.objectList?.length > 0) {
          this.paarlStore.update({ about: result[0].objectList[0] });
        }
      });
  }
}
