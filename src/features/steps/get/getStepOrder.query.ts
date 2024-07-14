import { prisma } from '@/lib/prisma';
import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const GetStepOrderQuerySchema = z.object({
  stepId: z.string(),
});

export type GetStepOrderQuerySchema = z.infer<typeof GetStepOrderQuerySchema>;

export const GetStepOrderQuery = async ({
  stepId,
}: GetStepOrderQuerySchema) => {
  const step = await prisma.step.findFirst({
    where: {
      id: stepId,
    },
    select: {
      tripId: true,
    },
  });

  const steps = await prisma.step.findMany({
    where: {
      tripId: step?.tripId,
    },
    orderBy: { rank: 'asc' },
  });

  return steps.findIndex((s) => s.id === stepId) + 1;
};

export type GetStepOrderQuery = NonNullable<
  Prisma.PromiseReturnType<typeof GetStepOrderQuery>
>;
