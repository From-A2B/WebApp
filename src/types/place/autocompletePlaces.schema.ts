import { z } from 'zod';

export const AutocompletePlacesSchema = z.object({
  query: z.string(),
});

export type AutocompletePlacesSchema = z.infer<typeof AutocompletePlacesSchema>;
