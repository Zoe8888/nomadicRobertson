import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { PromotionStore } from './promotion.store';

@Injectable({ providedIn: 'root' })
export class PromotionService {
  constructor(
    private promotionStore: PromotionStore,
    private http: HttpService
  ) {}

  async getList() {
    return await this.http
      .request('GET', 'blogList', {
        profile: 'tulbagh-promotions',
        format: 'json',
      })
      .then((result) => {
        if (result[0]?.objectList?.length > 0) {
          this.promotionStore.upsertMany(result[0].objectList);
          this.promotionStore.remove(
            (entity) =>
              !result[0].objectList.some(
                (newEntity) => newEntity.id === entity.id
              )
          );
        }
      });
  }
}
