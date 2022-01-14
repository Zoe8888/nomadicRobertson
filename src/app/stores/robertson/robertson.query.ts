import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { RobertsonStore, RobertsonState } from './robertson.store';

@Injectable({ providedIn: 'root' })
export class RobertsonQuery extends Query<RobertsonState> {
  about = this.select('about');

  constructor(protected store: RobertsonStore) {
    super(store);
  }

}
