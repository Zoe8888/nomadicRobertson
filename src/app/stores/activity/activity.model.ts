import { ID } from '@datorama/akita';

export interface Activity {
  id: ID;
  imageUrl: string;
  messageText: string;
  relativeText: string;
  user: string;
  uniqueId: string;
}

export function createActivity(params: Partial<Activity>) {
  return {

  } as Activity;
}
