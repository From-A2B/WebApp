import { prisma } from '@/lib/prisma';
import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const GetOneTripByIdQuerySchema = z.object({
  tripId: z.string()
});

export type GetOneTripByIdQuerySchema = z.infer<typeof GetOneTripByIdQuerySchema>;

export const GetOneTripByIdQuery = async ({tripId}: GetOneTripByIdQuerySchema) => {
  const trip = await prisma.trip.findFirst({
    where: {
      id: tripId
    }
  });

  return trip;
};

export type GetOneTripByIdQuery = NonNullable<
  Prisma.PromiseReturnType<typeof GetOneTripByIdQuery>
>;

export type  = GetOneTripByIdQuery extends (infer U)[]
  ? U
  : never;
