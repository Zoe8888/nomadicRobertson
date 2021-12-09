import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ProfileStore, ProfileState } from './profile.store';

@Injectable({ providedIn: 'root' })
export class ProfileQuery extends QueryEntity<ProfileState> {
  list = this.selectAll({
    filterBy: (entity) => entity.category.toLowerCase() === 'businesses',
  });

  constructor(protected store: ProfileStore) {
    super(store);
  }

}
