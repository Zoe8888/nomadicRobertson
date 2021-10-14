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

  async getList(list: string) {
    return await this.http.request('GET', 'profileList', {
      profile: 'paarl-paarl',
      list,
      radius: '20000',
      sort: 'alpha',
      items: '200',
      format: 'json',
    });
  }

  async getInfo(uniqueId = 'paarl-paarl') {
    return await this.http
      .request('GET', 'show', {
        uniqueId,
        format: 'json',
      })
      .then((result) => {
        if (result[0]?.objectList?.length > 0) {
          this.profileStore.upsertMany(result[0].objectList);
          return result[0].objectList[0];
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

  async membership({ teamMemberId, uniqueId }) {
    const action = teamMemberId ? 'leave' : 'join';
    console.log(action);
    this.profileStore.setLoading(true);
    await this.http
      .request('POST', 'profileMembership', {
        action,
        profile: uniqueId,
        format: 'json',
      })
      .then((result) => {
        if (result[0].status.code === 0) {
          this.getInfo(uniqueId);
        }
      });
  }
}
