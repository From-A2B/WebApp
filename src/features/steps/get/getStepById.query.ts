import { prisma } from '@/lib/prisma';
import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const GetStepByIdQuerySchema = z.object({
  stepId: z.string(),
  userId: z.string(),
});

export type GetStepByIdQuerySchema = z.infer<typeof GetStepByIdQuerySchema>;

export const GetStepByIdQuery = async ({
  stepId,
  userId,
}: GetStepByIdQuerySchema) => {
  const step = await prisma.step.findFirst({
    where: {
      id: stepId,
      trip: {
        userId,
      },
    },
  });

  return step;
};

export type GetStepByIdQuery = NonNullable<
  Prisma.PromiseReturnType<typeof GetStepByIdQuery>
>;
