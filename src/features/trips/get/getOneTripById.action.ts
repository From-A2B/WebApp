'use server';

import { authAction } from '@/lib/server-actions/safe-actions';
import { z } from 'zod';
import { GetOneTripByIdQuery } from './getOneTripById.query';

const GetOneTripByIdActionSchema = z.object({
  tripId: z.string(),
});

export const GetOneTripByIdAction = authAction(
  GetOneTripByIdActionSchema,
  async ({ tripId }) => {
    return GetOneTripByIdQuery({ tripId });
  }
);
