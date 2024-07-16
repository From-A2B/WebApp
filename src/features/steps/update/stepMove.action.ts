'use server';

import { ActionError, authAction } from '@/lib/server-actions/safe-actions';
import { getMiddleRank } from '@/utils/getMiddleRank';
import { z } from 'zod';
import { GetStepByIdQuery } from '../get/getStepById.query';
import { StepChangeRankQuery } from './stepChangeRank.query';

const StepMoveSchema = z.object({
  stepId: z.string(),
  upItemRank: z.number().optional(),
  downItemRank: z.number().optional(),
});

export const StepMoveAction = authAction(
  StepMoveSchema,
  async ({ downItemRank, stepId, upItemRank }, { user: { id: userId } }) => {
    const step = await GetStepByIdQuery({ stepId, userId });

    if (!step) throw new ActionError('This step does not exist');

    const newRank = getMiddleRank(upItemRank, downItemRank);

    await StepChangeRankQuery({ stepId, tripId: step.tripId, userId, newRank });

    return newRank;
  }
);
