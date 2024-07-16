'use server';

import { action } from '@/lib/server-actions/safe-actions';
import { z } from 'zod';
import { GetAverageFeedbackRatingQuery } from './getAverageFeedback.query';

const GetAverageFeedbackSchema = z.null();

export const GetAverageFeedbackAction = action(
  GetAverageFeedbackSchema,
  async () => {
    const queryResult = await GetAverageFeedbackRatingQuery();

    return queryResult;
  }
);
