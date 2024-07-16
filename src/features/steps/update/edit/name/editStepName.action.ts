'use server';

import { authAction } from '@/lib/server-actions/safe-actions';
import { EditStepNameQuery } from './editStepName.query';

import { z } from 'zod';

export const EditStepNameSchema = z.object({
  stepId: z.string(),
  name: z.string().min(3),
});

export type EditStepNameSchema = z.infer<typeof EditStepNameSchema>;

export const EditStepNameAction = authAction(
  EditStepNameSchema,
  async ({ name, stepId }, _) => {
    return await EditStepNameQuery({ name, stepId });
  }
);
