import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { BusinessStore, BusinessState } from './business.store';

@Injectable({ providedIn: 'root' })
export class BusinessQuery extends QueryEntity<BusinessState> {

  constructor(protected store: BusinessStore) {
    super(store);
  }

}
