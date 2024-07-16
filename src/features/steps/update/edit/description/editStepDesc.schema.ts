import { z } from 'zod';

export const EditStepDescSchema = z.object({
  stepId: z.string(),
  description: z.string(),
});

export type EditStepDescSchema = z.infer<typeof EditStepDescSchema>;
