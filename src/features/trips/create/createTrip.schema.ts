import { z } from 'zod';

export const CreateTripSchema = z.object({
  title: z
    .string()
    .min(3, 'The title must contain at least 3 characters')
    .max(50, 'The title must contain a maximum of 50 characters'),
  description: z
    .string()
    .max(500, 'The title must contain a maximum of 500 characters')
    .optional(),
  startDate: z.date(),
});

export type CreateTripSchema = z.infer<typeof CreateTripSchema>;
