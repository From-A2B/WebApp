import { prisma } from '@/lib/prisma';
import type { Prisma } from '@prisma/client';

export const GetAverageFeedbackRatingQuery = async () => {
  const average = await prisma.feedback.aggregate({
    _avg: {
      review: true,
    },
  });

  return average._avg.review as number;
};

export type GetAverageFeedbackRating = NonNullable<
  Prisma.PromiseReturnType<typeof GetAverageFeedbackRatingQuery>
>;
