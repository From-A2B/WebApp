import { TransportMode } from '@/types/transportMode.type';
import { z } from 'zod';

export const AddStepSchema = z.object({
  rank: z.number().default(-10000),
  name: z.string().min(3),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  description: z.string().optional(),
  latitude: z.number().refine((value) => value != 0),
  longitude: z.number().refine((value) => value != 0),
  placeId: z.string().min(3),
  transportMode: TransportMode,
});

export type AddStepSchema = z.infer<typeof AddStepSchema>;
