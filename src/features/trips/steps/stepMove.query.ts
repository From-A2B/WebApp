import { prisma } from '@/lib/prisma';
import { z } from 'zod';

export const StepMoveQuerySchema = z.object({
  tripId: z.string(),
  stepId: z.string(),
  userId: z.string(),
  newRank: z.string(),
});

export type StepMoveQuerySchema = z.infer<typeof StepMoveQuerySchema>;

export const StepMoveQuery = async ({
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
      o,
    },
  });
};
