import { ID } from '@datorama/akita';

export interface Util {
  id: ID;
  country: string;
}

export function createUtil(params: Partial<Util>) {
  return {

  } as Util;
}
