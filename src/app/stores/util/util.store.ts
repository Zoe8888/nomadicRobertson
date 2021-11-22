import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface UtilState {
  countries: any[];
}

export function createInitialState(): UtilState {
  return {
    countries: [],
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'util' })
export class UtilStore extends Store<UtilState> {
  constructor() {
    super(createInitialState());
  }
}
