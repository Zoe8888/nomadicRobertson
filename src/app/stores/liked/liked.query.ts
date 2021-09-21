import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { LikedStore, LikedState } from './liked.store';

@Injectable({ providedIn: 'root' })
export class LikedQuery extends QueryEntity<LikedState> {

  constructor(protected store: LikedStore) {
    super(store);
  }

}
