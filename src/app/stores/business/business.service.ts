import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { BusinessStore } from './business.store';

@Injectable({ providedIn: 'root' })
export class BusinessService {
  constructor(
    private businessStore: BusinessStore,
    private http: HttpService
  ) {}

  async getList(list: string) {
    return await this.http.request('GET', 'profileList', {
      profile: 'paarl-paarl',
      list,
      radius: '20000',
      sort: 'alpha',
      format: 'json',
    });
  }

  async getInfo(uniqueId: any) {
    return await this.http
      .request('GET', 'show', {
        uniqueId,
        format: 'json',
      })
      .then((result) => result[0]?.objectList[0]);
  }
}
