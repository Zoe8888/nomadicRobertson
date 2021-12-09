import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Activity } from './activity.model';

export interface ActivityState extends EntityState<Activity> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'activity'
})
export class ActivityStore extends EntityStore<ActivityState> {

  constructor() {
    super();
  }

}
