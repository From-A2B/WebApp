'use server';

import { authAction } from '@/lib/server-actions/safe-actions';
import { z } from 'zod';
import { GetStepByIdQuery } from './getStepById.query';

const GetStepByIdSchema = z.object({
  stepId: z.string(),
});

export const GetStepByIdAction = authAction(
  GetStepByIdSchema,
  async ({ stepId }, { user }) => {
    return await GetStepByIdQuery({ stepId, userId: user.id });
  }
);
