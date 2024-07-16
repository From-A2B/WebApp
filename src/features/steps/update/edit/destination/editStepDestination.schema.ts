import { z } from 'zod';

export const EditStepDestinationSchema = z.object({
  stepId: z.string(),
  lat: z.number(),
  lng: z.number(),
  placeId: z.string(),
});

export type EditStepDestinationSchema = z.infer<
  typeof EditStepDestinationSchema
>;
