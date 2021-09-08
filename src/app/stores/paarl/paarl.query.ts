import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { PaarlState, PaarlStore } from './paarl.store';

@Injectable({ providedIn: 'root' })
export class PaarlQuery extends Query<PaarlState> {
  about = this.select('about');

  constructor(protected store: PaarlStore) {
    super(store);
  }
}
