import { ID } from '@datorama/akita';

export interface Promotion {
  id: ID;
  subject: string;
  publishedByImageUrl: string;
}

export const createPromotion = (params: Partial<Promotion>) =>
  ({} as Promotion);
