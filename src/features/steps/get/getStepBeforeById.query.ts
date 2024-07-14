import { prisma } from '@/lib/prisma';
import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const GetStepBeforeByIdQuerySchema = z.object({
  stepId: z.string(),
});

export type GetStepBeforeByIdQuerySchema = z.infer<
  typeof GetStepBeforeByIdQuerySchema
>;

export const GetStepBeforeByIdQuery = async ({
  stepId,
}: GetStepBeforeByIdQuerySchema) => {
  const step = await prisma.step.findUnique({
    where: {
      id: stepId,
    },
  });

  if (!step) return null;

  const previousStep = await prisma.step.findFirst({
    where: {
      tripId: step.tripId,
      rank: {
        lt: step.rank,
      },
    },
    orderBy: {
      rank: 'desc',
    },
  });

  return previousStep;
};

export type GetStepBeforeByIdQuery = Prisma.PromiseReturnType<
  typeof GetStepBeforeByIdQuery
>;
