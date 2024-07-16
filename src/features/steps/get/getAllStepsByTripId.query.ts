import { prisma } from '@/lib/prisma';
import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const GetAllStepsByTripIdQuerySchema = z.object({
  tripId: z.string(),
});

export type GetAllStepsByTripIdQuerySchema = z.infer<
  typeof GetAllStepsByTripIdQuerySchema
>;

export const GetAllStepsByTripIdQuery = async ({
  tripId,
}: GetAllStepsByTripIdQuerySchema) => {
  const steps = await prisma.step.findMany({
    where: {
      tripId,
    },
    orderBy: {
      rank: 'asc',
    },
  });

  return steps;
};

export type GetAllStepsByTripIdQuery = NonNullable<
  Prisma.PromiseReturnType<typeof GetAllStepsByTripIdQuery>
>;

export type GetAllStepsByTripIdQueryItem =
  GetAllStepsByTripIdQuery extends (infer U)[] ? U : never;
