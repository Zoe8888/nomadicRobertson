import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface RobertsonState {
  about: string;
}

export const createInitialState = (): RobertsonState => ({
  about: '',
});

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'robertson' })
export class RobertsonStore extends Store<RobertsonState> {
  constructor() {
    super(createInitialState());
  }
}
