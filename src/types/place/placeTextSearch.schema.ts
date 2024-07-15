import { z } from 'zod';

export const PlaceTextSearchSchema = z.object({
  query: z.string(),
});

export type PlaceTextSearchSchema = z.infer<typeof PlaceTextSearchSchema>;
