import { z } from 'zod';

export const AddStepSchema = z.object({
  rank: z.number().default(-10000),
  name: z.string(),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  description: z.string().optional(),
  latitude: z
    .string()
    .transform((val) => Number(`${val}`.replace(',', '.')))
    .pipe(z.number()),
  longitude: z
    .string()
    .transform((val) => Number(`${val}`.replace(',', '.')))
    .pipe(z.number()),
});

export type AddStepSchema = z.infer<typeof AddStepSchema>;
