import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface PaarlState {
  about: string;
}

export const createInitialState = (): PaarlState => ({
  about: '',
});

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'paarl' })
export class PaarlStore extends Store<PaarlState> {
  constructor() {
    super(createInitialState());
  }
}
