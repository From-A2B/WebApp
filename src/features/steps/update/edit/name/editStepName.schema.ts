import { z } from 'zod';

export const EditStepNameSchema = z.object({
  stepId: z.string(),
  name: z.string().min(3),
});

export type EditStepNameSchema = z.infer<typeof EditStepNameSchema>;
