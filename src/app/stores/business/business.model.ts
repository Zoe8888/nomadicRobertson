import { ID } from '@datorama/akita';

export interface Business {
  id: ID;
}

export function createBusiness(params: Partial<Business>) {
  return {} as Business;
}
