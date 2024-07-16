import { z } from 'zod';

export const ReverseGeocodeSchema = z.object({
  lat: z.number(),
  lng: z.number(),
});

export type ReverseGeocodeSchema = z.infer<typeof ReverseGeocodeSchema>;
