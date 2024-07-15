'use server';

import { authAction } from '@/lib/server-actions/safe-actions';
import { z } from 'zod';
import { DeleteStepQuery } from './deleteStep.query';

const deleteStepSchema = z.object({
  stepId: z.string(),
});

export const deleteStepAction = authAction(
  deleteStepSchema,
  async ({ stepId }, _) => await DeleteStepQuery({ stepId })
);
