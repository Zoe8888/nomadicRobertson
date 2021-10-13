import { ID } from '@datorama/akita';

export interface Profile {
  id: ID;
}

export function createProfile(params: Partial<Profile>) {
  return {} as Profile;
}
