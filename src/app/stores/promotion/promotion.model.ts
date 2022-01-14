import { ID } from '@datorama/akita';

export interface Promotion {
  id: ID;
  subject: string;
  publishedByImageUrl: string;
  uniqueId: string;
}

export const createPromotion = (params: Partial<Promotion>) =>
  ({} as Promotion);
