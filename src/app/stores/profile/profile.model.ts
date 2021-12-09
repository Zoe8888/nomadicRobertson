import { ID } from '@datorama/akita';

export interface Profile {
  id: ID;
  uniqueId: string;
  category: string;
}

export function createProfile(params: Partial<Profile>) {
  return {} as Profile;
}
