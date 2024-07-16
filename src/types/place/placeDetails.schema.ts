import { z } from 'zod';

export const PlaceDetailsSchema = z.object({
  placeId: z.string(),
});

export type PlaceDetailsSchema = z.infer<typeof PlaceDetailsSchema>;
