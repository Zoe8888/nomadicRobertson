import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ProfileQuery } from './profile.query';
import { ProfileStore } from './profile.store';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  constructor(
    private profileStore: ProfileStore,
    private profileQuery: ProfileQuery,
    private http: HttpService
  ) {}

  async getInfo(uniqueId = 'paarl-paarl') {
    return await this.http
      .request('GET', 'show', {
        uniqueId,
        format: 'json',
      })
      .then((result) => {
        if (result[0]?.objectList?.length > 0) {
          this.profileStore.upsertMany(result[0].objectList);
        }
      });
  }
  async getWiki(profile = 'paarl-paarl') {
    return await this.http
      .request('GET', 'wiki', {
        profile,
        format: 'json',
      })
      .then((result) => result[0]?.objectList[0]);
  }
}
