import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { BusinessStore } from './business.store';

@Injectable({ providedIn: 'root' })
export class BusinessService {
  constructor(
    private businessStore: BusinessStore,
    private http: HttpService
  ) {}

  async getList(list) {
    return await this.http.request('GET', 'profileList', {
      profile: 'paarl-paarl',
      list,
      radius: '20000',
      sort: 'alpha',
      format: 'json',
    });

    // .then((result) => {
    //   if (result[0]?.objectList?.length > 0) {
    //     this.businessStore.upsertMany(result[0].objectList);
    //     this.businessStore.remove(
    //       (entity) =>
    //         !result[0].objectList.some(
    //           (newEntity) => newEntity.id === entity.id
    //         )
    //     );
    //   }
    // });
  }
}
