import { prisma } from '@/lib/prisma';
import { z } from 'zod';

export const StepMoveQuerySchema = z.object({
  tripId: z.string(),
  stepId: z.string(),
  userId: z.string(),
  newRank: z.number(),
});

export type StepMoveQuerySchema = z.infer<typeof StepMoveQuerySchema>;

export const StepChangeRankQuery = async ({
  stepId,
  tripId,
  newRank,
  userId,
}: StepMoveQuerySchema) => {
  await prisma.step.update({
    where: {
      id: stepId,
      tripId,
      trip: {
        userId,
      },
    },
    data: {
      rank: newRank,
    },
  });
};
