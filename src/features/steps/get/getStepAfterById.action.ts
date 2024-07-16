'use server';

import { authAction } from '@/lib/server-actions/safe-actions';
import { z } from 'zod';
import { GetStepAfterByIdQuery } from './getStepAfterById.query';

const GetStepAfterByIdSchema = z.object({
  stepId: z.string(),
});

export const GetStepAfterByIdAction = authAction(
  GetStepAfterByIdSchema,
  async ({ stepId }, _) => {
    return GetStepAfterByIdQuery({ stepId });
  }
);
