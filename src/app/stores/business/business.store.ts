import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Business } from './business.model';

export interface BusinessState extends EntityState<Business> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'business'
})
export class BusinessStore extends EntityStore<BusinessState> {

  constructor() {
    super();
  }

}
