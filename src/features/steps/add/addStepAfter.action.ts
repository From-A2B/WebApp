'use server';

import { ActionError, authAction } from '@/lib/server-actions/safe-actions';
import { getMiddleRank } from '@/utils/getMiddleRank';
import { z } from 'zod';
import { GetStepByIdQuery } from '../get/getStepById.query';
import { AddStepQuery } from './addStep.query';
import { AddStepSchema } from './addStep.schema';

const AddStepAfterSchema = z.object({
  tripId: z.string(),
  beforeStepId: z.string().optional(),
  afterStepId: z.string().optional(),
  newStep: AddStepSchema,
});

export const AddStepAfterAction = authAction(
  AddStepAfterSchema,
  async ({ tripId, beforeStepId, afterStepId, newStep }, { user }) => {
    let beforeStep;

    if (beforeStepId)
      beforeStep = await GetStepByIdQuery({
        stepId: beforeStepId,
        userId: user.id,
      });

    if (
      (beforeStepId && !beforeStep) ||
      (beforeStepId && beforeStep?.tripId !== tripId)
    )
      throw new ActionError(
        `The search stage does not exist or is not present in the current trip`
      );

    let afterStep;
    if (afterStepId)
      afterStep = await GetStepByIdQuery({
        stepId: afterStepId,
        userId: user.id,
      });

    if (
      (afterStepId && !afterStep) ||
      (afterStepId && afterStep?.tripId !== tripId)
    )
      throw new ActionError(
        `The search stage does not exist or is not present in the current trip`
      );

    const newRank = getMiddleRank(beforeStep?.rank, afterStep?.rank);

    const step: AddStepSchema = { ...newStep, rank: newRank };

    await AddStepQuery({ tripId: tripId, newStep: step });
  }
);
