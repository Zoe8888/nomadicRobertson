import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ActivityStore } from './activity.store';

@Injectable({ providedIn: 'root' })
export class ActivityService {

  constructor(private activityStore: ActivityStore, private http: HttpService) {
  }

  async getList(profile = 'tulbagh-tourism-tulbagh') {
    return await this.http
      .request('GET', 'statusList', {
        profile,
        events: 'admin-entry' || 'user-entry' || 'blog' || 'event',
        format: 'json',
      })
      .then((result) => {
        if (result[0]?.objectList?.length > 0) {
          this.activityStore.upsertMany(result[0].objectList);
          this.activityStore.remove(
            (entity) =>
              !result[0].objectList.some(
                (newEntity) => newEntity.id === entity.id
              )
          );
        }
      });
  }

  getActivity(id) {
    this.http
      .request('GET', 'status/' + id, {
        format: 'json',
      })
      .then((result) => {
        if (result[0]?.objectList?.length > 0) {
          this.activityStore.upsertMany(result[0].objectList);
        }
      });
  }
}
