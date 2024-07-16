'use server';

import { authAction } from '@/lib/server-actions/safe-actions';
import { z } from 'zod';
import { GetStepOrderQuery } from './getStepOrder.query';

const GetStepOrderSchema = z.object({
  stepId: z.string(),
});

export const GetStepOrderAction = authAction(
  GetStepOrderSchema,
  async ({ stepId }, _) => {
    return await GetStepOrderQuery({ stepId });
  }
);
