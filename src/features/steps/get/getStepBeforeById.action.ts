'use server';

import { authAction } from '@/lib/server-actions/safe-actions';
import { z } from 'zod';
import { GetStepBeforeByIdQuery } from './getStepBeforeById.query';

const GetStepBeforeByIdSchema = z.object({
  stepId: z.string(),
});

export const GetStepBeforeByIdAction = authAction(
  GetStepBeforeByIdSchema,
  async ({ stepId }, _) => {
    return GetStepBeforeByIdQuery({ stepId });
  }
);
