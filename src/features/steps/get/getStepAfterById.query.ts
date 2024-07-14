import { prisma } from '@/lib/prisma';
import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const GetStepAfterByIdQuerySchema = z.object({
  stepId: z.string(),
});

export type GetStepAfterByIdQuerySchema = z.infer<
  typeof GetStepAfterByIdQuerySchema
>;

export const GetStepAfterByIdQuery = async ({
  stepId,
}: GetStepAfterByIdQuerySchema) => {
  const step = await prisma.step.findUnique({
    where: {
      id: stepId,
    },
  });

  if (!step) return null;

  const nextStep = await prisma.step.findFirst({
    where: {
      tripId: step.tripId,
      rank: {
        gt: step.rank,
      },
    },
    orderBy: {
      rank: 'asc',
    },
  });

  return nextStep;
};

export type GetStepAfterByIdQuery = Prisma.PromiseReturnType<
  typeof GetStepAfterByIdQuery
>;
