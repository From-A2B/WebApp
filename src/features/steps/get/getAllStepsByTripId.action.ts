'use server';

import { authAction } from '@/lib/server-actions/safe-actions';
import { z } from 'zod';
import { GetAllStepsByTripIdQuery } from './getAllStepsByTripId.query';

const GetAllStepsByTripIdSchema = z.object({
  tripId: z.string(),
});

export const GetAllStepsByTripIdAction = authAction(
  GetAllStepsByTripIdSchema,
  async ({ tripId }, _) => {
    return await GetAllStepsByTripIdQuery({ tripId });
  }
);
